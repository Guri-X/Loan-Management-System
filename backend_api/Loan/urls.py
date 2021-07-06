from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from .views import LoanList, LoanDetails, current_user, UserList

urlpatterns = [
    path('', LoanList.as_view(), name='Loan'),
    path('<int:pk>/', LoanDetails.as_view()),
    path('token-auth/', obtain_jwt_token),
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('auth/', include('rest_auth.urls')),    
    path('auth/register/', include('rest_auth.registration.urls')),
]