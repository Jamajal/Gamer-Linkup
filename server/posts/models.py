from django.db import models
from users.models import CustomUser
from categories.models import Category

class PostManager(models.Manager):
    def get_posts_by_order(self):
        return self.order_by('-votes')

class Post(models.Model):
    objects = PostManager()
    title = models.CharField(max_length=65, verbose_name=('Title'))
    description = models.TextField()
    votes = models.IntegerField(default=0)
    invited_players = models.IntegerField(default=1)
    cover = models.ImageField(upload_to='posts/covers/%Y/%m/%d/', blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    category = models.ManyToManyField(
        Category, 
        blank=True,
        default=''
    )
    author = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return self.title
