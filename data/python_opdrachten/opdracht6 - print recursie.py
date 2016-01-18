__author__ = 'michel'
def printer(x,y):
    if x <= y:
        print x

        printer(x+1,y)

printer(5,10)