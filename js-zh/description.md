Az alábbi feladatok megoldásával készíts egy *D&D Stat Generáló* alkalmazást. 

A ZH 10 pontos, az egyes feladatokhoz részpontszám is szerezhető. Az utolsó feladat megoldásával plusz pont szerezhető. 

A megoldásodat `[vezeteknev_keresztnev_neptun].zip` néven, tömörítve küldd el a `reiem8@inf.elte.hu` címre **JS csoportZH** tárggyal. 

A munkád ellenőrzéséhez tájékoztató jelleggel használhatod a `character-sheet.test.js` fájlban definiált egység-jellegű teszteket, az értékelés során viszont a manuális tesztelés eredményét fogom figyelembe venni. 

Feladatok:
1. (2 pont) Készítsd el a `rollDice` függvényt, melynek visszatérési értéke
    - egy 4 elemű tömb
    - melynek minden eleme 1 és 6 közötti véletlen generált, egész szám (A véletlen szám generálásához használd a [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) beépített függvényt)
2. (2 pont) A 'Roll 4d6 drop lowest' gomb kattintásakor generálj 4 random számot 1 és 6 között (a `rollDice` függvény segítségével), és a legalacsonyabb szám eldobása után vedd a számok összegét. Ezt az összeget jelenítsd meg a `roll-result` id-jú elemben. Amennyiben az előző feladatot nem tudtad megoldani, dolgozz a [2, 5, 1, 4] tömbbel. 
    ```
    Példa: 
    A dobott számok: 2, 5, 1, 3
    A legalacsonyabb szám eldobása után: 2, 5, 3
    Az összegük: 2 + 5 + 3 = 10
    ```
3. (2 pont) Generáld le az oldal betöltésekor a konténer elemeket mind a 6 ability score-hoz a minta alapján (STR)
    ```
    Az ability score-ok a következők: STR, DEX, CON, INT, WIS, CHA
    ```
    Az ability score-ok teljes neve: Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma
4. (4 pont) Az egyes konténerekre kattintáskor írd bele a kattintott elem `stats__score`-jába a `roll-result` értékét, majd töröld az előző dobás eredményét. A megoldáshoz **delegálást** használj.
5. (+2 pont) A Calculate Modifiers kattintásakor töltsd ki az összes ability score-hoz tartozó `stats__modifier`-eket. A modifier számítása a következő szabály szerint történik: 
    ```
    modifier = (score - 10) / 2 alsó egész része
    ```
    ```
    Példa: 
        score = 10  modifier = 0
        score = 18  modifier = +4
        score = 7   modifier = -2
    ```