from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=65)
    description = models.CharField(max_length=65, default='')
    cover = models.ImageField(upload_to='categories/covers/%Y/%m/%d/', blank=True, default='')

class PostManager(models.Manager):
    def get_posts_by_order(self):
        return self.order_by('votes')

class Post(models.Model):
    objects = PostManager()
    title = models.CharField(max_length=65, verbose_name=('Title'))
    description = models.TextField()
    votes = models.IntegerField()
    cover = models.ImageField(upload_to='posts/covers/%Y/%m/%d/', blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(
        Category, 
        on_delete=models.SET_NULL, 
        null=True
    )

