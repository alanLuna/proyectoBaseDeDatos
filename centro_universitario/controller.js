/*deshabilitar botones, esto con el fin de que no se pueda hacer ninguna consulta a SQL sin una validacion previa*/
$('#botonRegistroCentroUniversitario').prop('disabled',true);
$('#botonCambioCentroUniversitario').prop('disabled',true);

/*Cambia que formulario se va a mostrar dentro de la vista, ya tiene los nombres correctos de los ID que estan como
includes en la vista principal que es el INDEX.php*/
$('#opcionSeleccionada').change(function(){
    var accionPorRealizar = $('#opcionSeleccionada').val();
    if(accionPorRealizar == "nuevoCentroUniversitario"){
        $("#formEliminarCentroUniversitario").css("display","none");
        $("#formRegistroCentroUniversitario").css("display","block");
        $('#divModificarCentroUniversitario').css("display","none");
        $("#formModificarCentroUniversitario").css("display","none");
        $("#divEliminarCentroUniversitario").css("display","none");
        $("#divConsultarCentroUniversitario").css("display","none");
    }else if(accionPorRealizar == "modificarCentroUniversitario"){
        $("#formEliminarCentroUniversitario").css("display","none");
        $("#formRegistroCentroUniversitario").css("display","none");
        $('#divModificarCentroUniversitario').css("display","block");
        $("#divEliminarCentroUniversitario").css("display","none");
        $("#divConsultarCentroUniversitario").css("display","none")
    }else if(accionPorRealizar == "consultaCentroUniversitario"){
        $("#formEliminarCentroUniversitario").css("display","none");
        $("#formRegistroCentroUniversitario").css("display","none");
        $('#divModificarCentroUniversitario').css("display","none");
        $("#divEliminarCentroUniversitario").css("display","none");
        $("#formModificarCentroUniversitario").css("display","none");
        $("#divConsultarCentroUniversitario").css("display","block");
    }else if(accionPorRealizar == "eliminarCentroUniversitario"){
        $("#formRegistroCentroUniversitario").css("display","none");
        $('#divModificarCentroUniversitario').css("display","none");
        $("#divEliminarCentroUniversitario").css("display","block");
        $("#divConsultarCentroUniversitario").css("display","none");
        $("#formModificarCentroUniversitario").css("display","none");
    }
});

/*funcion de jquery dedicada unicamente al form de consulta...*/
$("#selectCentroUniversitario").change(function(){
   var opcionSeleccionada = $("#selectCentroUniversitario").val();
    if(opcionSeleccionada == "todosCentroUniversitario"){
        $("#todosCentroUniversitario").css("display","block");
        $("#tablaConsultaSelectCentroUniversitario").css("display","none");
        $("#identificadorCentroUniversitario").css("display","none");
        $("#similarCentroUniversitario").css("display","none");
    }else if(opcionSeleccionada == "identificadorCentroUniversitario"){
        $("#todosCentroUniversitario").css("display","none");
        $("#identificadorCentroUniversitario").css("display","block");
        $("#similarCentroUniversitario").css("display","none");
    }else if(opcionSeleccionada == "similarCentroUniversitario"){
        $("#todosCentroUniversitario").css("display","none");
        $("#identificadorCentroUniversitario").css("display","none");
        $("#tablaConsultaSelectCentroUniversitario").css("display","none");
        $("#similarCentroUniversitario").css("display","block");
    }
});
/*variables globales*/
var nombreCentroUniversitario;
var siglasCentroUniversitario;
var nombreValido = false, siglasValidas = false;
var nombreActual,siglasActual,idActual;
var nombreAjax, siglasAjax;
var nuevoNombre, nuevasSiglas;
var deleteNombre,deleteSiglas,deleteId;
/*funcion que valida si las siglas tienen texto valido y no son campos vacions*/
$('#siglasCentroUniversitario').focusout(function(){
    var validar = $('#siglasCentroUniversitario').val();
    if(validar != ''){
        siglasCentroUniversitario = validar;
        siglasValidas = true;
    }else{
        siglasValidas = false;
    }
    habilitarBotonRegistro();
})
/*funcion que valida si el nombre tiene texto valido y no es campo vacion*/
$('#nombreCentroUniversitario').focusout(function(){
    var validar = $('#nombreCentroUniversitario').val();
    if(validar != ''){
        nombreCentroUniversitario = validar;
        nombreValido = true;
    }else{
        nombreValido = false;
    }
    habilitarBotonRegistro();
});
/*funcion que cambia el estado del boton para registrar un nuevo centro universitario*/
function habilitarBotonRegistro(){
    if(nombreValido == true && siglasValidas == true){
        $('#botonRegistroCentroUniversitario').prop('disabled',false);
    }else{
        $('#botonRegistroCentroUniversitario').prop('disabled',true);   
    }
}

$('#siglasCentroUniversitario').focusout(function(){
   if($('#siglasCentroUniversitario').val() != ""){    
       var valores = $('#siglasCentroUniversitario').val().toLowerCase();
       var n = arrayCentroUniversitario.length, i = 0;
       while(n > i){
           var comparar = arrayCentroUniversitario[i].siglas.toLowerCase();
           if(comparar == valores){
               console.log("siglas no validas");
               ExisteSiglas = true;
               siglasValidas = false;
               break;
           }
           i++;
       }
   }
    habilitarBotonRegistro();
});

$('#nombreCentroUniversitario').focusout(function(){
   if($('#nombreCentroUniversitario').val() != ""){    
       var valores = $('#nombreCentroUniversitario').val().toLowerCase();
       var n = arrayCentroUniversitario.length, i = 0;
       while(n > i){
           var comparar = arrayCentroUniversitario[i].nombre.toLowerCase();
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
$("#idSeleccionadoCentroUniversitario").change(function(){
    var idTemporal = $("#idSeleccionadoCentroUniversitario").val();
    var i = 0, max = arrayCentroUniversitario.length;
    while(i < max){
        var id = arrayCentroUniversitario[i].id;
        var siglas = arrayCentroUniversitario[i].siglas;
        var nombre = arrayCentroUniversitario[i].nombre;
        if(id == idTemporal){   
            $("#tablaConsultaSelectCentroUniversitario").css("display","block");
            $("#insertarIdCentroUniversitario").text(siglas);
            $("#insertarNombreCentroUniversitario").text(nombre);
            break;
        }
        i++;
    }
});
/*cambio 1 */

/*cambio 2: mostrara u ocultara el form de modificar*/
$("#updateCentroUniversitario").change(function(){
    var idTemporal = $("#updateCentroUniversitario").val();
    var i = 0, max = arrayCentroUniversitario.length;
    while(i < max){
        var id = arrayCentroUniversitario[i].id;
        var siglas = arrayCentroUniversitario[i].siglas;
        var nombre = arrayCentroUniversitario[i].nombre;
        if(id == idTemporal){   
            $("#formModificarCentroUniversitario").css("display","block");
            $("#nuevasSiglasCentroUniversitario").val(siglas);
            $("#nuevoNombreCentroUniversitario").val(nombre);
            siglasActual = siglas;
            nombreActual = nombre;
            siglasAjax = siglas;
            nombreAjax = nombre;
            idActual = id;
            break;
        }
        i++;
    }
});

$('#nuevasSiglasCentroUniversitario').focusout(function(){
   if($('#nuevasSiglasCentroUniversitario').val() != ""){    
       var valores = $('#nuevasSiglasCentroUniversitario').val().toLowerCase();
       var n = arrayCentroUniversitario.length, i = 0;
       while(n > i){
           var comparar = arrayCentroUniversitario[i].siglas.toLowerCase();
           if(comparar == valores){
               console.log("siglas no validas");
               nuevasSiglas = false;
               break;
           }
           i++;
       }
   }
    habilitarBotonCambios();
});

$('#nuevoNombreCentroUniversitario').focusout(function(){
   if($('#nuevoNombreCentroUniversitario').val() != ""){    
       var valores = $('#nuevoNombreCentroUniversitario').val().toLowerCase();
       var n = arrayCentroUniversitario.length, i = 0;
       while(n > i){
           var comparar = arrayCentroUniversitario[i].nombre.toLowerCase();
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
$("#deleteCentroUniversitario").change(function(){
    var idTemporal = $("#deleteCentroUniversitario").val();
    var i = 0, max = arrayCentroUniversitario.length;
    while(i < max){
        var id = arrayCentroUniversitario[i].id;
        var siglas = arrayCentroUniversitario[i].siglas;
        var nombre = arrayCentroUniversitario[i].nombre;
        if(id == idTemporal){   
            $("#formEliminarCentroUniversitario").css("display","block");
            $("#deleteSiglasCentroUniversitario").val(siglas);
            $("#deleteNombreCentroUniversitario").val(nombre);
            deleteSiglas = siglas;
            deleteNombre = nombre;
            deleteId = id;
            console.log(deleteSiglas,deleteNombre,deleteId);
            break;
        }
        i++;
    }
});
/*funcion que valida si el usuario realizo un cambio real en el campo de la vista de actualizar*/
$("#nuevasSiglasCentroUniversitario").focusout(function(){
    var valorSiglas = $("#nuevasSiglasCentroUniversitario").val().toLowerCase();
    var validarLower = siglasActual.toLowerCase();
    if(valorSiglas == validarLower){
        nuevasSiglas = false;
    }else{
        nuevasSiglas = true;
        siglasAjax = valorSiglas;
    }
    habilitarBotonCambios();
});
/*funcion que valida si el usuario realizo un cambio real en la vista en el campo del nombre*/
$("#nuevoNombreCentroUniversitario").focusout(function(){
    var valorNombre = $("#nuevoNombreCentroUniversitario").val().toLowerCase();
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
    if(nuevoNombre == true || nuevasSiglas == true){
        $('#botonCambioCentroUniversitario').prop('disabled',false);
    }else{
        $('#botonCambioCentroUniversitario').prop('disabled',true);   
    }
}

/*funcion que envia los datos a la base de datos para una insersion*/
function insertarDatos(){
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            siglasCentroUniversitario:siglasCentroUniversitario,
            nameCentroUniversitario:nombreCentroUniversitario,
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
            newIdCentroUniversitario:idActual,
            newSiglasCentroUniversitario:siglasAjax,
            newNameCentroUniversitario:nombreAjax,
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
    console.log(deleteSiglas,deleteNombre,deleteId);
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            deleteIdCentroUniversitario:deleteId,
            accion:"eliminar"
        },
        success: function(respuesta){
            console.log(respuesta);
        }
    }); 
    
    console.log(deleteSiglas,deleteNombre,deleteId);
}
