<?php
require_once($_SERVER['DOCUMENT_ROOT'].'\api\config.php');
header("Content-Type: application/json");
$data = db_getAll("SELECT * FROM sonadores ORDER BY sonador_orden");
echo json_encode($data);
?>