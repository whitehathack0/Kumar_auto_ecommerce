from django.urls import path
from ..views import user_views

urlpatterns = [
    path('login/', user_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', user_views.register_user, name='register_user'),
    path('profile/', user_views.get_user_profile, name="get_user_profile"),
    path('', user_views.get_user, name="get_user"),
]