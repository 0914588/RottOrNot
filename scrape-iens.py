__author__ = 'michel'

from bs4 import BeautifulSoup

import urllib2
import re
url = urllib2.urlopen("https://www.iens.nl/restaurant/rotterdam/")

content = url.read()

soup = BeautifulSoup(content, "html.parser")

print(soup.a['data-lister-navigate'][(len(soup.a['data-lister-navigate'])-1)])

for link in soup.select('article[class=listerItem]'):
    for string in link.a.strings:
        print(string.strip())
