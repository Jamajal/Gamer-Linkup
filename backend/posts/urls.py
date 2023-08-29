from django.contrib import admin
from django.urls import path
from .views import get_posts, get_post_detail

urlpatterns = [
    path('api/v1/posts', get_posts),
    path('api/v1/posts/<int:pk>', get_post_detail)
]
