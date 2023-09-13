from django.urls import path
from .views import read_insert_user, put_detail_delete_user, login, signup, test_token

urlpatterns = [
    path('api/v1/users', read_insert_user),
    path('api/v1/users/<int:pk>', put_detail_delete_user),
    path('api/v1/auth/login', login),
    path('api/v1/auth/signup', signup),
    path('api/v1/auth/token', test_token),
]