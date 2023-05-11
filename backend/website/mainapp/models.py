from django.db import models

# Create your models here.
class Carousel(models.Model):
    image = models.ImageField(upload_to='carousel')
    title = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name = 'Carousel'
        verbose_name_plural = 'Carousels'
    
    def __str__(self):
        return self.title