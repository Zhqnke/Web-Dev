from django.shortcuts import render # type: ignore
from django.http import JsonResponse # type: ignore


from .models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    data = [{'id': c.id, 'name': c.name, 'description': c.description, 'city': c.city, 'address': c.address} for c in companies]
    return JsonResponse(data, safe=False)

def company_detail(request, id):
    try:
        c = Company.objects.get(id=id)
        data = {'id': c.id, 'name': c.name, 'description': c.description, 'city': c.city, 'address': c.address}
        return JsonResponse(data)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def company_vacancies(request, id):
    try:
        c = Company.objects.get(id=id)
        vacancies = c.vacancies.all()
        data = [{'id': v.id, 'name': v.name, 'description': v.description, 'salary': v.salary} for v in vacancies]
        return JsonResponse(data, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = [{'id': v.id, 'name': v.name, 'description': v.description, 'salary': v.salary, 'company': v.company.id} for v in vacancies]
    return JsonResponse(data, safe=False)

def vacancy_detail(request, id):
    try:
        v = Vacancy.objects.get(id=id)
        data = {'id': v.id, 'name': v.name, 'description': v.description, 'salary': v.salary, 'company': v.company.id}
        return JsonResponse(data)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)

def vacancy_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [{'id': v.id, 'name': v.name, 'description': v.description, 'salary': v.salary} for v in vacancies]
    return JsonResponse(data, safe=False)

