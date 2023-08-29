from django.contrib import admin
from .models import Post
from .models import Category

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    ...


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    ...