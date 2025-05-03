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
        
            $consulta = "select count(*) as contador  from pedidos where idUsuario = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':id', $id);
         // $sentencia->setFetchMode(\PDO::FETCH_ASSOC);
            $sentencia->setFetchMode(\PDO::FETCH_OBJ);
            $sentencia->execute();
          
            $resultado = $sentencia->fetch();
           return $resultado->contador;
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
public function getObtenerTodosLosPedidos(){
    try {
    
        $consulta = "select p.id, p.fecha, p.estado, p.totalPrecio, u.nombreApellidos, u.email, u.provincia, u.direccion, u.codPostal, u.telefono,
         GROUP_CONCAT(pr.nombre ORDER BY dp.id) AS productos, 
    GROUP_CONCAT(dp.cantidad ORDER BY dp.id) AS cantidades, 
    GROUP_CONCAT(dp.precio ORDER BY dp.id) AS precios from pedidos p join usuarios u on p.idUsuario = u.id join detallepedido dp on p.id = dp.idPedido join productos pr on dp.idProducto = pr.id GROUP BY p.id,u.id  ORDER BY p.id";
        $sentencia = $this->conn->prepare($consulta);
        $sentencia->setFetchMode(\PDO::FETCH_OBJ);
        $sentencia->execute();
      
        return $sentencia->fetchAll();
        
    } catch (\PDOException $e) {
        echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
        return NULL;

    }
}
public function cambioEstadoPedidos($estado, $id){
    try {
    
        $consulta = "update pedidos set estado = :estado where id = :id";
        $sentencia = $this->conn->prepare($consulta);
        $sentencia->bindParam(':estado', $estado);
        $sentencia->bindParam(':id', $id);
       return $sentencia->execute();
      
    
    } catch (\PDOException $e) {
        echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
        return NULL;

    }
}

public function getObtenerDelUsuario($id){
    try {
    
        $consulta = "select p.id, p.fecha, p.estado, p.totalPrecio, u.nombreApellidos, u.email, u.provincia, u.direccion, u.codPostal, u.telefono,
         GROUP_CONCAT(pr.nombre ORDER BY dp.id) AS productos, 
    GROUP_CONCAT(dp.cantidad ORDER BY dp.id) AS cantidades, 
    GROUP_CONCAT(dp.precio ORDER BY dp.id) AS precios from pedidos p join usuarios u on p.idUsuario = u.id join detallepedido dp on p.id = dp.idPedido join productos pr on dp.idProducto = pr.id where u.id = :id GROUP BY p.id,u.id  ORDER BY p.id ";
        $sentencia = $this->conn->prepare($consulta);
        $sentencia->bindParam(':id', $id);
        $sentencia->setFetchMode(\PDO::FETCH_OBJ);
        $sentencia->execute();
      
        return $sentencia->fetchAll();
        
    } catch (\PDOException $e) {
        echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
        return NULL;

    }
}
}