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
        $avatar = $atributos[8];
        try {
            $consulta = "insert into usuarios(nombreApellidos, rol, email, password, provincia, direccion,codPostal, telefono,avatar )
                        values (:nombre,:rol, :email, :password,:provincia,:direccion,:codPostal,:telefono,:avatar)";

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
            $sentencia->bindParam(':avatar', $avatar);

            return $sentencia->execute();

        } catch (\PDOException $e) {
            echo '<p> Excepcion' . $e->getMessage() . '</p>';
            echo "<pre>"; var_dump($atributos); "</pre>";
            return NULL;
        }  

    }
    public function modificarUsuario($nombre, $email, $password, $provincia, $direccion,$codPostal,$telefono, $id, $avatar){
        try{
           if ($password == '' && $avatar == '') {
            $consulta = "UPDATE usuarios SET nombreApellidos = :nombre, email = :email, provincia = :provincia, direccion = :direccion, codPostal = :codPostal, telefono = :telefono WHERE id = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':nombre', $nombre);
            $sentencia->bindParam(':email', $email);
            $sentencia->bindParam(':provincia', $provincia);
            $sentencia->bindParam(':direccion', $direccion);
            $sentencia->bindParam(':codPostal', $codPostal);
            $sentencia->bindParam(':telefono', $telefono);
            $sentencia->bindParam(':id', $id);
        }

        // 2. Con password, sin avatar
        else if ($password != '' && $avatar == '') {
            $consulta = "UPDATE usuarios SET nombreApellidos = :nombre, email = :email, password = :password, provincia = :provincia, direccion = :direccion, codPostal = :codPostal, telefono = :telefono WHERE id = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':nombre', $nombre);
            $sentencia->bindParam(':email', $email);
            $sentencia->bindParam(':password', $password);
            $sentencia->bindParam(':provincia', $provincia);
            $sentencia->bindParam(':direccion', $direccion);
            $sentencia->bindParam(':codPostal', $codPostal);
            $sentencia->bindParam(':telefono', $telefono);
            $sentencia->bindParam(':id', $id);
        }

        // 3. Sin password, con avatar
        else if ($password == '' && $avatar != '') {
            $consulta = "UPDATE usuarios SET nombreApellidos = :nombre, email = :email, provincia = :provincia, direccion = :direccion, codPostal = :codPostal, telefono = :telefono, avatar = :avatar WHERE id = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':nombre', $nombre);
            $sentencia->bindParam(':email', $email);
            $sentencia->bindParam(':provincia', $provincia);
            $sentencia->bindParam(':direccion', $direccion);
            $sentencia->bindParam(':codPostal', $codPostal);
            $sentencia->bindParam(':telefono', $telefono);
            $sentencia->bindParam(':avatar', $avatar);
            $sentencia->bindParam(':id', $id);
        }

        // 4. Con password y avatar
        else if ($password != '' && $avatar != '') {
            $consulta = "UPDATE usuarios SET nombreApellidos = :nombre, email = :email, password = :password, provincia = :provincia, direccion = :direccion, codPostal = :codPostal, telefono = :telefono, avatar = :avatar WHERE id = :id";
            $sentencia = $this->conn->prepare($consulta);
            $sentencia->bindParam(':nombre', $nombre);
            $sentencia->bindParam(':email', $email);
            $sentencia->bindParam(':password', $password);
            $sentencia->bindParam(':provincia', $provincia);
            $sentencia->bindParam(':direccion', $direccion);
            $sentencia->bindParam(':codPostal', $codPostal);
            $sentencia->bindParam(':telefono', $telefono);
            $sentencia->bindParam(':avatar', $avatar);
            $sentencia->bindParam(':id', $id);
        }

        return $sentencia->execute();
    } catch (\PDOException $e) {
        return NULL;
    }
    }
}
