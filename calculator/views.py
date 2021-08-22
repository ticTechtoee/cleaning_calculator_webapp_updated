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
    rate5 = update_price.objects.get(name='rate5')
    rate6 = update_price.objects.get(name='rate6')
    rate7 = update_price.objects.get(name='rate7')
    rate8 = update_price.objects.get(name='rate8')
    rate9 = update_price.objects.get(name='rate9')
    rate10 = update_price.objects.get(name='rate10')
    rate11 = update_price.objects.get(name='rate11')
    rate12 = update_price.objects.get(name='rate12')
    rate13 = update_price.objects.get(name='rate13')
    rate14 = update_price.objects.get(name='rate14')

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
            if 'rate5' in request.POST:
                rate5.rate = request.POST['rate5']
                rate5.save()
            if 'rate6' in request.POST:
                rate6.rate = request.POST['rate6']
                rate6.save()
            if 'rate7' in request.POST:
                rate7.rate = request.POST['rate7']
                rate7.save()
            if 'rate8' in request.POST:
                rate8.rate = request.POST['rate8']
                rate8.save()
            if 'rate9' in request.POST:
                rate9.rate = request.POST['rate9']
                rate9.save()
            if 'rate10' in request.POST:
                rate10.rate = request.POST['rate10']
                rate10.save()
            if 'rate11' in request.POST:
                rate11.rate = request.POST['rate11']
                rate11.save()
            if 'rate12' in request.POST:
                rate12.rate = request.POST['rate12']
                rate12.save()
            if 'rate13' in request.POST:
                rate13.rate = request.POST['rate13']
                rate13.save()
            if 'rate14' in request.POST:
                rate14.rate = request.POST['rate14']
                rate14.save()
            else:
                print("Invalid Input")

    price = price_Range.objects.order_by('name').values_list('name', flat=True)
    context = {'ranges': price, 'range_price': range_price, 'selected_range': selected_range, 'rates1': rate1,
               'rates2': rate2, 'rates3': rate3, 'rates4': rate4, 'rates5': rate5, 'rates6': rate6, 'rates7': rate7,
               'rates8': rate8, 'rates9': rate9, 'rates10': rate10, 'rates11': rate11, 'rates12': rate12,
               'rates13': rate13, 'rates14': rate14, }
    return render(request, 'calculator/index.html', context)


def ui(request):
    selected_range = None
    range_price = price_Range.objects.all()

    rate1 = update_price.objects.get(name='rate1')
    rate2 = update_price.objects.get(name='rate2')
    rate3 = update_price.objects.get(name='rate3')
    rate4 = update_price.objects.get(name='rate4')
    rate5 = update_price.objects.get(name='rate5')
    rate6 = update_price.objects.get(name='rate6')
    rate7 = update_price.objects.get(name='rate7')
    rate8 = update_price.objects.get(name='rate8')
    rate9 = update_price.objects.get(name='rate9')
    rate10 = update_price.objects.get(name='rate10')
    rate11 = update_price.objects.get(name='rate11')
    rate12 = update_price.objects.get(name='rate12')
    rate13 = update_price.objects.get(name='rate13')
    rate14 = update_price.objects.get(name='rate14')

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
            if 'rate5' in request.POST:
                rate5.rate = request.POST['rate5']
                rate5.save()
            if 'rate6' in request.POST:
                rate6.rate = request.POST['rate6']
                rate6.save()
            if 'rate7' in request.POST:
                rate7.rate = request.POST['rate7']
                rate7.save()
            if 'rate8' in request.POST:
                rate8.rate = request.POST['rate8']
                rate8.save()
            if 'rate9' in request.POST:
                rate9.rate = request.POST['rate9']
                rate9.save()
            if 'rate10' in request.POST:
                rate10.rate = request.POST['rate10']
                rate10.save()
            if 'rate11' in request.POST:
                rate11.rate = request.POST['rate11']
                rate11.save()
            if 'rate12' in request.POST:
                rate12.rate = request.POST['rate12']
                rate12.save()
            if 'rate13' in request.POST:
                rate13.rate = request.POST['rate13']
                rate13.save()
            if 'rate14' in request.POST:
                rate14.rate = request.POST['rate14']
                rate14.save()
            else:
                print("Invalid Input")

    price = price_Range.objects.order_by('name').values_list('name', flat=True)
    context = {'ranges': price, 'range_price': range_price, 'selected_range': selected_range, 'rates1': rate1,
               'rates2': rate2, 'rates3': rate3, 'rates4': rate4, 'rates5': rate5, 'rates6': rate6, 'rates7': rate7,
               'rates8': rate8, 'rates9': rate9, 'rates10': rate10, 'rates11': rate11, 'rates12': rate12,
               'rates13': rate13, 'rates14': rate14, }

    return render(request, 'calculator/newUI.html', context)
