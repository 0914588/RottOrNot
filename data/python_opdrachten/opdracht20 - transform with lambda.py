#def transform(list, consumer):
#    for i in list:
#        consumer(i)
#newlist = []
#transform([1,4,6,3,3], lambda x: newlist.append(x*2))
#print newlist

def getCities(list, consumer):
    cities = []
    for obj in list:
        for k,v in obj.iteritems():
            if consumer(k):
                cities.append(v)
    print cities

students = [
    {'naam': 'Michel', 'leeftijd': 20, 'woonplaats': 'Capelle aan den IJssel'},
    {'naam': 'Henkie', 'leeftijd': 25, 'woonplaats': 'Rotterdam'}
]

getCities(students, lambda x: x == 'woonplaats')
