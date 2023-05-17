<?php
$games = [
    [
        "name" =>  "The Witcher 3",
        "releaseYear" => 2015,
        "sales" => 40000000,
        "publisher" => "CD Projekt",
    ],
    [
        "name" =>  "Minecraft",
        "releaseYear" => 2011,
        "sales" => 238000000,
        "publisher" => "Xbox Game Studios",
    ],
    [
        "name" =>  "Tetris (EA)",
        "releaseYear" => 2006,
        "sales" => 100000000,
        "publisher" => "Electronic Arts",
    ],
    [
        "name" =>  "The Legend of Zelda: Breath of the Wild",
        "releaseYear" => 2017,
        "sales" => 31510000,
        "publisher" => "Nintendo",
    ],
    [
        "name" =>  "Tetris (EA)",
        "releaseYear" => 2006,
        "sales" => 100000000,
        "publisher" => "Electronic Arts",
    ],
];

?>

<!DOCTYPE html>
<meta charset="UTF-8">
<title>Game Inventory</title>
<link rel="stylesheet" href="style.css"/>

<table>
    <caption>
        An Absolutely Non-Exhaustive Game Inventory
    </caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Release Year</th>
            <th>Publisher</th>
            <th>Number of Copies Sold</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The Witcher 3</td>
            <td>2015</td>
            <td>CD Projekt</td>
            <td>40000000</td>
        </tr>
    </tbody>
</table>

<form action="">
  Name: <input type="text" name="name"><br>
  Release Year: <input type="number" name="releaseYear"><br>
  Publisher: <input type="text" name="publisher"><br>
  Number of Copies Sold: <input type="number" name="sales"><br>
  <button type="submit">Send</button>
</form>

<form action="">
    <button type="submit" name="load">Load Data</button>
    <button type="submit" name="export">Save Data</button>
</form>