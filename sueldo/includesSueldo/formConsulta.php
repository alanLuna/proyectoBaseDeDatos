<?php
    function mostrarTodosSueldos(){
        $servidor = "localhost";
        $usuario = "Gadocj";
        $passwordServer = "Jajagoca1996";
        $baseDeDatos = "udg";
        $sql = 'SELECT * FROM sueldo WHERE deleted="0"';
        $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
        $resultado = mysqli_query($con,$sql);
        return $resultado;
    }
?>
<div class="container col-md-12 col-lg-12 col-xs-12 col-sm-12">
    <div id="divConsultar<?= $valor; ?>" class="form-horizontal" method="post" autocomplete="off" style="display:none;">
        <select class="form-control" id="select<?= $valor; ?>">
            <option selected="true" disabled="disabled">¿como deseas realizar la busqueda?</option>
            <option value="todos<?= $valor?>">Mostrar todos los <?= $consulta; ?></option>
            <option value="identificador<?= $valor; ?>">Por identificador del <?= $consulta; ?></option>
            <option value="similar<?= $valor; ?>">Por salario <?= $consulta; ?></option>
        </select>
    <!--Este bloque realizara la busqueda de SELECT * FROM centros_universitarios WHERE delete=0;-->
    <div id="todos<?= $valor; ?>" class="container table-responsive col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none;margin-top:5px;">
        <table class="table table-striped table-hover">
            <thead>
                <tr style="background-color:#F55050;color:#fff;">            
                    <th>Identificador</th>
                    <th>salario del <?= $consulta; ?></th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $resultado = mostrarTodosSueldos();
                    while($row = $resultado -> fetch_assoc()){
                ?>
                <tr>
                    <td><?= $row['id']; ?></td>                
                    <td><?= $row['salario']; ?></td>
                </tr>
                <?php
                    }
                ?>
            </tbody>
        </table>
    </div>
    <!--Este bloque realizara la busqueda de SELECT * FROM centros universitarios WHERE id="valor" AND delete=0-->
    <div id="identificador<?= $valor; ?>" class="container table-responsive col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none;margin-top:5px;">
        <select class="form-control" id="idSeleccionado<?= $valor; ?>">
            <option selected="true" disabled="true">Elige un Sueldo</option>
        </select>
        <table id="tablaConsultaSelect<?= $valor; ?>" class="table table-striped table-fw-widget table-hover col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none;">
            <thead>
                <tr style="background-color:#F55050;color:#fff;">            
                    <th>Identificador</th>
                    <th>salario del <?= $consulta; ?></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="insertarId<?= $valor; ?>"></td>
                    <td id="insertarsalario<?= $valor; ?>"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <!---->
    <div id="similar<?= $valor; ?>" class="container col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none;margin-top:5px;">
         <form>
             <span>Escribe algun moto que forme parte del Sueldo que buscas</span>
             <input type="text" class="form-control">
        </form>
    </div>
    </div>
    <script type="text/javascript">
            
    </script>
</div>