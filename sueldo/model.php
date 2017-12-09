<?php
/*variables definidas para almacenar los valores necesarios para el acceso a la base de datos de afiliadosa*/
$servidor = "localhost";
$usuario = "Gadocj";
$passwordServer = "Jajagoca1996";
$baseDeDatos = "udg";

function generarJsonSueldo(){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "SELECT * FROM sueldo";
    $json = [];
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    while($registro = $resultado -> fetch_assoc()){
        $json[] = $registro;
    }
    return $json;
}

function insertarNuevoCentro($salario){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "INSERT INTO sueldo(salario,deleted)VALUES('$salario','0')";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

function modificarCentro($Salario,$id){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "UPDATE sueldo SET salario='$salario' WHERE id='$id' AND deleted='0'";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

function eliminarSueldo($id){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "UPDATE cu SET deleted='1' WHERE id='$id' AND deleted='0'";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

if(count($_POST) > 0){
    echo "<script type=\"text/javascript\"> console.log('llegue hasta aqui');</script>";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    if($_POST['accion'] == 'insertar'){
        echo "<script type=\"text/javascript\"> console.log('insertando datos...');</script>";
        $salarioSueldo = $_POST['nameSueldo'];
        insertarNuevoCentro($salarioSueldo);
        header('location:../Sueldo/');
    }else if($_POST['accion'] == 'actualizar'){
        echo "<script type=\"text/javascript\"> console.log('actualizando datos...');</script>";
        $nuevoSalarioSueldo = $_POST['newNameSueldo'];
        $nuevoIdSueldo = $_POST['newIdSueldo'];
        modificarCentro($nuevoSalarioSueldo,$nuevoIdSueldo);
        header('location:../Sueldo/');
    }else if($_POST['accion'] == 'eliminar'){
        echo "<script type=\"text/javascript\"> console.log('eliminando datos...');</script>";
        $byeIdSueldo = $_POST['deleteIdSueldo'];
        $byeSalarioSueldo = $_POST['deleteSalarioSueldo'];
        eliminarSueldo($byeSalarioSueldo,$byeIdSueldo);
        header('location:../Sueldo/');
    }else{
            echo "<script type=\"text/javascript\"> console.log('error en PHP');</script>";
    }   
}else{
     echo "<script type=\"text/javascript\"> console.log('Mensaje de bienvenida');</script>";
}
?>