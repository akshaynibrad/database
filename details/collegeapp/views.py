import json
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.shortcuts import HttpResponse
from collegeapp.models import College


def college_details(request):
    return render(request,'collegeapp/college.html')


@csrf_exempt
def save_college_details(request):
    print 'In save_college_details.', request.POST
    College(
        college_name=request.POST.get('collegename'),
        college_address=request.POST.get('address'),
        college_city=request.POST.get('collegecity'),
    ).save()
    data = {'success': 'send succesfully'}
    return HttpResponse(json.dumps(data), content_type='application/json')
