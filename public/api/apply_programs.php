<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/api/config.php');
header("Content-Type: application/json");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);
if (!($data->name || $data->email || $data->message)) {
    die();
}
db_insert("insert into contact_request (name,email,message,form) values ('$data->name','$data->email','$data->message','$data->form');");

echo json_encode($data);
