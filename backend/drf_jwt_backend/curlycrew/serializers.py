from rest_framework import serializers
from .models import CurlyCrew

class CurlyCrewSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurlyCrew
        fields = ["user", "id", "first_name", "last_name", "curl_type"]