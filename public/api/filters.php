<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/api/config.php');
header("Content-Type: application/json");
$data = [];
if (isset($_GET['filter']) && $_GET['filter'] == 'years') {
    
    $selected = "ALL";
    $query = "SELECT sonador_anio FROM `sonadores` WHERE sonador_anio != 0 GROUP BY sonador_anio ORDER BY sonador_anio DESC;";
    $data = db_getAll_asArray($query, "sonador_anio");
    if (isset($_GET['language']) && $_GET['language'] == 'esp'){
        $selected = "TODOS";
    }
    array_unshift($data, $selected);
    
} else if (isset($_GET['filter']) && $_GET['filter'] == 'countries') {
    
    $column = "pais_nombre";
    $selected = "ALL";
    if (isset($_GET['language']) && $_GET['language'] == 'esp'){
        $column .= "_es";
        $selected = "TODOS";
    }
    $query = "SELECT p.pais_id as id, p.$column as name FROM `sonadores` s INNER JOIN paises p on s.sonador_pais = p.pais_id WHERE sonador_pais != 0 GROUP BY sonador_pais ORDER BY `p`.`pais_nombre` ASC;";
    $data = db_getAll($query);
    array_unshift($data,["id"=>0, "name" => $selected]);

}

echo json_encode($data);
