from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class CurlyGuardian(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    guardian_first_name = models.CharField(max_length= 225)
    guardian_last_name = models.CharField(max_length= 225)
    other_individual_name = models.CharField(max_length=255)
    other_individual_curl_type = models.CharField(max_length= 225)