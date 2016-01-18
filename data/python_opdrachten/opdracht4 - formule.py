__author__ = 'michel'
def macht(getal, m):
    count = 1
    m -= 1
    result = getal
    while count <= m:
        result *= getal
        count += 1
    return result

def faculteit(getal):
    count = 1
    result = count
    while count <= getal:
        result *= count
        count+=1
    return result

def function(x,y,z):
    return (macht(x,3) * macht(y,3) * macht(z,3) + faculteit(x))/faculteit(y)

g1 = int(raw_input("Getal 1: "))
g2 = int(raw_input("Getal 2: "))
g3 = int(raw_input("Getal 3: "))

print function(g1,g2,g3)
