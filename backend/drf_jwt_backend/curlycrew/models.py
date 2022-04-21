from re import M
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class CurlyCrew(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length= 225)
    last_name = models.CharField(max_length= 225)
    curl_type = models.CharField(max_length= 225)
    self_or_other = models.CharField(max_length= 225)