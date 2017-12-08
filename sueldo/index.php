<!DOCTYPE html>
<?php
    $consulta = "sueldo";
    $valor="Sueldo";
?>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Gestión de C.U.</title>
    <?php include('../includes/header.php'); ?>
</head>
<body>
    <div class="am-wrapper am-fixed-sidebar">
      <nav class="navbar navbar-default navbar-fixed-top am-top-header">
        <div class="container-fluid">
            <!-- Navbar Header -->
            <div class="navbar-header">
            <!-- Encabezado que solo se ve desde movil -->
                <div class="page-title">
                    <span>Gestion de <?= $consulta;?></span>
                </div>
                <!-- Left sidebar toggle button - visible on mobile -->
                <a href="#" class="am-toggle-left-sidebar navbar-toggle collapsed">
                    <span class="icon-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <!-- logo de la UdeG -->
                <a href="http://www.cucei.udg.mx/es/directorio" class="navbar-brand" style="background-size:contain"></a>
            </div>
            <!-- Right sidebar toggle button -->
            <a href="#" class="am-toggle-right-sidebar">
                <span class="icon s7-menu2"></span>
            </a>
            <!-- barra que se colapsa con vista en movil -->
            <a href="#" data-toggle="collapse" data-target="#am-navbar-collapse" class="am-toggle-top-header-menu collapsed">
                <span class="icon s7-angle-down"></span>
            </a>
            <!-- opciones de barra superior-->
            <div id="am-navbar-collapse" class="collapse navbar-collapse">
                  <ul class="nav navbar-nav navbar-right am-user-nav">  
                      <li class="dropdown">
                        <a href="#">
                            <img class="img-circle" src="../includes/img/maestro.JPG"/>
                            <span class="user-name">Michel Davalos Boites</span>
                          </a>
                      </li> 
                  </ul>
                  <ul class="nav navbar-nav am-top-menu">
                      <li>
                        <a href="#">Administrar salario a puesto</a>
                      </li>
                      <li>
                        <a href="#">Administrar puesto a trabajador</a>
                      </li>
                      <li>
                        <a href="#">Administrar trabajador a centro universitario</a>
                      </li>
                    <!-- Left Menu -->
                  </ul>
                  <ul class="nav navbar-nav navbar-right am-icons-nav">
                    <!-- Icons Menu -->
                  </ul>
            </div>
        </div>
      </nav>
      <?php include('../includes/sidebar.php')?>
        <!--contenido o cuerpo de la vista HTML -->
      <div class="container col-md-6 col-md-offset-4 col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-4" style="margin-top:10px;">
          <div class="container col-md-8 col-xs-12 col-lg-8 col-sm-12">
            <div class="container col-md-12 col-xs-12 col-lg-12 col-sm-12">
                <span></span>
                <select id="opcionSeleccionada" class="form-control">
                    <option selected="true" disabled="disabled">¿que desea realizar?</option>
                    <option value="nuevo<?= $valor; ?>" >Registrar nuevo <?= $consulta; ?></option>
                    <option value="consulta<?= $valor; ?>">Consultar los registros existentes</option>
                    <option value="modificar<?= $valor; ?>">Modificar datos de un <?= $consulta?></option>
                    <option value="eliminar<?= $valor;?>">Eliminar los datos de un <?= $consulta?></option>
                </select>
            </div>
            <?php include('includesSueldo/formRegistro.php');  ?>
            <?php include('includesSueldo/formCambios.php');  ?>
            <?php include('includesSueldo/formConsulta.php');  ?>
            <?php include('includesSueldo/formDelete.php');  ?>
          </div>
      </div>
      <nav class="am-right-sidebar">
        <!-- Right sidebar -->
      </nav>
    </div>
</body>
<?php include('../includes/scripts.php'); ?>
<script type="text/javascript" src="controller.js"></script>
</html>
