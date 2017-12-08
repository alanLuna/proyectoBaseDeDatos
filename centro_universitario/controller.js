/*deshabilitar botones, esto con el fin de que no se pueda hacer ninguna consulta a SQL sin una validacion previa*/
$('#botonRegistroCentroUniversitario').prop('disabled',true);
$('#botonCambioCentroUniversitario').prop('disabled',true);
$('#botonEliminarCentroUniversitario').prop('disabled',true);

/*Cambia que formulario se va a mostrar dentro de la vista, ya tiene los nombres correctos de los ID que estan como
includes en la vista principal que es el INDEX.php*/
$('#opcionSeleccionada').change(function(){
    var accionPorRealizar = $('#opcionSeleccionada').val();
    if(accionPorRealizar == "nuevoCentroUniversitario"){
        $("#formRegistroCentroUniversitario").css("display","block");
        $('#divModificarCentroUniversitario').css("display","none");
        $("#divEliminarCentroUniversitario").css("display","none");
        $("#divConsultarCentroUniversitario").css("display","none");
    }else if(accionPorRealizar == "modificarCentroUniversitario"){
        $("#formRegistroCentroUniversitario").css("display","none");
        $('#divModificarCentroUniversitario').css("display","block");
        $("#divEliminarCentroUniversitario").css("display","none");
        $("#divConsultarCentroUniversitario").css("display","none")
    }else if(accionPorRealizar == "consultaCentroUniversitario"){
        $("#formRegistroCentroUniversitario").css("display","none");
        $('#divModificarCentroUniversitario').css("display","none");
        $("#divEliminarCentroUniversitario").css("display","none");
        $("#divConsultarCentroUniversitario").css("display","block");
    }else if(accionPorRealizar == "eliminarCentroUniversitario"){
        $("#formRegistroCentroUniversitario").css("display","none");
        $('#divModificarCentroUniversitario').css("display","none");
        $("#divEliminarCentroUniversitario").css("display","block");
        $("#divConsultarCentroUniversitario").css("display","none")
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
           var comparar = arrayCentroUniversitario[i].id.toLowerCase();
           if(comparar == valores){
               console.log("id no valido");
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
        var siglas = arrayCentroUniversitario[i].id;
        var nombre = arrayCentroUniversitario[i].nombre;
        if(siglas == idTemporal){   
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


/*funcion que envia los datos a la base de datos para una insersion*/
function insertarDatos(){
    var accion;
    $.ajax({
        url: 'model.php',
        type: 'POST',
        data: {
            idCentroUniversitario:siglasCentroUniversitario,
            nameCentroUniversitario:nombreCentroUniversitario,
            accion:"insertar"
        },
        success: function(respuesta){
            console.log(respuesta);
        }
    });
}

/*funcion que envia los datos a la base de datos para una actualizacion*/