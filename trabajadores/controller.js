/*deshabilitar botones, esto con el fin de que no se pueda hacer ninguna consulta a SQL sin una validacion previa*/
$('#botonRegistroTrabajador').prop('disabled',true);
$('#botonCambioTrabajador').prop('disabled',true);

/*Cambia que formulario se va a mostrar dentro de la vista, ya tiene los nombres correctos de los ID que estan como
includes en la vista principal que es el INDEX.php*/
$('#opcionSeleccionada').change(function(){
    var accionPorRealizar = $('#opcionSeleccionada').val();
    if(accionPorRealizar == "nuevoTrabajador"){
        $("#formEliminarTrabajador").css("display","none");
        $("#formRegistroTrabajador").css("display","block");
        $('#divModificarTrabajador').css("display","none");
        $("#formModificarTrabajador").css("display","none");
        $("#divEliminarTrabajador").css("display","none");
        $("#divConsultarTrabajador").css("display","none");
    }else if(accionPorRealizar == "modificarTrabajador"){
        $("#formEliminarTrabajador").css("display","none");
        $("#formRegistroTrabajador").css("display","none");
        $('#divModificarTrabajador').css("display","block");
        $("#divEliminarTrabajador").css("display","none");
        $("#divConsultarTrabajador").css("display","none")
    }else if(accionPorRealizar == "consultaTrabajador"){
        $("#formEliminarTrabajador").css("display","none");
        $("#formRegistroTrabajador").css("display","none");
        $('#divModificarTrabajador').css("display","none");
        $("#divEliminarTrabajador").css("display","none");
        $("#formModificarTrabajador").css("display","none");
        $("#divConsultarTrabajador").css("display","block");
    }else if(accionPorRealizar == "eliminarTrabajador"){
        $("#formRegistroTrabajador").css("display","none");
        $('#divModificarTrabajador').css("display","none");
        $("#divEliminarTrabajador").css("display","block");
        $("#divConsultarTrabajador").css("display","none");
        $("#formModificarTrabajador").css("display","none");
    }
});

/*funcion de jquery dedicada unicamente al form de consulta...*/
$("#selectTrabajador").change(function(){
   var opcionSeleccionada = $("#selectTrabajador").val();
    if(opcionSeleccionada == "todosTrabajador"){
        $("#todosTrabajador").css("display","block");
        $("#tablaConsultaSelectTrabajador").css("display","none");
        $("#identificadorTrabajador").css("display","none");
        $("#similarTrabajador").css("display","none");
    }else if(opcionSeleccionada == "identificadorTrabajador"){
        $("#todosTrabajador").css("display","none");
        $("#identificadorTrabajador").css("display","block");
        $("#similarTrabajador").css("display","none");
    }else if(opcionSeleccionada == "similarTrabajador"){
        $("#todosTrabajador").css("display","none");
        $("#identificadorTrabajador").css("display","none");
        $("#tablaConsultaSelectTrabajador").css("display","none");
        $("#similarTrabajador").css("display","block");
    }
});
/*variables globales*/
var nombreTrabajador;
var rfcTrabajador;
var nombreValido = false, rfcValidas = false;
var nombreActual,rfcActual,idActual;
var nombreAjax, rfcAjax;
var nuevoNombre, nuevasrfc;
var deleteNombre,deleterfc,deleteId;
/*funcion que valida si las rfc tienen texto valido y no son campos vacions*/
$('#rfcTrabajador').focusout(function(){
    var validar = $('#rfcTrabajador').val();
    if(validar != ''){
        rfcTrabajador = validar;
        rfcValidas = true;
    }else{
        rfcValidas = false;
    }
    habilitarBotonRegistro();
})
/*funcion que valida si el nombre tiene texto valido y no es campo vacion*/
$('#nombreTrabajador').focusout(function(){
    var validar = $('#nombreTrabajador').val();
    if(validar != ''){
        nombreTrabajador = validar;
        nombreValido = true;
    }else{
        nombreValido = false;
    }
    habilitarBotonRegistro();
});
/*funcion que cambia el estado del boton para registrar un nuevo centro universitario*/
function habilitarBotonRegistro(){
    if(nombreValido == true && rfcValidas == true){
        $('#botonRegistroTrabajador').prop('disabled',false);
    }else{
        $('#botonRegistroTrabajador').prop('disabled',true);   
    }
}

$('#rfcTrabajador').focusout(function(){
   if($('#rfcTrabajador').val() != ""){    
       var valores = $('#rfcTrabajador').val().toLowerCase();
       var n = arrayTrabajador.length, i = 0;
       while(n > i){
           var comparar = arrayTrabajador[i].rfc.toLowerCase();
           if(comparar == valores){
               console.log("rfc no validas");
               Existerfc = true;
               rfcValidas = false;
               break;
           }
           i++;
       }
   }
    habilitarBotonRegistro();
});

$('#nombreTrabajador').focusout(function(){
   if($('#nombreTrabajador').val() != ""){    
       var valores = $('#nombreTrabajador').val().toLowerCase();
       var n = arrayTrabajador.length, i = 0;
       while(n > i){
           var comparar = arrayTrabajador[i].nombre.toLowerCase();
           if(comparar == valores){
               console.log("nombre no valido");
               nombreValido = false;
               break;
           }
           i++;
       }
   } 
    habilitarBotonRegistro();
});

/*cambio 1 */
$("#idSeleccionadoTrabajador").change(function(){
    var idTemporal = $("#idSeleccionadoTrabajador").val();
    var i = 0, max = arrayTrabajador.length;
    while(i < max){
        var id = arrayTrabajador[i].id;
        var rfc = arrayTrabajador[i].rfc;
        var nombre = arrayTrabajador[i].nombre;
        if(id == idTemporal){   
            $("#tablaConsultaSelectTrabajador").css("display","block");
            $("#insertarIdTrabajador").text(rfc);
            $("#insertarNombreTrabajador").text(nombre);
            break;
        }
        i++;
    }
});
/*cambio 1 */

/*cambio 2: mostrara u ocultara el form de modificar*/
$("#updateTrabajador").change(function(){
    var idTemporal = $("#updateTrabajador").val();
    var i = 0, max = arrayTrabajador.length;
    while(i < max){
        var id = arrayTrabajador[i].id;
        var rfc = arrayTrabajador[i].rfc;
        var nombre = arrayTrabajador[i].nombre;
        if(id == idTemporal){   
            $("#formModificarTrabajador").css("display","block");
            $("#nuevasrfcTrabajador").val(rfc);
            $("#nuevoNombreTrabajador").val(nombre);
            rfcActual = rfc;
            nombreActual = nombre;
            rfcAjax = rfc;
            nombreAjax = nombre;
            idActual = id;
            break;
        }
        i++;
    }
});

$('#nuevasrfcTrabajador').focusout(function(){
   if($('#nuevasrfcTrabajador').val() != ""){    
       var valores = $('#nuevasrfcTrabajador').val().toLowerCase();
       var n = arrayTrabajador.length, i = 0;
       while(n > i){
           var comparar = arrayTrabajador[i].rfc.toLowerCase();
           if(comparar == valores){
               console.log("rfc no validas");
               nuevasrfc = false;
               break;
           }
           i++;
       }
   }
    habilitarBotonCambios();
});

$('#nuevoNombreTrabajador').focusout(function(){
   if($('#nuevoNombreTrabajador').val() != ""){    
       var valores = $('#nuevoNombreTrabajador').val().toLowerCase();
       var n = arrayTrabajador.length, i = 0;
       while(n > i){
           var comparar = arrayTrabajador[i].nombre.toLowerCase();
           if(comparar == valores){
               console.log("nombre no valido");
               nuevoNombre = false;
               break;
           }
           i++;
       }
   } 
    habilitarBotonCambios();
});
/*cambio 2: mostrara u ocultara el form de modificar*/
$("#deleteTrabajador").change(function(){
    var idTemporal = $("#deleteTrabajador").val();
    var i = 0, max = arrayTrabajador.length;
    while(i < max){
        var id = arrayTrabajador[i].id;
        var rfc = arrayTrabajador[i].rfc;
        var nombre = arrayTrabajador[i].nombre;
        if(id == idTemporal){   
            $("#formEliminarTrabajador").css("display","block");
            $("#deleterfcTrabajador").val(rfc);
            $("#deleteNombreTrabajador").val(nombre);
            deleterfc = rfc;
            deleteNombre = nombre;
            deleteId = id;
            console.log(deleterfc,deleteNombre,deleteId);
            break;
        }
        i++;
    }
});
/*funcion que valida si el usuario realizo un cambio real en el campo de la vista de actualizar*/
$("#nuevasrfcTrabajador").focusout(function(){
    var valorrfc = $("#nuevasrfcTrabajador").val().toLowerCase();
    var validarLower = rfcActual.toLowerCase();
    if(valorrfc == validarLower){
        nuevasrfc = false;
    }else{
        nuevasrfc = true;
        rfcAjax = valorrfc;
    }
    habilitarBotonCambios();
});
/*funcion que valida si el usuario realizo un cambio real en la vista en el campo del nombre*/
$("#nuevoNombreTrabajador").focusout(function(){
    var valorNombre = $("#nuevoNombreTrabajador").val().toLowerCase();
    var validarLower = nombreActual.toLowerCase();
    if(valorNombre == validarLower){
        nuevoNombre = false;
    }else{
        nuevoNombre = true;
        nombreAjax = valorNombre;
    }
    habilitarBotonCambios();
});

/*habilida y deshabilita el boton de actualizacion de la vista*/
function habilitarBotonCambios(){
    if(nuevoNombre == true || nuevasrfc == true){
        $('#botonCambioTrabajador').prop('disabled',false);
    }else{
        $('#botonCambioTrabajador').prop('disabled',true);   
    }
}

/*funcion que envia los datos a la base de datos para una insersion*/
function insertarDatos(){
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            rfcTrabajador:rfcTrabajador,
            nameTrabajador:nombreTrabajador,
            accion:"insertar"
        },
        success: function(respuesta){
            console.log(respuesta);
        }
    });
}

/*funcion que envia los datos a la base de datos para una actualizacion*/
function actualizarDatos(){
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            newIdTrabajador:idActual,
            newrfcTrabajador:rfcAjax,
            newNameTrabajador:nombreAjax,
            accion:"actualizar"
        },
        success: function(respuesta){
            console.log(respuesta);
        }
    });
}
/*funcion que elimina los datos de la base de datos para una actualizacion, aunque no los elimina ya que para la estructura de los datos solo se cambia el estado de la columna delete a 1 */
function eliminarDatos(){
    console.log("aqui estoy"); 
    console.log(deleterfc,deleteNombre,deleteId);
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            deleteIdTrabajador:deleteId,
            accion:"eliminar"
        },
        success: function(respuesta){
            console.log(respuesta);
        }
    }); 
    
    console.log(deleterfc,deleteNombre,deleteId);
}
