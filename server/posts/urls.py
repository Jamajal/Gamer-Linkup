from django.urls import path
from .views import read_or_insert_post, put_detail_delete

urlpatterns = [
    path('api/v1/posts', read_or_insert_post),
    path('api/v1/posts/<int:pk>', put_detail_delete),
]
