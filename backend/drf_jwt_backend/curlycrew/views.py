from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import CurlyCrew
from .serializers import CurlyCrewSerializer

# @api_view(['GET'])
# @permission_classes([AllowAny])
# def get_by_user_id(request, user,id):
#     user = CurlyCrew.objects.filter(user_id=user_id)
#     serializer = CurlyCrewSerializer(user, many=False)
#     return Response(serializer.data)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def get_by_user_id(request, id):
    print(
    'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        user = CurlyCrew.objects.filter(user_id=id)
        serializer = CurlyCrewSerializer(user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # elif request.method == 'PUT' :
    #     new_data=request.data
    #     new_data['comment_id'] = comment_id
    #     serializer = CurlyCrewSerializer(data=new_data)
    #     if serializer.is_valid(raise_exception=True):
    #         serializer.save(user=request.user)
    #         return Response(serializer.data, status=status.HTTP_200_OK)