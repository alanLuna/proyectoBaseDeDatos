<?php
/*variables definidas para almacenar los valores necesarios para el acceso a la base de datos de afiliadosa*/
$servidor = "localhost";
$usuario = "Gadocj";
$passwordServer = "Jajagoca1996";
$baseDeDatos = "udg";

function generarJsontrabajador(){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "SELECT * FROM trabajador";
    $json = [];
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    while($registro = $resultado -> fetch_assoc()){
        $json[] = $registro;
    }
    return $json;
}

function insertarNuevotrabajador($rfc,$nombre){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "INSERT INTO trabajador(rfc,nombre,deleted)VALUES('$rfc','$nombre','0')";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

function modificartrabajador($rfc,$nombre,$id){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "UPDATE trabajador SET rfc='$rfc',nombre='$nombre' WHERE id='$id' AND deleted='0'";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

function eliminartrabajador($id){
    $servidor = "localhost";
    $usuario = "Gadocj";
    $passwordServer = "Jajagoca1996";
    $baseDeDatos = "udg";
    $sql = "UPDATE trabajador SET deleted='1' WHERE id='$id' AND deleted='0'";
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
        $rfctrabajador = $_POST['rfctrabajador'];
        $Nombretrabajador = $_POST['nametrabajador'];
        insertarNuevotrabajador($rfctrabajador,$Nombretrabajador);
        header('location:../trabajador/');
    }else if($_POST['accion'] == 'actualizar'){
        echo "<script type=\"text/javascript\"> console.log('actualizando datos...');</script>";
        $nuevoNombretrabajador = $_POST['newNametrabajador'];
        $nuevasrfctrabajador = $_POST['newrfctrabajador'];
        $nuevoIdtrabajador = $_POST['newIdtrabajador'];
        modificartrabajador($nuevasrfctrabajador,$nuevoNombretrabajador,$nuevoIdtrabajador);
        header('location:../trabajador/');
    }else if($_POST['accion'] == 'eliminar'){
        echo "<script type=\"text/javascript\"> console.log('eliminando datos...');</script>";
        $byeIdtrabajador = $_POST['deleteIdtrabajador'];
        $byerfctrabajador = $_POST['deleterfctrabajador'];
        $byeNombretrabajador = $_POST['deleteNombretrabajador'];
        eliminartrabajador($byerfctrabajador,$byeNombretrabajador,$byeIdtrabajador);
        header('location:../trabajador/');
    }else{
            echo "<script type=\"text/javascript\"> console.log('error en PHP');</script>";
    }   
}else{
     echo "<script type=\"text/javascript\"> console.log('Mensaje de bienvenida');</script>";
}
?>
