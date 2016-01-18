__author__ = 'michel'
def multiplyList(x,y):
    index = 0
    multiply = []
    while index < len(x):
        try:
            multiply[index]
        except IndexError:
            multiply.insert(index, 0)
        multiply[index] = x[index]*y[index]
        index+=1
    print(multiply)
multiplyList([2,3,6,5],[3,5,2,4])