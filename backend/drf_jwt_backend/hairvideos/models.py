from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length= 255)
    text = models.CharField(max_length= 255)
    likes = models.IntegerField(blank=True, default=0)
    dislikes = models.IntegerField(blank=True, default=0)

class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, null=True)
    text = models.CharField(max_length= 255)

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length= 255)
