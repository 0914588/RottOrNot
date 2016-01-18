class Administratie(object):
    def __init__(self):
        self.studenten = dict()
        self.state = 1
        self.inData = dict()

    def save_student(self):
        admin.studenten[admin.inData.get('stdNummer',0)] = {
            'voornaam': admin.inData.get('voornaam',''),
            'achternaam': admin.inData.get('achternaam',''),
            'klas': admin.inData.get('klas','')
        }
        self.inData.clear()

    def show_student(self):
        self.gegevens = self.studenten.get(admin.inData['stdNummer'], 'NotFound')
        if self.gegevens != 'NotFound':
            print "studentnummer: "+self.inData['stdNummer']
            print "voornaam     : "+self.gegevens['voornaam']
            print "achternaam   : "+self.gegevens['achternaam']
            print "klas         : "+self.gegevens['klas']

admin = Administratie()

while True:
    admin.state = int(raw_input("Wilt u student invoeren (1) of studenten inzien (2)?"))
    if admin.state == 1:
        admin.inData['stdNummer'] = str(raw_input("Geef het studentnummer op: "))

        admin.inData['voornaam'] = str(raw_input("Voornaam van student ("+str(admin.inData['stdNummer'])+"): "))
        admin.inData['achternaam'] = str(raw_input("Achternaam van student ("+str(admin.inData['stdNummer'])+"): "))
        admin.inData['klas'] = str(raw_input("Klas van student ("+str(admin.inData['stdNummer'])+"): "))
        admin.save_student()
    elif admin.state == 2:
        admin.inData['stdNummer'] = str(raw_input("Van welke student wilt u de gegevens inzien? (studentnummer): "))

        admin.show_student()