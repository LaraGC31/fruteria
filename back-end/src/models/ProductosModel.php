<?php
namespace Larit\Proyecto\Models;
use Larit\Proyecto\Models\Model;


class ProductosModel extends Model{
    public function __construct(){
        parent::__construct();
        $this->tabla = "productos";
    }
   


    public function aniadirProductos($atributos){
               $nombre = $atributos[0];
        $idCategoria = $atributos[1];
        $stock = $atributos[2];
        $foto = $atributos[3];
        $descripcion = $atributos[4];
        $precio = $atributos[5];
       

        try {
            $consulta = "insert into productos(nombre, idCategoria,stock, foto, descripcion, precio)
                        values (:nombre, :idCategoria,:stock, :foto, :descripcion, :precio)";

            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':nombre', $nombre);
            $sentencia->bindParam(':idCategoria', $idCategoria);
            $sentencia->bindParam(':stock', $stock);
            $sentencia->bindParam(':foto', $foto);
            $sentencia->bindParam(':descripcion', $descripcion);
            $sentencia->bindParam(':precio', $precio);


            return $sentencia->execute();

        } catch (\PDOException $e) {
            echo '<p> Excepcion' . $e->getMessage() . '</p>';
            echo "<p>" .var_dump($atributos) . "</p>";
            return NULL;
        }  
    }
    public function getProductosByFruta(){
        try {
        
            $consulta = "select e.* from productos e join categorias i on e.idCategoria = i.id where i.nombre = 'fruta'";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->setFetchMode(\PDO::FETCH_OBJ);
            $sentencia->execute();
          
            $resultado = $sentencia->fetchAll();
            return $resultado;
        } catch (\PDOException $e) {
            echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
            return NULL;

        }
    }
    public function getProductosByVerdura(){
        try {
        
            $consulta = "select e.* from productos e join categorias i on e.idCategoria = i.id where i.nombre = 'verdura'";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->setFetchMode(\PDO::FETCH_OBJ);
            $sentencia->execute();
          
            $resultado = $sentencia->fetchAll();
            return $resultado;
        } catch (\PDOException $e) {
            echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
            return NULL;

        }
    }
}
