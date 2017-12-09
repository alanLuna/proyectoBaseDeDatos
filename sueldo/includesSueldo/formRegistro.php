<!--formulario terminado-->
<div>
    <form id="formRegistro<?= $valor; ?>" class="form-horizontal" method="post" autocomplete="off" style="display:none">
        <div class="form-group">
            <label class="col-md-3 h4">Monto del <?= $consulta; ?></label>
            <div class="col-md-9">
                <input class="form-control" type="text" id="nombre<?= $valor; ?>" name="nombre<?= $valor;?>" placeholder="Ingrese el salario" required autocomplete="off">
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