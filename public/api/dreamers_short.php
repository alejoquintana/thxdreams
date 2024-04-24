<?php

require_once($_SERVER['DOCUMENT_ROOT'] . '/api/config.php');
header("Content-Type: application/json");

$country_field = "pais_nombre";
if (isset($_GET['language']) && $_GET['language'] == 'esp') {
    $country_field .= "_es";
}

$where = "WHERE true ";
$order = "sonador_orden";


if (isset($_GET['accomplished']) && $_GET['accomplished'] && $_GET['accomplished'] != 'ALL') {
    if ($_GET['accomplished'] == "ACHIEVED") {
        $where .= "AND sonador_cumplido is not null";
    }
    
    if ($_GET['accomplished'] == "PENDING") {
        $where .= "AND sonador_cumplido is null";
    }
}

if (isset($_GET['country']) && $_GET['country'] && $_GET['country'] != "ALL") {
    $where .= "AND sonador_pais = '{$_GET['country']}'";
}

if (isset($_GET['year']) && $_GET['year'] && $_GET['year'] != "ALL") {
    $where .= "AND sonador_anio = '{$_GET['year']}'";
}

if (isset($_GET['sort']) && $_GET['sort']) {
    $order = "sonador_orden";
    if ( $_GET['sort'] == "NAME") $order = "sonador_nombre ASC";
    if ( $_GET['sort'] == "LAST_DREAM") $order = "sonador_id DESC";
    if ( $_GET['sort'] == "YEAR") $order = "sonador_anio ASC";
}

$data = db_getAll("SELECT sonador_id as id,sonador_nombre as name,sonador_url as path, $country_field as country,sonador_cumplido as accomplished FROM sonadores inner join paises on sonadores.sonador_pais = paises.pais_id $where order by $order;");

echo json_encode($data);