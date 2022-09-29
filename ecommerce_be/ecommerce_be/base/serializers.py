from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    is_admin = serializers.SerializerMethodField(read_only=True)

    def get_name(self, obj):
        name = obj.first_name
        return name if name else obj.email

    def get__id(self, obj):
        return obj.id

    def get_is_admin(self, obj):
        return obj.is_staff

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'is_admin']


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    def get_token(self, obj):
        token = str(RefreshToken.for_user(obj))
        return token

    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'is_admin', 'token']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
