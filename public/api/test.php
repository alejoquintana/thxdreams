<?php
header("Content-Type: application/json");
$data = array("a" => "Apple", "b" => "Ball", "c" => "Cat");
echo json_encode($data);
?>