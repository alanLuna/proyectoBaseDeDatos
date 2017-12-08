<!--formulario terminado-->
<div id="divEliminar<?= $valor; ?>" class="container col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none">  
    <select id="delete<?= $valor?>" class="form-control">
        <option selected="true" disabled="disabled">Selecciona un <?= $consulta; ?>: </option>
    </select>
    <form id="formModificar<?= $valor; ?>" class="form-horizontal" method="post" autocomplete="off" style="display:none;">
        <div class="form-group">
            <label class="col-md-3 h4">Siglas</label>                     
            <div class="col-md-9">
                <input class="form-control" type="text" name="nuevasSiglas<?= $valor ?>" id="nuevasSiglas<?= $valor ?>"
                placeholder="Ingrese las nuevas siglas del complejo" required autocomplete="off">  
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 h4">Nombre del <?= $consulta; ?></label>
            <div class="col-md-9">
                <input class="form-control" type="text" id="nuevoNombre<?= $valor; ?>" name="nuevoNombre<?= $valor;?>" placeholder="Ingrese el nuevo nombre" required autocomplete="off">
            </div>
        </div>
        <div class="text-center">
            <button id="botonCambio<?= $valor ?>" class="btn btn-alt4 btn-shade2 btn-rad btn-lg" type="submit">
                <i class="icon s7-check">
                </i>Actualizar <?= $consulta; ?>
            </button>
        </div>              
    </form>
</div>