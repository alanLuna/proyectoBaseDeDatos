<?php
/*variables definidas para almacenar los valores necesarios para el acceso a la base de datos de afiliadosa*/
$servidor = "localhost";
$usuario = "Gadocj";
$passwordServer = "Jajagoca1996";
$baseDeDatos = "udg";

function generarJsonPuesto(){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "SELECT * FROM puesto";
    $json = [];
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    while($registro = $resultado -> fetch_assoc()){
        $json[] = $registro;
    }
    return $json;
}

function insertarNuevoCentro($nombre){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "INSERT INTO puesto(nombre,deleted)VALUES('$nombre','0')";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

function modificarCentro($nombre,$id){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "UPDATE puesto SET nombre='$nombre' WHERE id='$id' AND deleted='0'";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

function eliminarPuesto($id){
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
        $NombrePuesto = $_POST['namePuesto'];
        insertarNuevoCentro($NombrePuesto);
        header('location:../Puesto/');
    }else if($_POST['accion'] == 'actualizar'){
        echo "<script type=\"text/javascript\"> console.log('actualizando datos...');</script>";
        $nuevoNombrePuesto = $_POST['newNamePuesto'];
        $nuevoIdPuesto = $_POST['newIdPuesto'];
        modificarCentro($nuevoNombrePuesto,$nuevoIdPuesto);
        header('location:../Puesto/');
    }else if($_POST['accion'] == 'eliminar'){
        echo "<script type=\"text/javascript\"> console.log('eliminando datos...');</script>";
        $byeIdPuesto = $_POST['deleteIdPuesto'];
        $byeNombrePuesto = $_POST['deleteNombrePuesto'];
        eliminarPuesto($byeNombrePuesto,$byeIdPuesto);
        header('location:../Puesto/');
    }else{
            echo "<script type=\"text/javascript\"> console.log('error en PHP');</script>";
    }   
}else{
     echo "<script type=\"text/javascript\"> console.log('Mensaje de bienvenida');</script>";
}
?>