from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #Campos que queremos convertir a json
        # fields = ('id', 'title', 'description', 'done') uno por uno
        fields = '__all__' #todos