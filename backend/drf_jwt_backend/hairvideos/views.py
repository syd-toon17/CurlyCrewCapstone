from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .models import Reply
from .serializers import CommentSerializer
from .serializers import ReplySerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_by_video_id(request, video_id):
    comments = Comment.objects.filter(video_id=video_id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_comment(request, video_id):
    if request.method == 'POST':
        new_data=request.data
        new_data['video_id'] = video_id
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_comments(request, comment_id):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT' :
        new_data=request.data
        new_data['comment_id'] = comment_id
        serializer = CommentSerializer(data=new_data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_replies(request, comment_id):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        new_data=request.data
        new_data['comment_id'] = comment_id
        serializer = ReplySerializer(data=new_data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'GET':
        replies = Reply.objects.filter(user_id=request.user.id)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def comment_replies(request, comment_id):
    if request.method == 'GET':
        replies = Reply.objects.filter(comment_id=comment_id)
        serializer = ReplySerializer(replies, many = True)
        return Response(serializer.data)
