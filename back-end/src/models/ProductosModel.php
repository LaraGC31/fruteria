<?php

namespace Larit\Proyecto\Models;

use Larit\Proyecto\Models\Model;


class ProductosModel extends Model
{
    public function __construct()
    {
        parent::__construct();
        $this->tabla = "productos";
    }



    public function aniadirProductos($atributos)
    {
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
            echo "<p>" . var_dump($atributos) . "</p>";
            return NULL;
        }
    }
    public function getProductosByFruta()
    {
        try {

            $consulta = "select e.* from productos e join categorias i on e.idCategoria = i.id where i.nombre = 'fruta' and e.stock = 1";
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
    public function getProductosByVerdura()
    {
        try {

            $consulta = "select e.* from productos e join categorias i on e.idCategoria = i.id where i.nombre = 'verdura' and e.stock = 1 ";
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
    public function getProductosByFrutaBloqueados()
    {
        try {

            $consulta = "select e.* from productos e join categorias i on e.idCategoria = i.id where i.nombre = 'fruta' and e.stock = 0";
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
    public function getProductosByVerduraBloqueados()
    {
        try {

            $consulta = "select e.* from productos e join categorias i on e.idCategoria = i.id where i.nombre = 'verdura' and e.stock = 0 ";
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
    public function getBorrarProductoEnOtroSitio($id)
    {
        try {

            $consulta = "SELECT p.id AS producto_id
FROM productos p
LEFT JOIN carrito c ON p.id = c.idProducto
WHERE p.id = :id AND c.idProducto IS NOT NULL
";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':id', $id);

            $sentencia->setFetchMode(\PDO::FETCH_OBJ);
            $sentencia->execute();

            $resultado = $sentencia->fetchAll();
            return $resultado;
        } catch (\PDOException $e) {
            echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
            return NULL;
        }
    }
    public function getProductos()
    {
        try {

            $consulta = "select * from productos";
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
    public function getBloquear($id)
    {
        try {

            $consulta = "update productos set stock = 0 where id = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':id', $id);


            return $sentencia->execute();
        } catch (\PDOException $e) {
            echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
            return NULL;
        }
    }
    public function getDesbloquear($id)
    {
        try {

            $consulta = "update productos set stock = 1 where id = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':id', $id);


            return $sentencia->execute();
        } catch (\PDOException $e) {
            echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
            return NULL;
        }
    }
    public function getNombreProductosFruta()
    {
        try {

            $consulta = "select p.nombre from productos p 
            join categorias c on p.idCategoria = c.id
             where c.nombre = 'fruta'";
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
    public function getNombreProductosVerdura()
    {
        try {

            $consulta = "select p.nombre from productos p join categorias c on p.idCategoria = c.id where c.nombre = 'verdura'";
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
    public function getObtenerProductosByNombre($nombre)
    {
        try {

            $consulta = "select * from productos where nombre = :nombre";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':nombre', $nombre);

            $sentencia->setFetchMode(\PDO::FETCH_OBJ);
            $sentencia->execute();

            $resultado = $sentencia->fetchAll();
            return $resultado;
        } catch (\PDOException $e) {
            echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
            return NULL;
        }
    }
    public function getModificarProductos($id,$nombre, $descripcion, $precio)
    {
        try {
            $consulta = "update productos set nombre =  :nombre, descripcion=:descripcion, precio = :precio where id = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':id', $id);
            $sentencia->bindParam(':nombre', $nombre);
            $sentencia->bindParam(':descripcion', $descripcion);
            $sentencia->bindParam(':precio', $precio);
            return $sentencia->execute();    
            
        } catch (\PDOException $e) {
            echo '<p>Fallo en la conexion:' . $e->getMessage() . '</p>';
            return NULL;
        }
    }
}
