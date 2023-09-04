from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import CustomUser
from .serializers import UserSerializer

@api_view(http_method_names=['get', 'post'])
def read_insert_user(request):
    if request.method == 'GET':
        users = CustomUser.objects.all()

        if(users):
            serializer = UserSerializer(instance=users, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response({
            'detail': "Coudn't find any users"
        }, status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'POST':
        serializer = UserSerializer(
            data = request.data,
            context={'request':request}
        )

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(http_method_names=['get', 'patch', 'delete'])
def put_detail_delete_user(request, pk):
    user = CustomUser.objects.all().filter(pk=pk).first()

    if user:
        if request.method == 'GET':
            serializer = UserSerializer(
                instance=user, 
                many=False,
                context={'request':request}
            )
            return Response(serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'PATCH':
            serializer = UserSerializer(
                instance=user,
                data=request.data,
                many=False,
                context={'request': request},
                partial=True,
            )
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )
        
        elif request.method == 'DELETE':
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
    return Response({
        'detail': f'User with id {pk} not found.'
    }, status=status.HTTP_404_NOT_FOUND)