<?php
namespace Larit\Proyecto\Controllers;
use Larit\Proyecto\Models\UsuarioModel;
use Larit\Proyecto\Helpers\Validaciones;

class UsuarioController{
    public function login(){
       
        $email = trim($_GET["email"])??"";
        $password = $_GET["password"]??"";
        
        $usuarioModel = new UsuarioModel();
        $usuario = $usuarioModel->login($email);
        
        if ($usuario) {
            
          if(password_verify($password, $usuario->password)){
            $data = array(
                "id" => $usuario->id,
                "nombre" => $usuario->nombreApellidos,
                "rol" => $usuario->rol,
                "email" => $usuario->email,
                "provincia" => $usuario->provincia,
                "direccion" => $usuario->direccion,
                "codPostal" => $usuario->codPostal,
                "telefono" => $usuario->telefono,
            );
            
        }else{
            $data = false;
        }
        } else {
            $data = false;
        }
        
        header('Content-Type: application/json');
        echo json_encode($data); 
    }

    public function aniadirUsuario() {
        $nombre = $_GET["nombre"]??"";
        $buscar = ['%C3%A1', '%C3%A9', '%C3%AD', '%C3%B3', '%C3%BA', '%C3%81', '%C3%89', '%C3%8D', '%C3%93', '%C3%9A', '%C3%B1', '%C3%91'];
        $reemplazar = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ñ', 'Ñ'];
        
        $nombreMod = str_replace($buscar, $reemplazar, $nombre);
        $rol = "CL";
        $email = $_GET["email"]??"";
        $password = $_GET["password"]??"";
        $telefono = $_GET["telefono"]??"";
        $direccion = $_GET["direccion"]??"";
        $codPostal = $_GET["codPostal"]??"";
        $provincia = $_GET["provincia"]??"";

        $dataRegistro = [
            "status" => false,
            "errores" => []
        ];
        if (!Validaciones::validateName($_GET['nombre'])) $dataRegistro["errores"]['nombre'] = "Formato nombre no válido";
        
        if (!Validaciones::validateEmail($_GET['email'])) $dataRegistro["errores"]['email'] = "Formato email no válido";
        if (!Validaciones::validateFormatPassword($_GET['password'])) $dataRegistro["errores"]['password'] = "Formato contraseña no válido";
                if (!Validaciones::validarCodigoPostal($_GET['codPostal'])) $dataRegistro["errores"]['codPostal'] = "Formato codPostal no válido";
                if (!Validaciones::validateTelefono($_GET['telefono'])) $dataRegistro["errores"]['telefono'] = "Formato telefono no válido";
        if (empty($dataRegistro["errores"])) {
            $passwordSecure =  password_hash($password,PASSWORD_DEFAULT);
            $atributos = array(
                $nombreMod,
                $rol,
                $email,
                $passwordSecure,
                $provincia,
                $direccion,
                $codPostal,
              $telefono
            );
            $usuarioModel = new UsuarioModel();
            $usuarioModel->aniadirUsuario($atributos);

            $dataRegistro["status"] = true;
        }
        header('Content-Type: application/json');
        echo json_encode($dataRegistro); 
    }
    public function datosUsuarios() {
        $id = $_GET["id"]??"";
        $usuarioModel = new UsuarioModel();

        header('Content-Type: application/json');
        echo json_encode($usuarioModel->datosUsuario($id));
    }
    public function modificarUsuario(){
        $nombre = $_GET["nombre"]??"";

        $buscar = ['%C3%A1', '%C3%A9', '%C3%AD', '%C3%B3', '%C3%BA', '%C3%81', '%C3%89', '%C3%8D', '%C3%93', '%C3%9A', '%C3%B1', '%C3%91'];
        $reemplazar = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ñ', 'Ñ'];
        

        $nombreMod = str_replace($buscar, $reemplazar, $nombre);
        $password = $_GET["password"]??"";
        $passwordSecure = $password !== "" ? password_hash($password,PASSWORD_DEFAULT): "";
        $id = $_GET["id"]??"";
    $email =  $_GET["email"]??"";
    $telefono = $_GET["telefono"]??"";
    $direccion = $_GET["direccion"]??"";
    $codPostal = $_GET["codPostal"]??"";
    $provincia = $_GET["provincia"]??"";
  $usuarioModel = new UsuarioModel();
  $usuarioModel->modificarUsuario($nombreMod,$email, $passwordSecure, $provincia, $direccion,$codPostal, $telefono, $id);
       
    }
}
