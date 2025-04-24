<?php
namespace Larit\Proyecto\Models;
use Larit\Proyecto\Models\Model;

class PedidosModel extends Model{
    public function __construct(){
        parent::__construct();
        $this->tabla = "pedidos";
    }
    public function getOnePedidos($id){
        try {
        
            $consulta = "select * from pedidos where idUsuario = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':id', $id);
          //  $sentencia->setFetchMode(\PDO::FETCH_ASSOC);
            $sentencia->setFetchMode(\PDO::FETCH_OBJ);
            $sentencia->execute();
          
            $resultado = $sentencia->fetch();
            return $resultado;
        } catch (\PDOException $e) {
            echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
            return NULL;

        }
    }
    public function aniadirPedidos($atributos){
        $idUsuario = $atributos[0];
 $fecha = $atributos[1];
 $estado = $atributos[2];
 $totalPrecio = $atributos[3];



 try {
     $consulta = "insert into pedidos(idUsuario, fecha,estado, totalPrecio)
                 values (:idUsuario, :fecha,:estado, :totalPrecio)";

     $sentencia = $this->conn->prepare($consulta);
     $sentencia->bindParam(':idUsuario', $idUsuario);
     $sentencia->bindParam(':fecha', $fecha);
     $sentencia->bindParam(':estado', $estado);
     $sentencia->bindParam(':totalPrecio', $totalPrecio);

     $sentencia->execute();
     return $this->conn->lastInsertId();
 } catch (\PDOException $e) {
     echo '<p> Excepcion' . $e->getMessage() . '</p>';
     echo "<p>" .var_dump($atributos) . "</p>";
     return NULL;
 }  
} 
public function aniadirDetallesPedidos($atributos){
    $idPedido = $atributos[0];
$idProducto = $atributos[1];
$cantidad = $atributos[2];
$precio = $atributos[3];



try {
 $consulta = "insert into detallepedido(idPedido, idProducto,cantidad, precio)
             values (:idPedido, :idProducto,:cantidad, :precio)";

 $sentencia = $this->conn->prepare($consulta);
 $sentencia->bindParam(':idPedido', $idPedido);
 $sentencia->bindParam(':idProducto', $idProducto);
 $sentencia->bindParam(':cantidad', $cantidad);
 $sentencia->bindParam(':precio', $precio);

 return $sentencia->execute();

} catch (\PDOException $e) {
 echo '<p> Excepcion' . $e->getMessage() . '</p>';
 echo "<p>" .var_dump($atributos) . "</p>";
 return NULL;
}  
} 
public function getObtenerIdDelPedido($idUsuario){
    try {
    
        $consulta = "SELECT id 
             FROM pedidos 
             WHERE idUsuario = :idUsuario 
             ORDER BY fecha DESC 
             LIMIT 1";
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