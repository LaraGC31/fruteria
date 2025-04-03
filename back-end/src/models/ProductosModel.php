<?php
namespace Larit\Proyecto\Models;
use Larit\Proyecto\Models;


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
            
            return NULL;
        }  
    }

}
