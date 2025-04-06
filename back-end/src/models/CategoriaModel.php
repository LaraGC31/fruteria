<?php
namespace Larit\Proyecto\Models;
use Larit\Proyecto\Models\Model;


class CategoriaModel extends Model{
    public function __construct(){
        parent::__construct();
        $this->tabla = "categorias";
    }
    public function obtenerCategorias(){
        try {
        
            $consulta = "select * from  categorias";
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