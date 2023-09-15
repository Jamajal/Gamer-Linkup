from django.urls import path
from .views import read_or_insert_post, put_detail_delete_post, get_posts_by_id

urlpatterns = [
    path('api/v1/posts', read_or_insert_post),
    path('api/v1/posts/post/<int:pk>', put_detail_delete_post),
    path('api/v1/posts/<int:pk>', get_posts_by_id),
]
