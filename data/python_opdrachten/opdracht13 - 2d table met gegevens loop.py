__author__ = 'michel'
class gegevens(object):
    def __init__(self):
        self.data = []

    def set(self):
        self.data.append(self.asked)

    def checkStop(self):
        for value in data.asked:
            if str(value).upper() == "STOP":
                return True

        return False


data = gegevens()
while True:
    print("--- Nieuwe student ---")
    data.asked = []
    data.asked.append(raw_input("Naam student: "))
    data.asked.append(raw_input("     Vakcode: "))
    data.asked.append(raw_input("      Cijfer: "))

    if data.checkStop():
        break

    data.set()


print(data.data)