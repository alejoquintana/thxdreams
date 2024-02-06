<?php
// require_once($_SERVER['DOCUMENT_ROOT'].'/../private_html/db.php');
$server = "localhost:3306";
$db = "thxweb";
$user = "root";
$pass = "root";

$connect = new mysqli($server, $user, $pass, $db);
$connect->set_charset("utf8");

function db_query($i, $param){
	if ($i == 0) $i = '';
	global $connect;
	global ${'tot' . $i};
	global ${'res' . $i};
	global ${'row' . $i};
	if (!$connect) connect_db();
	${'res' . $i} = $connect->query($param);
	if (!${'res' . $i}) handle_error($connect->error, $param);
	${'tot' . $i} = ${'res' . $i}->num_rows;
	if (${'tot' . $i} > 0) {
		${'nres' . $i} = ${'res' . $i}->data_seek(0);
		${'row' . $i} = ${'res' . $i}->fetch_assoc();
	}
}

function db_update($param){
	global $tot;
	global $connect;
	$res = $connect->query($param);
	if (!$res) handle_error($connect->error, $param);
	else $tot = 1;
}

function db_insert($param){
	global $tot;
	global $newid;
	global $connect;
	$res = $connect->query($param);
	$newid = mysqli_insert_id($connect);
	if (!$res) handle_error($connect->error, $param);
}

function db_insert_with_id($param){
	global $connect;
	$res = $connect->query($param);
	$lastid = mysqli_insert_id($connect);
	if (!$res) handle_error($connect->error, $param);
	else return $lastid;
}

function db_delete($param){
	global $tot;
	global $connect;
	$res = $connect->query($param);
	if (!$res) handle_error($connect->error);
}

function db_log($usuario, $accion, $id){
	global $connect;
	return;
	$res = $connect->query("insert into log (usuario,accion,fechahora,id) values ('" . $usuario . "','" . $accion . "','" . date('Y-m-d H:i:s') . "','" . $id . "')");
}

function handle_error($perror, $param = ''){
	die("<b>Database Error " . __FILE__ . " line " . __LINE__ . ":</b> " . $perror . " - " . $param);
}

function db_edit($vars, $excluir = array()){
	global $newid, $connect;
	$excluir[] = 'action';
	$excluir[] = 'id';
	$excluir[] = 'tabla';
	$excluir[] = 'idLabel';
	$excluir[] = 'accion';
	$excluir[] = 'usuarioLog';
	$excluir[] = 'path';
	$camposInsert = array();
	$camposInsert['columnas'] = '';
	$camposInsert['variables'] = '';
	$camposUpdate = '';
	foreach ($vars as $nombre => $contenido) {
		if (!in_array($nombre, $excluir)) {
			$camposInsert['columnas'] .= $nombre . ',';
			$camposInsert['variables'] .= "'" . $contenido . "',";
			$camposUpdate .= $nombre . "='" . $contenido . "',";
		}
	}
	$camposInsert['columnas'] = rtrim($camposInsert['columnas'], ',');
	$camposInsert['variables'] = rtrim($camposInsert['variables'], ',');
	$camposUpdate = rtrim($camposUpdate, ',');
	if ((@$camposUpdate <> '') or (@$camposInsert['columnas'] <> '')) {
		if (@trim($vars['id'])) {
			//Estoy editando
			db_update("update " . $vars['tabla'] . " set " . $camposUpdate . " where " . $vars['idLabel'] . "=" . $vars['id']);
			$id = $vars['id'];
		} else {
			//Estoy insertando
			db_insert("insert into " . $vars['tabla'] . " (" . $camposInsert['columnas'] . ") values (" . $camposInsert['variables'] . ")");
			$id = $newid;
		}
	}
	$usuarioLog = isset($vars['usuarioLog']) && $vars['usuarioLog'] != '' ? $vars['usuarioLog'] : $_SESSION['usuario']['nombre'];
	if ($vars['accion']) {
		db_log($usuarioLog, $vars['accion'], $id);
	}
	return $id;
}

function db_getAll($sql, $inArray = false){
	global $connect;
	$resultsQuery = array();
	$result = $connect->query($sql);
	if (!$result) return $resultsQuery;
	while ($obj = $result->fetch_object()) {
		$resultsQuery[] = $inArray ? (array) $obj : $obj;
	}
	$result->free_result();
	return $resultsQuery;
}

function db_implode($sql, $field){
	$toImplode = [];
	$result_rows = db_getAll($sql);
	foreach ($result_rows as $value) $toImplode[] = $value->$field;
	return implode(',', $toImplode);
}

function db_getOne($sql, $inArray = false){
	global $connect;
	$resultsQuery = null;
	$result = $connect->query($sql);
	if (!$result) return $resultsQuery;
	if ($result->num_rows == 0) return $resultsQuery;
	while ($obj = $result->fetch_object()) {
		if (is_null($resultsQuery)) $resultsQuery = array();
		$resultsQuery[] = $obj;
	}
	$result->free_result();
	return $inArray ? (array) $resultsQuery[0] : $resultsQuery[0];
}

function db_for_query($sql, $inArray = false){
	global $connect;
	$res = $connect->query($sql);
	if (!$res) handle_error($connect->error, $sql);
	return $res;
}