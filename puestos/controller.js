/*deshabilitar botones, esto con el fin de que no se pueda hacer ninguna consulta a SQL sin una validacion previa*/
$('#botonRegistroPuesto').prop('disabled',true);
$('#botonCambioPuesto').prop('disabled',true);

/*Cambia que formulario se va a mostrar dentro de la vista, ya tiene los nombres correctos de los ID que estan como
includes en la vista principal que es el INDEX.php*/
$('#opcionSeleccionada').change(function(){
    var accionPorRealizar = $('#opcionSeleccionada').val();
    if(accionPorRealizar == "nuevoPuesto"){
        $("#formEliminarPuesto").css("display","none");
        $("#formRegistroPuesto").css("display","block");
        $('#divModificarPuesto').css("display","none");
        $("#formModificarPuesto").css("display","none");
        $("#divEliminarPuesto").css("display","none");
        $("#divConsultarPuesto").css("display","none");
    }else if(accionPorRealizar == "modificarPuesto"){
        $("#formEliminarPuesto").css("display","none");
        $("#formRegistroPuesto").css("display","none");
        $('#divModificarPuesto').css("display","block");
        $("#divEliminarPuesto").css("display","none");
        $("#divConsultarPuestoo").css("display","none")
    }else if(accionPorRealizar == "consultaPuesto"){
        $("#formEliminarPuesto").css("display","none");
        $("#formRegistroPuesto").css("display","none");
        $('#divModificarPuesto').css("display","none");
        $("#divEliminarPuesto").css("display","none");
        $("#formModificarPuesto").css("display","none");
        $("#divConsultarPuesto").css("display","block");
    }else if(accionPorRealizar == "eliminarPuesto"){
        $("#formRegistroPuesto").css("display","none");
        $('#divModificarPuesto').css("display","none");
        $("#divEliminarPuesto").css("display","block");
        $("#divConsultarPuesto").css("display","none");
        $("#formModificarPuesto").css("display","none");
    }
});

/*funcion de jquery dedicada unicamente al form de consulta...*/
$("#selectPuesto").change(function(){
   var opcionSeleccionada = $("#selectPuesto").val();
    if(opcionSeleccionada == "todosPuesto"){
        $("#todosPuesto").css("display","block");
        $("#tablaConsultaSelectPuesto").css("display","none");
        $("#identificadorPuesto").css("display","none");
        $("#similarPuesto").css("display","none");
    }else if(opcionSeleccionada == "identificadorPuesto"){
        $("#todosPuesto").css("display","none");
        $("#identificadorPuesto").css("display","block");
        $("#similarPuesto").css("display","none");
    }else if(opcionSeleccionada == "similarPuesto"){
        $("#todosPuesto").css("display","none");
        $("#identificadorPuesto").css("display","none");
        $("#tablaConsultaSelectPuesto").css("display","none");
        $("#similarPuesto").css("display","block");
    }
});
/*variables globales*/
var nombrePuesto;
var nombreValido = false;
var nombreActual,idActual;
var nombreAjax;
var nuevoNombre;
var deleteNombre,deleteId;
/*funcion que valida si el nombre tiene texto valido y no es campo vacion*/
$('#nombrePuesto').focusout(function(){
    var validar = $('#nombrePuesto').val();
    if(validar != ''){
        nombrePuesto = validar;
        nombreValido = true;
    }else{
        nombreValido = false;
    }
    habilitarBotonRegistro();
});
/*funcion que cambia el estado del boton para registrar un nuevo centro universitario*/
function habilitarBotonRegistro(){
    if(nombreValido == true){
        $('#botonRegistroPuesto').prop('disabled',false);
    }else{
        $('#botonRegistroPuesto').prop('disabled',true);   
    }
}

$('#nombrePuesto').focusout(function(){
   if($('#nombrePuesto').val() != ""){    
       var valores = $('#nombrePuesto').val().toLowerCase();
       var n = arrayPuesto.length, i = 0;
       while(n > i){
           var comparar = arrayPuesto[i].nombre.toLowerCase();
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
$("#idSeleccionadoPuesto").change(function(){
    var idTemporal = $("#idSeleccionadoPuesto").val();
    var i = 0, max = arrayPuesto.length;
    while(i < max){
        var id = arrayPuesto[i].id;
        var siglas = arrayPuesto[i].siglas;
        var nombre = arrayPuesto[i].nombre;
        if(id == idTemporal){   
            $("#tablaConsultaSelectPuesto").css("display","block");
            $("#insertarIdPuesto").text(id);
            $("#insertarNombrePuesto").text(nombre);
            break;
        }
        i++;
    }
});
/*cambio 1 */

/*cambio 2: mostrara u ocultara el form de modificar*/
$("#updatePuesto").change(function(){
    var idTemporal = $("#updatePuesto").val();
    var i = 0, max = arrayPuesto.length;
    while(i < max){
        var id = arrayPuesto[i].id;
        var siglas = arrayPuesto[i].siglas;
        var nombre = arrayPuesto[i].nombre;
        if(id == idTemporal){   
            $("#formModificarPuesto").css("display","block");
            $("#nuevoNombrePuesto").val(nombre);
            nombreActual = nombre;
            nombreAjax = nombre;
            idActual = id;
            break;
        }
        i++;
    }
});

$('#nuevoNombrePuesto').focusout(function(){
   if($('#nuevoNombrePuesto').val() != ""){    
       var valores = $('#nuevoNombrePuesto').val().toLowerCase();
       var n = arrayPuesto.length, i = 0;
       while(n > i){
           var comparar = arrayPuesto[i].nombre.toLowerCase();
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
$("#deletePuesto").change(function(){
    var idTemporal = $("#deletePuesto").val();
    var i = 0, max = arrayPuesto.length;
    while(i < max){
        var id = arrayPuesto[i].id;
        var nombre = arrayPuesto[i].nombre;
        if(id == idTemporal){   
            $("#formEliminarPuesto").css("display","block");
            $("#deleteNombrePuesto").val(nombre);
            deleteNombre = nombre;
            deleteId = id;
            console.log(deleteNombre,deleteId);
            break;
        }
        i++;
    }
});
/*funcion que valida si el usuario realizo un cambio real en la vista en el campo del nombre*/
$("#nuevoNombrePuesto").focusout(function(){
    var valorNombre = $("#nuevoNombrePuesto").val().toLowerCase();
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
    if(nuevoNombre == true){
        $('#botonCambioPuesto').prop('disabled',false);
    }else{
        $('#botonCambioPuesto').prop('disabled',true);   
    }
}

/*funcion que envia los datos a la base de datos para una insersion*/
function insertarDatos(){
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            namePuesto:nombrePuesto,
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
            newIdPuesto:idActual,
            newNamePuesto:nombreAjax,
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
    console.log(deleteNombre,deleteId);
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            deleteIdPuesto:deleteId,
            accion:"eliminar"
        },
        success: function(respuesta){
            console.log(respuesta);
        }
    }); 
    
    console.log(deleteNombre,deleteId);
}
