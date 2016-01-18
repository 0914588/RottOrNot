def showHi(x):
    if x == 4:
        return "HHHHH  I"
    else:
        if x == 1 or x > 2:
            i = "  I"
        else:
            i = ""

        return "H   H"+i

def startHi():
    condition = True
    x = 1
    while condition:
        print showHi(x)
        if x == 7:
            condition = False
        x+=1

startHi()
print 1+1
startHi()