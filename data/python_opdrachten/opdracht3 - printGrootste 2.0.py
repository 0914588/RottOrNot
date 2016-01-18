__author__ = 'michel'
def printGrootste(num1,num2,num3):
    if num1 > num2 and num1 > num3:
        return num1
    elif num2 > num1 and num2 > num3:
        return num2
    else:
        return num3

g1 = int(raw_input("Getal 1:"))
g2 = int(raw_input("Getal 2:"))
g3 = int(raw_input("Getal 3:"))

r1 = printGrootste(g1,g2,g3)
r2 = r1 * 2
r3 = r1 * 3


print r1
print r2
print r3
