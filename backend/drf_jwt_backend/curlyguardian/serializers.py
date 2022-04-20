from rest_framework import serializers
from .models import CurlyDependant, CurlyGuardian

class CurlyGuardianSerializer(serializers.ModelSerializer):
    class Meta:
        model = CurlyGuardian
        fields = ["user", "id", "guardian_first_name", "guardian_last_name"]
        depth = 1
    class CurlyDependantSerializer(serializers.ModelSerializer):
        class Meta:
            model = CurlyDependant
            fields =["id", "dependant_first_name", "dependant_last_name"]
            depth = 1

        