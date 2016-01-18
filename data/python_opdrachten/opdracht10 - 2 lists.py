__author__ = 'michel'

def checkTimes(x,y):
    times = []
    index = 0
    while index < 10:
        count = 0
        try:
            times[index]
        except IndexError:
            times.insert(index, 0)
        while count < len(x)-1:
            if x[count] == index:
                times[index] += 1
            count += 1
        count = 0
        while count < len(y)-1:
            if y[count] == index:
                times[index] += 1
            count += 1
        index += 1
    print(times)


checkTimes([2,5,6,4,3,3,4,3,2],[2,3,5,1,2,3,4,3,2])