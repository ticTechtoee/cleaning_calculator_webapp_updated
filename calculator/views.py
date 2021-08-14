from django.shortcuts import render
from calculator.models import price_Range
from calculator.models import update_price


def index(request):
    selected_range = None
    range_price = price_Range.objects.all()

    rate1 = update_price.objects.get(name='rate1')
    rate2 = update_price.objects.get(name='rate2')
    rate3 = update_price.objects.get(name='rate3')
    rate4 = update_price.objects.get(name='rate4')

    if request.method == "POST":
        if 'submit_for_price_Range' in request.POST:
            selected_range = request.POST.get("range")
            range_price = range_price.filter(name=selected_range)
        if 'update_value' in request.POST:
            if 'rate1' in request.POST:
                rate1.rate = request.POST['rate1']
                rate1.save()
            if 'rate2' in request.POST:
                rate2.rate = request.POST['rate2']
                rate2.save()
            if 'rate3' in request.POST:
                rate3.rate = request.POST['rate3']
                rate3.save()
            if 'rate4' in request.POST:
                rate4.rate = request.POST['rate4']
                rate4.save()
            else:
                print("Invalid Input")

    price = price_Range.objects.order_by('name').values_list('name', flat=True)
    context = {'ranges': price, 'range_price': range_price, 'selected_range': selected_range, 'rates1': rate1,
               'rates2': rate2, 'rates3': rate3, 'rates4': rate4, }
    return render(request, 'calculator/index.html', context)
