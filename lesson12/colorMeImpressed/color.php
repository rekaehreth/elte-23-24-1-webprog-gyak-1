<?php 

$red = mt_rand(0, 255);
$green = mt_rand(0, 255);
$blue = mt_rand(0, 255);

$color = "rgb($red, $green, $blue)";
$response = ["color" => $color];
echo json_encode($response);