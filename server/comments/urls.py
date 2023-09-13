from django.urls import path
from .views import read_or_insert_comment, put_detail_delete_comment

urlpatterns = [
    path('api/v1/comments', read_or_insert_comment),
    path('api/v1/comments/<int:pk>', put_detail_delete_comment),
]
