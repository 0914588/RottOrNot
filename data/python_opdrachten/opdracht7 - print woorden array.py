__author__ = 'michel'
def reverseorder(x):
    count = len(x)-1
    while count >= 0:
        print(x[count])
        count -= 1

dontStop = True
woorden = []
while dontStop:
    tmp = raw_input("voer een woord in: ")
    if tmp != "stop":
        woorden.append(tmp)
    else:
        dontStop = False
        reverseorder(woorden)
