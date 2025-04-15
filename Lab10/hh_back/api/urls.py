from django.urls import path
from . import views

urlpatterns = [
    # Function-Based Views
    path('companies/', views.company_list, name='company-list-func'),
    path('companies/<int:id>/', views.company_detail, name='company-detail-func'),
    path('companies/<int:id>/vacancies/', views.company_vacancies, name='company-vacancies-func'),
    path('vacancies/', views.vacancy_list, name='vacancy-list-func'),
    path('vacancies/<int:id>/', views.vacancy_detail, name='vacancy-detail-func'),
    path('vacancies/top_ten/', views.vacancy_top_ten, name='top-ten-vacancies-func'),

    # Class-Based Views
    path('cb/companies/', views.CompanyListCreateAPIView.as_view(), name='company-list-class'),
    path('cb/companies/<int:pk>/', views.CompanyRetrieveUpdateDestroyAPIView.as_view(), name='company-detail-class'),
    path('cb/companies/<int:company_id>/vacancies/', views.CompanyVacanciesListAPIView.as_view(), name='company-vacancies-class'),
    path('cb/vacancies/', views.VacancyListCreateAPIView.as_view(), name='vacancy-list-class'),
    path('cb/vacancies/<int:pk>/', views.VacancyRetrieveUpdateDestroyAPIView.as_view(), name='vacancy-detail-class'),
    path('cb/vacancies/top_ten/', views.TopTenVacanciesAPIView.as_view(), name='top-ten-vacancies-class'),
]