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

function insertarNuevoCentro($id,$nombre){
    $servidor = "localhost";
    $usuario = "alan";
    $passwordServer = "root";
    $baseDeDatos = "udg";
    $sql = "INSERT INTO cu(id,nombre,deleted)VALUES('$id','$nombre','0')";
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
        $siglasCentroUniversitario = $_POST['idCentroUniversitario'];
        $NombreCentroUniversitario = $_POST['nameCentroUniversitario'];
        insertarNuevoCentro($siglasCentroUniversitario,$NombreCentroUniversitario);
    }else{
            echo "<script type=\"text/javascript\"> console.log('valio verga');</script>";
    }   
}else{
     echo "<script type=\"text/javascript\"> console.log('Mensaje de bienvenida');</script>";
}
?>
