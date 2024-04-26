<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/api/config.php');
header("Content-Type: application/json");
if (isset($_GET['path'])) {
	$query = "SELECT sonador_id AS id, sonador_nombre AS name, pais_nombre AS country, g.name AS grower, sonador_anio AS year, sonador_texto AS text, sonador_video AS video, sonador_cumplido AS accomplished FROM sonadores s LEFT JOIN paises p on p.pais_id = s.sonador_pais LEFT JOIN growers g on g.id = s.sonador_grower_id WHERE sonador_url = '{$_GET['path']}' OR sonador_id = {$_GET['path']} LIMIT 1;";
} else {
	$query = "SELECT * FROM sonadores WHERE sonador_orden IS NOT NULL ORDER BY sonador_orden LIMIT 1";
}
$data = db_getOne($query);
$data->images = db_getAll("SELECT foto_id as id,foto_sonador as sonador FROM sonadores_fotos WHERE foto_sonador = $data->id ORDER BY foto_orden");
echo json_encode($data);
?>