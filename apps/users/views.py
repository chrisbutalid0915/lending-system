from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView


class AuthTokenView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        key = request.data.get('key')

        if key is not None:
            token = Token.objects.filter(key=key).first()
            if token:
                return Response({"token": token.key})
        return Response({"error": "Invalid credentials"}, status=400)
