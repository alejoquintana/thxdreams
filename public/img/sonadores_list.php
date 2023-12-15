<?php
include('connect.php');

$db_tabla = "sonadores";
$db_campo = "sonador";
$carpeta_imagenes = "sonadores";
$TituloABM = "Soñadores";
  
?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta charset="utf-8" />
    <title><?php echo $glob['SITE_NOMBRE']?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
		<link rel="apple-touch-icon" sizes="57x57" href="/img/iconos/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/img/iconos/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/img/iconos/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/img/iconos/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/img/iconos/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/img/iconos/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/img/iconos/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/img/iconos/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/img/iconos/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="/img/iconos/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/img/iconos/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="/img/iconos/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/img/iconos/favicon-16x16.png">
		<link rel="manifest" href="/img/iconos/manifest.json">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/img/iconos/ms-icon-144x144.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link href="assets/plugins/pace/pace-theme-flash.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/boostrapv3/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/jquery-scrollbar/jquery.scrollbar.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="assets/plugins/bootstrap-select2/select2.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="assets/plugins/switchery/css/switchery.min.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="assets/plugins/jquery-datatable/media/css/dataTables.bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/jquery-datatable/extensions/FixedColumns/css/dataTables.fixedColumns.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/datatables-responsive/css/datatables.responsive.css" rel="stylesheet" type="text/css" media="screen" />
    <link href="pages/css/pages-icons.css" rel="stylesheet" type="text/css">
    <link class="main-stylesheet" href="pages/css/pages.css" rel="stylesheet" type="text/css" />
    <!--[if lte IE 9]>
	<link href="assets/plugins/codrops-dialogFx/dialog.ie.css" rel="stylesheet" type="text/css" media="screen" />
	<![endif]-->
<link href="assets/css/estilo.css" rel="stylesheet" type="text/css" />



  </head>
  <body class="fixed-header ">
    <!-- BEGIN SIDEBPANEL-->
    <nav class="page-sidebar" data-pages="sidebar">
      <!-- BEGIN SIDEBAR MENU TOP TRAY CONTENT-->
      <div class="sidebar-overlay-slide from-top" id="appMenu">
        <div class="row">
          <div class="col-xs-6 no-padding">
            <a href="#" class="p-l-40"><img src="assets/img/demo/social_app.svg" alt="socail">
            </a>
          </div>
          <div class="col-xs-6 no-padding">
            <a href="#" class="p-l-10"><img src="assets/img/demo/email_app.svg" alt="socail">
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 m-t-20 no-padding">
            <a href="#" class="p-l-40"><img src="assets/img/demo/calendar_app.svg" alt="socail">
            </a>
          </div>
          <div class="col-xs-6 m-t-20 no-padding">
            <a href="#" class="p-l-10"><img src="assets/img/demo/add_more.svg" alt="socail">
            </a>
          </div>
        </div>
      </div>
      <!-- END SIDEBAR MENU TOP TRAY CONTENT-->
      <!-- BEGIN SIDEBAR MENU HEADER-->
      <div class="sidebar-header">
MENU
      </div>
      <!-- END SIDEBAR MENU HEADER-->
      <!-- START SIDEBAR MENU -->
<?php
        include('menu.php');
        ?>
      <!-- END SIDEBAR MENU -->
    </nav>
    <!-- END SIDEBAR -->
    <!-- END SIDEBPANEL-->
    <!-- START PAGE-CONTAINER -->
    <div class="page-container ">
      <!-- START HEADER -->
        <?php
        include('header.php');
        ?>
      <!-- END HEADER -->
      <!-- START PAGE CONTENT WRAPPER -->
      <div class="page-content-wrapper ">
        <!-- START PAGE CONTENT -->
        <div class="content "> 
                        
          <!-- START CONTAINER FLUID -->
          <div class="container-fluid container-fixed-lg bg-white">
            <!-- START PANEL -->
            <div class="panel panel-default" style="border-radius:20px;">
              <div class="panel-heading">
                <div class="panel-title">

				<button class="btn btn-default btn-sm btn-rounded m-r-20 m-b-10" onClick="javascript:window.location.href='<?php echo $carpeta_imagenes ?>_abm.php?categoria=<?php echo $_GET['categoria']?>';">Nuevo</button>

				
				</div>
                <div class="pull-right">
                  <div class="col-xs-12">
                    <input type="text" id="search-table" class="form-control pull-right" placeholder="Buscar">
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="panel-body">
<center><h5><?php echo $TituloABM?></h5></center>
                <div id="mensaje" align="center" class="mensaje"></div>

				
				                            
											
                <table class="table table-hover demo-table-search" id="tableWithSearch">
                  <thead>
                    <tr class="tablaCabecera nodrag nodrop">
                      <th></th>
                      <th align="center">Nombre</th>
                      <th align="center">Imagen</th>
                            <th>Galeria</th>                 
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
            <?php
$query = "SELECT * from ";
$query .= $db_tabla . " ";
$query .= " ORDER BY " . $db_campo . "_orden"; 
            $resultAux = mysqli_query($mysql_access, $query);
            if (mysqli_num_rows($resultAux)) {   

            while($row = mysqli_fetch_array($resultAux)) {
            ?>                     
                    <tr id="<?php echo $row[$db_campo . '_id'] ?>">
                      <td align="center" valign="middle" class="dragHandle mover" style="BACKGROUND-POSITION: center center;
BACKGROUND-IMAGE: url(imagenes/updown2.gif);
BACKGROUND-REPEAT: no-repeat;"></td>

                      <td class="v-align-middle semi-bold">
                        <p><?php echo $row[$db_campo . '_nombre']?></p>
                      </td>                     
                      <td class="v-align-middle">
                        <p>
                                    <?php

              $fp = @fopen("../img/" . $carpeta_imagenes . "/" . $row[$db_campo . '_id'] . ".jpg" ,"r"); 
                                    if ($fp) {
              
                                      ?><img src="../img/<?php echo $carpeta_imagenes ?>/<?php echo $row[$db_campo . '_id']?>.jpg?t=<?php echo time();?>" height="100" border="0"><?
              
                                    }


                                    
              
                                    
              

              
                                    ?>  </p>
                      </td>
                       <td class="v-align-middle">
                        <p><button class="btn btn-default btn-sm btn-rounded m-r-20 m-b-10" onClick="javascript:window.location.href='sonadores_fotos_list.php?sonador=<?php echo $row[$db_campo . '_id']?>';">Ver</button></p>
                      </td>                                            
                      <td class="v-align-middle">
                        <p><button class="btn btn-default btn-sm btn-rounded m-r-20 m-b-10" onClick="javascript:window.location.href='<?php echo $carpeta_imagenes ?>_edit.php?id=<?php echo $row[$db_campo . '_id']?>';">Editar</button> <button class="btn btn-default btn-sm btn-rounded m-r-20 m-b-10" onClick="javascript:if (confirm('Desea borrar el elemento?')) {window.location.href='<?php echo $carpeta_imagenes ?>_delete.php?id=<?php echo $row[$db_campo . '_id']?>'};">Borrar</button></p>
                      </td>                      
                    </tr>
                    <?php
                  }}

                  ?>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- END PANEL -->
          </div>
          <!-- END CONTAINER FLUID -->
        </div>
        <!-- END PAGE CONTENT -->
        <!-- START COPYRIGHT -->
        <!-- START CONTAINER FLUID -->
        <!-- START CONTAINER FLUID -->
        
        <!-- END COPYRIGHT -->
      </div>
      <!-- END PAGE CONTENT WRAPPER -->
    </div>
    <!-- END PAGE CONTAINER -->
    <!-- START MENU AYUDA -->
   
    <!-- END MENU AYUDA --> 

    <!-- BEGIN VENDOR JS -->
    <script src="assets/plugins/pace/pace.min.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="assets/plugins/modernizr.custom.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
    <script src="assets/plugins/boostrapv3/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery/jquery-easy.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-unveil/jquery.unveil.min.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-bez/jquery.bez.min.js"></script>
    <script src="assets/plugins/jquery-ios-list/jquery.ioslist.min.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-actual/jquery.actual.min.js"></script>
    <script src="assets/plugins/jquery-scrollbar/jquery.scrollbar.min.js"></script>
    <script type="text/javascript" src="assets/plugins/bootstrap-select2/select2.min.js"></script>
    <script type="text/javascript" src="assets/plugins/classie/classie.js"></script>
    <script src="assets/plugins/switchery/js/switchery.min.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-datatable/media/js/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-datatable/extensions/TableTools/js/dataTables.tableTools.min.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-datatable/media/js/dataTables.bootstrap.js" type="text/javascript"></script>
    <script src="assets/plugins/jquery-datatable/extensions/Bootstrap/jquery-datatable-bootstrap.js" type="text/javascript"></script>
    <script type="text/javascript" src="assets/plugins/datatables-responsive/js/datatables.responsive.js"></script>
    <script type="text/javascript" src="assets/plugins/datatables-responsive/js/lodash.min.js"></script>
    <!-- END VENDOR JS -->
    <!-- BEGIN CORE TEMPLATE JS -->
    <script src="pages/js/pages.min.js"></script>
    <!-- END CORE TEMPLATE JS -->
    <!-- BEGIN PAGE LEVEL JS -->
    <script src="assets/js/tables.js" type="text/javascript"></script>
    <script src="assets/js/scripts.js" type="text/javascript"></script>

<script src="assets/js/jquery.js" type="text/javascript"></script>
<script src="assets/js/jquery.tablednd_0_5.js" type="text/javascript"></script>
<script type="text/javascript">

$(document).ready(function() {
  
  $('#tableWithSearch').tableDnD({
    onDrop: function(table, row) {
      //alert($('#tableWithSearch').tableDnDSerialize());
      $.ajax({
           async:true,
           type: "POST",
           dataType: "html",
           url:"ordenamiento.php?tabla=<?php echo $db_tabla?>&campo=<?php echo $db_campo?>",
           data: "datos=" + $.tableDnD.serialize(),
           success: llegadaDatos
         });      
    },
    dragHandle: "dragHandle"
  });
  
  $("#tableWithSearch tr:gt(0)").hover(function() { // con gt 0 logro que no me tome los titulos de la tabla para colorear  
      $(this.cells).addClass('activoMover'),
      $(this.cells[0]).addClass('movimiento');
  }, function() {
      $(this.cells).removeClass('activoMover');
      $(this.cells[0]).removeClass('movimiento');     
  }); 
    
});

function llegadaDatos(datos)
{
  $("#mensaje").fadeIn(1000);
  $("#mensaje").html(datos);
  $("#mensaje").fadeOut(1000); // Oculto el mensaje para cuando graba el ordenamiento
}


function clickCelda(id)
{
  var celda = document.getElementById(id);
  var check = document.getElementById('chk'+id);
  if (check.checked==true){
    celda.style.backgroundColor = "#cfeeff";
  }
  else{
    celda.style.backgroundColor = "";
  }
}
</script>  

    <!-- END PAGE LEVEL JS --><iframe width="400" height="0" name="IFrameDestacado" id="IFrameDestacado" src="" frameborder="0" scrolling="no"></iframe> 
  </body>
</html>
