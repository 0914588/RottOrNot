__author__ = 'michel'
#!/usr/bin/python
# -*- coding: utf-8 -*-

class Init(object):
    def makeraster(self):
        for v in range(0, self.v):
            vertical = ""
            for h in range(0, self.h):
                vertical += raster.mapping[v][h]
                if h < self.h-1:
                    vertical += "|"
            print vertical
            horizontal = ""
            if v < self.v-1:
                for v2 in range(0, self.h):
                    horizontal += "---"
                    if v2 > 0:
                        horizontal += "-"
                print horizontal

    def makemap(self):
        raster.mapping = []
        for i in range(0,raster.v):
            raster.mapping.insert(i, [])
            for j in range(0, raster.h):
                raster.mapping[i].insert(j, "   ")

raster = Init()
raster.h = 4
raster.v = 4

raster.makemap()
raster.makeraster()

players = ["O","X"]

total = raster.h*raster.v
count = 0
while True:
    if count < total:
        playerIndex = count%2
        while True:
            inputx = int(raw_input("Speler "+str((count % 2)+1)+" ("+players[playerIndex]+") vul het x coordinaat (breedte) in: "))-1
            inputy = int(raw_input("Speler "+str((count % 2)+1)+" ("+players[playerIndex]+") vul het y coordinaat (hoogte) in: "))-1
            if raster.mapping[inputy][inputx] != "   ":
                print("Deze velden zijn al ingevuld, vul opnieuw in!")
            else:
                break

        raster.mapping[inputy][inputx] = " "+players[playerIndex]+" "
        raster.makeraster()

        count += 1
    else:
        print("Bord is vol!")
        break