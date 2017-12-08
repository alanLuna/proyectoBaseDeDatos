<!--formulario terminado-->
<div id="divEliminar<?= $valor; ?>" class="container col-md-12 col-lg-12 col-xs-12 col-sm-12" style="display:none">  
    <select id="delete<?= $valor?>" class="form-control">
        <option selected="true" disabled="disabled">Selecciona un centro universitario: </option>
    </select>
    <form id="formEliminar<?= $valor; ?>" class="form-horizontal" method="post" autocomplete="off" style="display:none;">
        <div class="form-group">
            <label class="col-md-3 h4">Siglas</label>                     
            <div class="col-md-9">
                <input class="form-control" type="text" name="deleteSiglas<?= $valor ?>" id="deleteSiglas<?= $valor ?>"
                placeholder="Ingrese las nuevas siglas del complejo" required autocomplete="off">  
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 h4">Nombre del <?= $consulta; ?></label>
            <div class="col-md-9">
                <input class="form-control" type="text" id="deleteNombre<?= $valor; ?>" name="deleteNombre<?= $valor;?>" placeholder="Ingrese el nuevo nombre" required autocomplete="off">
            </div>
        </div>
        <div class="text-center">
            <a href="javascript:void(0)" onclick="eliminarDatos()" class="text-center">
                <button id="botonEliminar<?= $valor ?>" class="btn btn-alt4 btn-shade2 btn-rad btn-lg" type="submit">
                    <i class="icon s7-close">
                        Eliminar <?= $consulta; ?> ..?
                    </i>
                </button>
            </a>
        </div>              
    </form>
</div>