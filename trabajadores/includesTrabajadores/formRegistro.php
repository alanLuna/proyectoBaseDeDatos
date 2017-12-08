<!--formulario terminado-->
<div>
    <form id="formRegistro<?= $valor; ?>" class="form-horizontal" method="post" autocomplete="off" style="display:none">
        <div class="form-group">
            <label class="col-md-3 h4">Siglas</label>                     
            <div class="col-md-9">
                <input class="form-control" type="text" name="siglas<?= $valor ?>" id="siglas<?= $valor ?>"
                placeholder="Ingrese las siglas del complejo" required autocomplete="off">  
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 h4">Nombre del <?= $consulta; ?></label>
            <div class="col-md-9">
                <input class="form-control" type="text" id="nombre<?= $valor; ?>" name="nombre<?= $valor;?>" placeholder="Ingrese el nombre" required autocomplete="off">
            </div>
        </div>
        <div class="text-center">
            <button id="botonRegistro<?= $valor ?>" class="btn btn-alt4 btn-shade2 btn-rad btn-lg" type="submit">
                <i class="icon s7-check">
                </i>Registrar <?= $consulta; ?>
            </button>
        </div>              
    </form>
</div>