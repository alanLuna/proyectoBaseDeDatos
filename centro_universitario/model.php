<?php
/*variables definidas para almacenar los valores necesarios para el acceso a la base de datos de afiliadosa*/
$servidor = "localhost";
$usuario = "alan";
$passwordServer = "root";
$baseDeDatos = "udg";

function generarJsonCentroUniversitario(){
    $servidor = "localhost";
    $usuario = "alan";
    $passwordServer = "root";
    $baseDeDatos = "udg";
    $sql = "SELECT * FROM cu";
    $json = [];
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    while($registro = $resultado -> fetch_assoc()){
        $json[] = $registro;
    }
    return $json;
}

function insertarNuevoCentro($siglas,$nombre){
    $servidor = "localhost";
    $usuario = "alan";
    $passwordServer = "root";
    $baseDeDatos = "udg";
    $sql = "INSERT INTO cu(siglas,nombre,deleted)VALUES('$siglas','$nombre','0')";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

function modificarCentro($siglas,$nombre,$id){
    $servidor = "localhost";
    $usuario = "alan";
    $passwordServer = "root";
    $baseDeDatos = "udg";
    $sql = "UPDATE cu SET siglas='$siglas',nombre='$nombre' WHERE id='$id' AND deleted='0'";
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    $resultado = mysqli_query($con,$sql);
    if($resultado == true){
        echo "<script type=\"text/javascript\> console.log('funciona'); </script>";
    }else{
        echo "<script type=\"text/javascript\> console.log('no funciona'); </script>";
    }
}

if(count($_POST) > 0){
    $con = mysqli_connect($servidor,$usuario,$passwordServer,$baseDeDatos);
    if($_POST['accion'] == 'insertar'){
        echo "<script type=\"text/javascript\"> console.log('insertando datos...');</script>";
        $siglasCentroUniversitario = $_POST['siglasCentroUniversitario'];
        $NombreCentroUniversitario = $_POST['nameCentroUniversitario'];
        insertarNuevoCentro($siglasCentroUniversitario,$NombreCentroUniversitario);
        header('location:../centroUniversitario/');
    }else if($_POST['accion'] == 'actualizar'){
        echo "<script type=\"text/javascript\"> console.log('actualizando datos...');</script>";
        $nuevoNombreCentroUniversitario = $_POST['newNameCentroUniversitario'];
        $nuevasSiglasCentroUniversitario = $_POST['newSiglasCentroUniversitario'];
        $nuevoIdCentroUniversitario = $_POST['newIdCentroUniversitario'];
        modificarCentro($nuevasSiglasCentroUniversitario,$nuevoNombreCentroUniversitario,$nuevoIdCentroUniversitario);
        header('location:../centroUniversitario/');
    }else{
            echo "<script type=\"text/javascript\"> console.log('error en PHP');</script>";
    }   
}else{
     echo "<script type=\"text/javascript\"> console.log('Mensaje de bienvenida');</script>";
}
?>
