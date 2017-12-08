<div class="container col-md-12 col-lg-12 col-xs-12 col-sm-12">
    <div id="divConsultar<?= $valor; ?>" class="form-horizontal" method="post" autocomplete="off" style="display:none;">
        <select class="form-control" id="select<?= $valor; ?>">
            <option selected="true" disabled="disabled">¿como deseas realizar la busqueda?</option>
            <option value="todos<?= $valor?>">Mostrar todos los <?= $consulta; ?></option>
            <option value="identificador<?= $valor; ?>">Por identificador del <?= $consulta; ?></option>
            <option value="similar<?= $valor; ?>">Por nombre <?= $consulta; ?></option>
        </select>
    <!--Este bloque realizara la busqueda de SELECT * FROM centros_universitarios WHERE delete=0;-->
    <div id="todos<?= $valor; ?>" class="container table-responsive col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none;margin-top:5px;">
        <table class="table table-striped table-hover">
            <thead>
                <tr style="background-color:#F55050;color:#fff;">            
                    <th>Identificador</th>
                    <th>Nombre del <?= $consulta; ?></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>CUCEI</td>
                    <td>Centro universitario de ciencias exactas e ingenierias</td>
                </tr>
            </tbody>
        </table>
    </div>
    <!--Este bloque realizara la busqueda de SELECT * FROM centros universitarios WHERE id="valor" AND delete=0-->
    <div id="identificador<?= $valor; ?>" class="container table-responsive col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none;margin-top:5px;">
        <select class="form-control" id="idSeleccionado<?= $valor; ?>">
            <option selected="true" disabled="true">Elige un centro universitario</option>
        </select>
        <table id="tablaConsultaSelect<?= $valor; ?>" class="table table-striped table-fw-widget table-hover" style="display:none;">
            <thead>
                <tr style="background-color:#F55050;color:#fff;">            
                    <th>Identificador</th>
                    <th>Nombre del <?= $consulta; ?></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="insertarId<?= $valor; ?>">valor</td>
                    <td id="InsertarNombre<?= $valor; ?>">valor</td>
                </tr>
            </tbody>
        </table>
    </div>
    <!---->
    <div id="similar<?= $valor; ?>" class="container col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none;margin-top:5px;">
         <form>
             <span>Escribe palabras que formen parte del centro que buscas</span>
             <span>(ingenieria, arquitectura, etc...)</span>
             <input type="text" class="form-control">
        </form>
    </div>
        
    </div>
</div>