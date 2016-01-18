__author__ = 'michel'
def printGrootste(num1,num2,num3):
    if num1 > num2 and num1 > num3:
        print num1
    elif num2 > num1 and num2 > num3:
        print num2
    else:
        print num3

g1 = int(raw_input("Getal 1:"))
g2 = int(raw_input("Getal 2:"))
g3 = int(raw_input("Getal 3:"))

printGrootste(g1,g2,g3)