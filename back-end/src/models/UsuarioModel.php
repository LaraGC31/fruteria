<?php
namespace Larit\Proyecto\Models;
use Larit\Proyecto\Models\Model;


class UsuarioModel extends Model{
    public function __construct(){
        parent::__construct();
        $this->tabla = "usuarios";
    }
    
    public function login($email){
        try{
            $consulta ="select * from usuarios where email = :email";

            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':email', $email);
            $sentencia->execute();
            return   $sentencia->fetch(\PDO::FETCH_OBJ);
        } catch(\PDOException $e){
            return NULL;
        }
    }
    public function datosUsuario($id){
        try{
            $consulta ="select * from usuarios where id = :id";

            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':id', $id);
            $sentencia->execute();
            return   $sentencia->fetch(\PDO::FETCH_OBJ);
        } catch(\PDOException $e){
            return NULL;
        }
    }

    public function aniadirUsuario($atributos){
        $nombre = $atributos[0];
        $rol = $atributos[1];
        $email = $atributos[2];
        $password = $atributos[3];
        $provincia = $atributos[4];
        $direccion = $atributos[5];
        $codPostal = $atributos[6];
        $telefono = $atributos[7];
        try {
            $consulta = "insert into usuarios(nombreApellidos, rol, email, password, provincia, direccion,codPostal, telefono)
                        values (:nombre,:rol, :email, :password,:provincia,:direccion,:codPostal,:telefono)";

            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':nombre', $nombre);
            $sentencia->bindParam(':rol', $rol);
            $sentencia->bindParam(':email', $email);
            $sentencia->bindParam(':password', $password);
            $sentencia->bindParam(':provincia', $provincia);
            $sentencia->bindParam(':direccion', $direccion);
            $sentencia->bindParam
            (':codPostal', $codPostal);
            $sentencia->bindParam
            (':telefono', $telefono);
        

            return $sentencia->execute();

        } catch (\PDOException $e) {
            echo '<p> Excepcion' . $e->getMessage() . '</p>';
            echo "<pre>"; var_dump($atributos); "</pre>";
            return NULL;
        }  

    }
    public function modificarUsuario($nombre, $email, $password, $provincia, $direccion,$codPostal,$telefono, $id){
        try{
            if($password == ''){
            $consulta ="update usuarios set nombreApellidos = :nombre, email = :email, provincia = :provincia, direccion = :direccion, codPostal = :codPostal, telefono = :telefono where id = :id";

            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':id', $id);
            $sentencia->bindParam(':nombre', $nombre);
            $sentencia->bindParam(':email', $email);
            $sentencia->bindParam(':provincia', $provincia);
            $sentencia->bindParam(':direccion', $direccion);
            $sentencia->bindParam(':codPostal', $codPostal);
            $sentencia->bindParam(':telefono', $telefono);


            return $sentencia->execute();
            }else{
                $consulta ="update usuarios set nombreApellidos = :nombre, email = :email, password = :password, provincia = :provincia, direccion = :direccion, codPostal = :codPostal, telefono = :telefono where id = :id";

                $sentencia = $this->conn->prepare($consulta);
                $sentencia->bindParam(':id', $id);
                $sentencia->bindParam(':nombre', $nombre);
                $sentencia->bindParam(':email', $email);
                $sentencia->bindParam(':password', $password);
                $sentencia->bindParam(':provincia', $provincia);
            $sentencia->bindParam(':direccion', $direccion);
            $sentencia->bindParam(':codPostal', $codPostal);
            $sentencia->bindParam(':telefono', $telefono);
    
              return  $sentencia->execute();
            }
        } catch(\PDOException $e){
            return NULL;
        }
    }
}
