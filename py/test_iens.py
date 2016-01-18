__author__ = 'michel'

from bs4 import BeautifulSoup

import csv
import urllib2
import json
url = urllib2.urlopen("https://www.iens.nl/restaurant/rotterdam/")

content = url.read()

soup = BeautifulSoup(content, "html.parser")

with open('../data/Iens.csv', 'wb') as csvfile:
    schrijf = csv.writer(csvfile, delimiter='|',
                            quotechar=' ')

    schrijf.writerow(["naam","cijfer","adres","latitude","longitude"])

    for link in soup.select('article[class=listerItem]'):
        # get the name
        for string in link.a.strings:
            print(string.strip())
            name = string.strip()
        # get the rating
        for cijferdiv in link.find_all("div", class_="scoreMedium scoreMediumBest small-hide"):
            for cijfer in cijferdiv.strings:
                print(cijfer)
        # get the address
        addressText = ''
        for addressdiv in link.find_all("address"):
            for address in addressdiv.strings:
                addressText += address.strip().replace(' ', '+')+'+'
            print(addressText)
            addressAPI = urllib2.urlopen("https://maps.googleapis.com/maps/api/geocode/json?address="+addressText);
            addr = addressAPI.read()
            j = json.loads(addr)
            lat = j['results'][0]['geometry']['location']['lat']
            lng = j['results'][0]['geometry']['location']['lng']
            schrijf.writerow([name, cijfer, addressText, str(lat), str(lng)])
