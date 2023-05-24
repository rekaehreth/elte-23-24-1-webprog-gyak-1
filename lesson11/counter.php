<?php 
session_start();
$counter = $_SESSION['counter'] ?? 0;
$counter += 1;
$_SESSION['counter'] = $counter;
?>

Counter: <?= $counter ?>
<a href="counter.php"> Increment </a>