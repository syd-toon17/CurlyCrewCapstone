from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import CurlyCrew
from .serializers import CurlyCrewSerializer


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def get_by_user_id(request, id):
    if request.method == 'GET':
        user = CurlyCrew.objects.filter(user=id)
        serializer = CurlyCrewSerializer(user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   