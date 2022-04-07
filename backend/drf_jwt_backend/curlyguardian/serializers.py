from rest_framework import serializers
from .models import CurlyGuardian

class CurlyGuardianSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurlyGuardian
        fields = ["user", "id", "guardian_first_name", "guardian_last_name", "other_individual_name", "other_individual_curl_type"]