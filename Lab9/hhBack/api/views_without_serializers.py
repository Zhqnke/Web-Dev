import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Company , Vacancy , Application

#-------------Company requests---------
#read
@csrf_exempt
def companies_list(request):
    #GET request list of all companies or SELECT * method
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json , safe=False)    
    #POST request company to list of company or INSERT INTO method
    elif request.method == 'POST':
        data = json.loads(request.body)
        try: 
            company = Company.objects.create(
                name = data['name'], 
                description = data['description'],
                city = data['city'],
                address = data['address'],
            )
        except Exception as e :
            return JsonResponse({'error' : str(e)})    
        return JsonResponse(company.to_json() , status=201)
    
@csrf_exempt
def company_detail(request, company_id=None):
    try :  
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:     
        return JsonResponse({'error' : str(e)} , status=404)
    #GET request to company's detail or SELECT one obj
    if request.method == 'GET' : 
        return JsonResponse(company.to_json(), status=200)
    #PUT request to company , replace data of one company
    elif request.method == "PUT" : 
        new_data = json.loads(request.body)
        company.name = new_data['name']
        company.description = new_data['description']
        company.city = new_data['city']
        company.address = new_data['address']
        company.save()
        return JsonResponse(company.to_json())
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
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json , safe=False)
    #POST request vacancy to list of vacancies or INSERT INTO method
    elif request.method == 'POST' : 
        data = json.loads(request.body)
        try : 
            company = Company.objects.get(id=data['company'])
        
            vacancy = Vacancy.objects.create(
                name = data['name'], 
                description = data['description'], 
                salary = data['salary'],
                company=company, 
            )
        except Company.DoesNotExist:
            return JsonResponse({'error' : 'Company not found'}, status=404)
        except Exception as e : 
            return JsonResponse({'error' : str(e)}, status=400)
        
        return JsonResponse(vacancy.to_json() , status=201)
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


@csrf_exempt 
def applications_list(request) :
    if request.method == 'GET' :
        applications = Application.objects.all()
        applications_json = [a.to_json() for a in applications]
        return JsonResponse(applications_json , safe=False) 
    elif request.method == 'POST' :
        data = json.loads(request.body)
        try : 
            vacancy = Vacancy.objects.get(id=data['vacancy'])
            application = Application.objects.create(
                full_name = data['full_name'], 
                email = data['email'], 
                vacancy = vacancy,     
            )
        except Vacancy.DoesNotExist:
            return JsonResponse({'error' : 'Vacancy not found'}, status=404)
        except Exception as e : 
            return JsonResponse({'error' : str(e)}, status=400)
        
        return JsonResponse(vacancy.to_json() , status=201)
@csrf_exempt
def application_detail(request , application_id=None):
    try :
        application = Application.objects.get(id=application_id)
    except Vacancy.DoesNotExist as e:     
        return JsonResponse({'error' : str(e)}, status=404), 
    if request.method == 'GET':
        return JsonResponse(application.to_json()) 
        