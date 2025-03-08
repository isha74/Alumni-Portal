from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)

        # Save data to database (you need to create a User model)
        # Example: User.objects.create(**data)

        return JsonResponse({"success": True, "message": "Account created successfully!"})

    return JsonResponse({"success": False, "message": "Invalid request"})
