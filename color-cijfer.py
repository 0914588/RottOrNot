__author__ = 'wietz_000'

info = []
print info
while True:
    getal = raw_input("Getal..... ")
    getal = float(getal)

    color = 0

    if (getal <= 2.4):
        color = 1
    elif (getal >= 2.5 and getal <= 4.4):
        color = 2
    elif (getal >= 4.5 and getal <= 6.4):
        color = 3
    elif (getal >= 6.5 and getal <= 8.4):
        color = 4
    elif (getal >= 8.5 and getal <= 10):
        color = 5

    print color


