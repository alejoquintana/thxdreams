<?php
require_once($_SERVER['DOCUMENT_ROOT'].'/api/config.php');
header("Content-Type: application/json");
if (isset($_GET['section']) && $_GET['section'] == 'home-carousel') {
    $query = "SELECT sonador_id as id,lower(sonador_nombre) as name,sonador_url as path FROM sonadores WHERE sonador_orden is not null ORDER BY RAND() LIMIT 10";
} else {
    $query = "SELECT * FROM sonadores ORDER BY sonador_orden";
}
$data = db_getAll($query);
echo json_encode($data);
?>