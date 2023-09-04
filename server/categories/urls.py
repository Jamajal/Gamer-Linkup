from django.urls import path
from .views import read_or_insert_category, put_detail_delete_category

urlpatterns = [
    path('api/v1/categories', read_or_insert_category),
    path('api/v1/categories/<int:pk>', put_detail_delete_category),
]
