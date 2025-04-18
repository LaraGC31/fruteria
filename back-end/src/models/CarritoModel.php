<?php
namespace Larit\Proyecto\Models;
use Larit\Proyecto\Models\Model;

class CarritoModel extends Model{
    public function aniadirCarrito($atributos){
        $idUsuario = $atributos[0];
 $idProducto = $atributos[1];
 $precio = $atributos[2];
 $fecha = $atributos[3];



 try {
     $consulta = "insert into carrito(idUsuario, idProducto,precio, fecha)
                 values (:idUsuario, :idProducto,:precio, :fecha)";

     $sentencia = $this->conn->prepare($consulta);
     $sentencia->bindParam(':idUsuario', $idUsuario);
     $sentencia->bindParam(':idProducto', $idProducto);
     $sentencia->bindParam(':precio', $precio);
     $sentencia->bindParam(':fecha', $fecha);

     return $sentencia->execute();

 } catch (\PDOException $e) {
     echo '<p> Excepcion' . $e->getMessage() . '</p>';
     echo "<p>" .var_dump($atributos) . "</p>";
     return NULL;
 }  
} 
public function getProductosCarritoByUsuario($idUsuario){
    try {
    
        $consulta = "select i.id, i.nombre, e.precio from carrito e join productos i on e.idProducto = i.id join usuarios u on e.idUsuario = u.id where e.idUsuario = :idUsuario";
        $sentencia = $this->conn->prepare($consulta);
        $sentencia->bindParam(':idUsuario', $idUsuario);

        $sentencia->execute();
        return   $sentencia->fetchAll(\PDO::FETCH_OBJ);
    } catch (\PDOException $e) {
        echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
        return NULL;

    }
}
public function getBorrarProductosCarrito($idProducto){
    try {
    
        $consulta = "delete from carrito where idProducto = :idProducto";
        $sentencia = $this->conn->prepare($consulta);
        $sentencia->bindParam(':idProducto', $idProducto);

        $sentencia->execute();
        return   $sentencia->fetch(\PDO::FETCH_OBJ);
    } catch (\PDOException $e) {
        echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
        return NULL;

    }
}
public function getBorrarProductosCarritoTodos($idUsuario){
    try {
    
        $consulta = "delete from carrito where idUsuario = :idUsuario";
        $sentencia = $this->conn->prepare($consulta);
        $sentencia->bindParam(':idUsuario', $idUsuario);

        $sentencia->execute();
        return   $sentencia->fetchAll(\PDO::FETCH_OBJ);
    } catch (\PDOException $e) {
        echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
        return NULL;

    }
}

}
