__author__ = 'michel'
class gegevens(object):
    def __init__(self):
        self.data = []
        self.eind = 0
    def set(self):
        self.data.append(self.asked)

    def checkStop(self):
        for value in data.asked:
            if str(value).upper() == "STOP":
                return True
        return False

    def eindcijfer(self):
        vakcode = str(raw_input("Vul het gewenste vakcode in waar u het gemiddelde van wilt weten: "))
        count = 0
        for items in self.data:
            if str(items[1]) == vakcode:
                self.eind += items[2]
                count += 1
        return str(round(self.eind / count))

data = gegevens()
while True:
    print("--- Nieuw cijfer ---")
    data.asked = []
    while True:
        try:
            data.asked.append(raw_input("Naam student: "))
            if data.checkStop():
                break
            data.asked.append(raw_input("     Vakcode: "))
            if data.checkStop():
                break
            data.asked.append(int(float(raw_input("      Cijfer: "))))
            if data.checkStop():
                break
            break
        except:
            print("Vul de juiste waardes in: Naam = tekst, Vakcode = tekst, Cijfer = nummer")

    if data.checkStop():
        print("Het gemiddelde van het gekozen vakcode is: "+data.eindcijfer())
        break

    data.set()
