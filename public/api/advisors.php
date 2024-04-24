<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/api/config.php');
header("Content-Type: application/json");

$nameField = "directorio_nombre";
$positionField = "directorio_cargo";
$textField = "directorio_texto";

if (isset($_GET['language']) && $_GET['language'] == 'esp') {
    $nameField .= "_es";
    $positionField .= "_es";
    $textField .= "_es";
}
// die("SELECT directorio_id as id,$nameField as name,$positionField as position,$textField as text,directorio_orden as order FROM directorio order by directorio_orden");
$data = db_getAll("SELECT directorio_id as id,$nameField as name,$positionField as position,$textField as text,directorio_orden as 'order' FROM directorio order by directorio_orden");

echo json_encode($data);
?>