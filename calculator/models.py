from django.db import models


class price_Range(models.Model):
    name = models.CharField(max_length=50, null=False)
    price = models.IntegerField(null=False)


class update_price(models.Model):
    name = models.CharField(max_length=50, null=False)
    rate = models.IntegerField(null=False)
