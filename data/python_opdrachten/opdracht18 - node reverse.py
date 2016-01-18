__author__ = 'michel'
class Empty:
    def __init__(self):
        self.isEmpty = True

class Node:
    def __init__(self, value, tail):
        self.isEmpty = False
        self.value = value
        self.tail = tail

    def printAll(self):
        x = self
        output = ''
        while x and hasattr(x, 'value'):
            if output != '':
                comma = ','
            else:
                comma = ''
            output = output + comma + x.value
            x = x.tail
        print(output)

    def printAllReverse(self):
        x = self
        output = ''
        while x and hasattr(x, 'value'):
            if output != '':
                comma = ','
            else:
                comma = ''
            output = x.value + comma + output
            x = x.tail
        print(output)

    def size(self):
        x = self
        count = 0
        while x and hasattr(x, 'value'):
            count += 1
            x = x.tail
        return(count)

    def get(self, index):
        x = self
        count = 0
        while x and hasattr(x, 'value'):
            count += 1
            if count == index:
                return x.value
                break
            x = x.tail


mijnlist = Node("a", Node("b", Node("c", Empty)))

#mijnlist.printAll()
#print(mijnlist.size() == 3)
#print(mijnlist.get(3))
mijnlist.printAllReverse()