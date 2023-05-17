# PHP Csoport ZH
Az alábbi feladatok megoldásával készíts egy *Game Inventory* alkalmazást. 

A ZH 10 pontos, az egyes feladatokhoz részpontszám is szerezhető, a megoldásra 45 perc áll rendelkezésre. Az utolsó feladat megoldásával plusz pont szerezhető. 

Kiindulásként az `index.php` fájlt használd, a feladatok megoldása során ezt alakítsd át. 

A megoldásodat `[vezeteknev_keresztnev_neptun].zip` néven, tömörítve küldd el a `reiem8@inf.elte.hu` címre **PHP csoportZH** tárggyal. A leadás határideje 2023.05.17. 18:35. 

# Feladatok:
1. (2 pont) Készíts egy táblázatot a `$games` asszociatív tömböket tartalmazó változó alapján a PHP eszközeivel. Az első játék adatait felhasználva a táblázat egy sorát példaként megtalálod a kiindulási fájlban. 
2. (3 pont) Legyen lehetőség arra, hogy **URL-ben megadott paraméter alapján** rendezni lehessen ezt a listát a játék neve, vagy a megjelenés éve szerint növekvő sorrendben. A paraméter neve legyen `sort`. (Tehát `index.php?sort=name` esetén név alapján, `index.php?sort=release` esetén pedig a megjelenés éve alapján rendezd a játékokat). Ha nincs, üres, vagy nem értelmezhető a `sort` paraméter, az eredeti sorrendjükben jelenítsd meg a játékokat!
3. (3 pont) Egészítsd ki az alkalmazást, hogy az űrlap segítségével új játékokat lehessen hozzáadni a táblázathoz. A játék nevét és a kiadás évét kötelező megadni. Ha a kötelező mezőket üresen maradnak, jeleníts meg hibaüzenetet a küldés gomb alatt. 
4. (2 pont) Az `Adatok Betöltése` gombra kattintva egészítsd ki a táblázatot az `backup.txt` fájl tartalma alapján. 
- A fájl sorai egy-egy játékhoz tartozó adatokat tartalmaznak
- Egy sor a következő módon néz ki: `[játék neve], [játék kiadásának időpontja], [játék eladásainak száma], [játék kiadója]`
    - A játék adatai vesszővel vannak elválasztva egymástól
- Kezeld azt az esetet is, ha a fájl nem létezik!
5. (+2 pont) A `Adatok Mentése` gombra kattintás hatására mentsd el a táblázatban szereplő játékokat egy `export.txt` nevű fájlba, a `backup.txt` formátumával megegyező módon. (Figyelj arra, hogy ha a fájl még nem létezik, hozd létre, ha pedig már létezik, írd felül).