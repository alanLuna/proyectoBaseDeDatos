<!--formulario terminado-->
<div>
    <form id="formRegistro<?= $valor; ?>" class="form-horizontal" method="post" autocomplete="off" style="display:none">
        <div class="form-group">
            <label class="col-md-3 h4">RFC</label>                     
            <div class="col-md-9">
                <input class="form-control" type="text" name="rfc<?= $valor ?>" id="rfc<?= $valor ?>"
                placeholder="Ingrese el rfc del trabajador" required autocomplete="off">  
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 h4">Nombre del <?= $consulta; ?></label>
            <div class="col-md-9">
                <input class="form-control" type="text" id="nombre<?= $valor; ?>" name="nombre<?= $valor;?>" placeholder="Ingrese el nombre" required autocomplete="off">
            </div>
        </div>
        <div class="text-center">
            <a href="javascript:void(0)" onclick="insertarDatos()" class="text-center">
                <button id="botonRegistro<?= $valor ?>" class="btn btn-alt4 btn-shade2 btn-rounded btn-lg">
                    <i class="icon s7-check">Registrar <?= $consulta; ?></i>
                </button>
            </a>
        </div>              
    </form>
</div>