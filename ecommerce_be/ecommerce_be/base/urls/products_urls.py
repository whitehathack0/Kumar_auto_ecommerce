from django.urls import path
from ..views.product_views import get_products, get_product

urlpatterns = [
    path('', get_products, name="get_products"),
    path('<str:pk>', get_product, name="get_product"),
]