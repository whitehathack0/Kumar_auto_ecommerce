from rest_framework.response import Response
from rest_framework.decorators import api_view

from .products import products


@api_view(['GET'])
def get_routes(request):
    return Response('SO MANY ROUTES')


@api_view(['GET'])
def get_products(request):
    return Response(products)


@api_view(['GET'])
def get_product(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)
