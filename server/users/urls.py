from django.urls import path
from .views import read_insert_user, put_detail_delete_user

urlpatterns = [
    path('api/v1/users', read_insert_user),
    path('api/v1/users/<int:pk>', put_detail_delete_user),
]