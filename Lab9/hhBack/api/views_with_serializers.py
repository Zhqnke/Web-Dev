import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company , Vacancy
from api.serializers import CompanyModelSerializer , VacancyModelSerializer

#-------------Company requests---------
#read
@csrf_exempt
def companies_list(request):
    #GET request list of all companies or SELECT * method
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanyModelSerializer(companies , many = True)
        #if many = false , expects only one obj
        return JsonResponse(serializer.data , safe = False)        
        
        #POST request company to list of company or INSERT INTO method
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanyModelSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data , status=201)
        return JsonResponse(serializer.errors , status=400)    


@csrf_exempt
def company_detail(request, company_id=None):
    try :  
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:     
        return JsonResponse({'error' : str(e)} , status=404)
    #GET request to company's detail or SELECT one obj
    if request.method == 'GET' : 
        serializer = CompanyModelSerializer(company)
        return JsonResponse(serializer.data)
    
    #PUT request to company , replace data of one company
    elif request.method == "PUT" : 
        new_data = json.loads(request.body)
        serializer = CompanyModelSerializer(instance=company , data=new_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data , status = 201)
        return JsonResponse(serializer.errors , status=400)
    
    #DELETE request of one company    
    elif request.method == 'DELETE' : 
        company.delete()
        return JsonResponse({'message' : 'Product was deleted'})

#-------------Vacancies requests---------
@csrf_exempt
def vacancies_list(request):
    #GET request list of all vacancies or SELECT * method
    if request.method == 'GET' : 
        vacancies = Vacancy.objects.all()
        serializer = VacancyModelSerializer(vacancies, many = True)
        return JsonResponse(serializer.data , safe=False)

    #POST request vacancy to list of vacancies or INSERT INTO method
    elif request.method == 'POST' : 
        data = json.loads(request.body)
        serializer = VacancyModelSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data , status=201)
        return JsonResponse(serializer.errors , status=400)
    
@csrf_exempt
def vacancy_details(request, vacancy_id) :
    try :
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:     
        return JsonResponse({'error' : str(e)}, status=404), 
    #GET request to company's detail or SELECT one obj
    if request.method == 'GET' :
        return JsonResponse(vacancy.to_json() , status=200)
    #PUT request to company , replace data of one company
    elif request.method == 'PUT' : 
        new_data = json.loads(request.body)
        company = Company.objects.get(name=new_data['company'])
        
        vacancy.name = new_data['name']
        vacancy.description = new_data['description']
        vacancy.salary = new_data['salary']
        vacancy.company = company
        vacancy.save()
        
        return JsonResponse(vacancy.to_json())
    #DELETE request of one vacamcy   
    elif request.method == 'DELETE' : 
        vacancy.delete()
        return JsonResponse({'message' : 'Vacancy was deleted'})
@csrf_exempt
def top10_vacancies(request) :
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse([v.to_json() for v in vacancies] , safe= False)


#----------Companies vacancies--------------

@csrf_exempt
def company_vacancies(request , company_id=None) : 
    company = Company.objects.get(id=company_id)
    vacancies = company.vacancies.all()
    return JsonResponse([v.to_json() for v in vacancies], safe=False)
