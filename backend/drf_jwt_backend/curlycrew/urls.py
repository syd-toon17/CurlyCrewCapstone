from django.urls import path, include
from curlycrew import views

urlpatterns = [
    path('user/<str:id>/', views.get_by_user_id),
    path('edit_user/<str:id>/', views.update_user_by_id),
]
