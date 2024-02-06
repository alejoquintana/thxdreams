<?php
require_once($_SERVER['DOCUMENT_ROOT'].'\api\config.php');
header("Content-Type: application/json");

$data = db_getAll("SELECT sonador_id,sonador_nombre,sonador_url,pais_nombre_es FROM thxweb.sonadores inner join paises on sonadores.sonador_pais = paises.pais_id order by sonador_orden limit 12;");

echo json_encode($data);
?>