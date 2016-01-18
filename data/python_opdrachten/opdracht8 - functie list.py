__author__ = 'michel'
import math
def printlist(x):
    som = 0
    product = 0

    if ((len(x)-1)/2)%2 == 0:
        midden = x[((len(x)-1)/2)]
    else:
        mid = float(len(x)-1)/2
        top = x[int(math.ceil(mid))]
        floor = x[int(math.floor(mid))]
        midden = float(top+floor)/2

    count = 0
    while count < len(x):
        som += x[count]
        if product == 0:
            product = x[count]
        else:
            product *= x[count]
        count+=1

    gemiddeld = float(som)/len(x)

    print("Som: "+str(som))
    print("Product: "+str(product))
    print("Gemiddelde: "+str(gemiddeld))
    print("Midden: "+str(midden))

printlist([2,3,4,5])