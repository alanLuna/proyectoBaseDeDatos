/*deshabilitar botones, esto con el fin de que no se pueda hacer ninguna consulta a SQL sin una validacion previa*/
$('#botonRegistroSueldo').prop('disabled',true);
$('#botonCambioSueldo').prop('disabled',true);

/*Cambia que formulario se va a mostrar dentro de la vista, ya tiene los salarios correctos de los ID que estan como
includes en la vista principal que es el INDEX.php*/
$('#opcionSeleccionada').change(function(){
    var accionPorRealizar = $('#opcionSeleccionada').val();
    if(accionPorRealizar == "nuevoSueldo"){
        $("#formEliminarSueldo").css("display","none");
        $("#formRegistroSueldo").css("display","block");
        $('#divModificarSueldo').css("display","none");
        $("#formModificarSueldo").css("display","none");
        $("#divEliminarSueldo").css("display","none");
        $("#divConsultarSueldo").css("display","none");
    }else if(accionPorRealizar == "modificarSueldo"){
        $("#formEliminarSueldo").css("display","none");
        $("#formRegistroSueldo").css("display","none");
        $('#divModificarSueldo').css("display","block");
        $("#divEliminarSueldo").css("display","none");
        $("#divConsultarSueldoo").css("display","none")
    }else if(accionPorRealizar == "consultaSueldo"){
        $("#formEliminarSueldo").css("display","none");
        $("#formRegistroSueldo").css("display","none");
        $('#divModificarSueldo').css("display","none");
        $("#divEliminarSueldo").css("display","none");
        $("#formModificarSueldo").css("display","none");
        $("#divConsultarSueldo").css("display","block");
    }else if(accionPorRealizar == "eliminarSueldo"){
        $("#formRegistroSueldo").css("display","none");
        $('#divModificarSueldo').css("display","none");
        $("#divEliminarSueldo").css("display","block");
        $("#divConsultarSueldo").css("display","none");
        $("#formModificarSueldo").css("display","none");
    }
});

/*funcion de jquery dedicada unicamente al form de consulta...*/
$("#selectSueldo").change(function(){
   var opcionSeleccionada = $("#selectSueldo").val();
    if(opcionSeleccionada == "todosSueldo"){
        $("#todosSueldo").css("display","block");
        $("#tablaConsultaSelectSueldo").css("display","none");
        $("#identificadorSueldo").css("display","none");
        $("#similarSueldo").css("display","none");
    }else if(opcionSeleccionada == "identificadorSueldo"){
        $("#todosSueldo").css("display","none");
        $("#identificadorSueldo").css("display","block");
        $("#similarSueldo").css("display","none");
    }else if(opcionSeleccionada == "similarSueldo"){
        $("#todosSueldo").css("display","none");
        $("#identificadorSueldo").css("display","none");
        $("#tablaConsultaSelectSueldo").css("display","none");
        $("#similarSueldo").css("display","block");
    }
});
/*variables globales*/
var salarioSueldo;
var salarioValido = false;
var salarioActual,idActual;
var salarioAjax;
var nuevosalario;
var deletesalario,deleteId;
/*funcion que valida si el salario tiene texto valido y no es campo vacion*/
$('#salarioSueldo').focusout(function(){
    var validar = $('#salarioSueldo').val();
    if(validar != ''){
        salarioSueldo = validar;
        salarioValido = true;
    }else{
        salarioValido = false;
    }
    habilitarBotonRegistro();
});
/*funcion que cambia el estado del boton para registrar un nuevo centro universitario*/
function habilitarBotonRegistro(){
    if(salarioValido == true){
        $('#botonRegistroSueldo').prop('disabled',false);
    }else{
        $('#botonRegistroSueldo').prop('disabled',true);   
    }
}

$('#salarioSueldo').focusout(function(){
   if($('#salarioSueldo').val() != ""){    
       var valores = $('#salarioSueldo').val().toLowerCase();
       var n = arraySueldo.length, i = 0;
       while(n > i){
           var comparar = arraySueldo[i].salario.toLowerCase();
           if(comparar == valores){
               console.log("salario no valido");
               salarioValido = false;
               break;
           }
           i++;
       }
   } 
    habilitarBotonRegistro();
});

/*cambio 1 */
$("#idSeleccionadoSueldo").change(function(){
    var idTemporal = $("#idSeleccionadoSueldo").val();
    var i = 0, max = arraySueldo.length;
    while(i < max){
        var id = arraySueldo[i].id;
        var siglas = arraySueldo[i].siglas;
        var salario = arraySueldo[i].salario;
        if(id == idTemporal){   
            $("#tablaConsultaSelectSueldo").css("display","block");
            $("#insertarIdSueldo").text(id);
            $("#insertarsalarioSueldo").text(salario);
            break;
        }
        i++;
    }
});
/*cambio 1 */

/*cambio 2: mostrara u ocultara el form de modificar*/
$("#updateSueldo").change(function(){
    var idTemporal = $("#updateSueldo").val();
    var i = 0, max = arraySueldo.length;
    while(i < max){
        var id = arraySueldo[i].id;
        var siglas = arraySueldo[i].siglas;
        var salario = arraySueldo[i].salario;
        if(id == idTemporal){   
            $("#formModificarSueldo").css("display","block");
            $("#nuevosalarioSueldo").val(salario);
            salarioActual = salario;
            salarioAjax = salario;
            idActual = id;
            break;
        }
        i++;
    }
});

$('#nuevosalarioSueldo').focusout(function(){
   if($('#nuevosalarioSueldo').val() != ""){    
       var valores = $('#nuevosalarioSueldo').val().toLowerCase();
       var n = arraySueldo.length, i = 0;
       while(n > i){
           var comparar = arraySueldo[i].salario.toLowerCase();
           if(comparar == valores){
               console.log("salario no valido");
               nuevosalario = false;
               break;
           }
           i++;
       }
   } 
    habilitarBotonCambios();
});
/*cambio 2: mostrara u ocultara el form de modificar*/
$("#deleteSueldo").change(function(){
    var idTemporal = $("#deleteSueldo").val();
    var i = 0, max = arraySueldo.length;
    while(i < max){
        var id = arraySueldo[i].id;
        var salario = arraySueldo[i].salario;
        if(id == idTemporal){   
            $("#formEliminarSueldo").css("display","block");
            $("#deletesalarioSueldo").val(salario);
            deletesalario = salario;
            deleteId = id;
            console.log(deletesalario,deleteId);
            break;
        }
        i++;
    }
});
/*funcion que valida si el usuario realizo un cambio real en la vista en el campo del salario*/
$("#nuevosalarioSueldo").focusout(function(){
    var valorsalario = $("#nuevosalarioSueldo").val().toLowerCase();
    var validarLower = salarioActual.toLowerCase();
    if(valorsalario == validarLower){
        nuevosalario = false;
    }else{
        nuevosalario = true;
        salarioAjax = valorsalario;
    }
    habilitarBotonCambios();
});

/*habilida y deshabilita el boton de actualizacion de la vista*/
function habilitarBotonCambios(){
    if(nuevosalario == true){
        $('#botonCambioSueldo').prop('disabled',false);
    }else{
        $('#botonCambioSueldo').prop('disabled',true);   
    }
}

/*funcion que envia los datos a la base de datos para una insersion*/
function insertarDatos(){
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            nameSueldo:salarioSueldo,
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
            newIdSueldo:idActual,
            newNameSueldo:salarioAjax,
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
    console.log(deletesalario,deleteId);
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            deleteIdSueldo:deleteId,
            accion:"eliminar"
        },
        success: function(respuesta){
            console.log(respuesta);
        }
    }); 
    
    console.log(deletesalario,deleteId);
}
