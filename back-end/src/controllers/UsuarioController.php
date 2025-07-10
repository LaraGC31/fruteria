<?php

namespace Larit\Proyecto\Controllers;

use Larit\Proyecto\Models\UsuarioModel;
use Larit\Proyecto\Helpers\Validaciones;

class UsuarioController
{
    public function login()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $email = trim($_GET["email"]) ?? "";
            $password = $_GET["password"] ?? "";

            $usuarioModel = new UsuarioModel();
            $usuario = $usuarioModel->login($email);

            if ($usuario) {

                if (password_verify($password, $usuario->password)) {
                    $data = array(
                        "id" => $usuario->id,
                        "nombre" => $usuario->nombreApellidos,
                        "rol" => $usuario->rol,
                        "email" => $usuario->email,
                        "provincia" => $usuario->provincia,
                        "direccion" => $usuario->direccion,
                        "codPostal" => $usuario->codPostal,
                        "telefono" => $usuario->telefono,
                        "avatar" => $usuario->avatar,
                    );
                } else {
                    $data = false;
                }
            } else {
                $data = false;
            }

            header('Content-Type: application/json');
            echo json_encode($data);
        }
    }

    public function aniadirUsuario()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $nombre = $_GET["nombre"] ?? "";
            $buscar = ['%C3%A1', '%C3%A9', '%C3%AD', '%C3%B3', '%C3%BA', '%C3%81', '%C3%89', '%C3%8D', '%C3%93', '%C3%9A', '%C3%B1', '%C3%91'];
            $reemplazar = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ñ', 'Ñ'];

            $nombreMod = str_replace($buscar, $reemplazar, $nombre);
            $rol = "CL";
            $email = $_GET["email"] ?? "";
            $password = $_GET["password"] ?? "";
            $telefono = $_GET["telefono"] ?? "";
            $direccion = $_GET["direccion"] ?? "";
            $codPostal = $_GET["codPostal"] ?? "";
            $provincia = $_GET["provincia"] ?? "";
              $nombreAvatarSeleccionado = $_GET['avatar'] ?? "";
$nombreBaseAvatar = basename($nombreAvatarSeleccionado); 


    $nombreFinal = time() . "_" . rand(1000000, 9999999) . $nombreBaseAvatar;
    $rutaOrigen =    dirname(__DIR__, 2)  . "/../src/assets/" . $nombreBaseAvatar;
    $rutaDestino =  dirname(dirname(__DIR__)) .  "/assets/avatar/" . $nombreFinal;
 
  
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
                     if (!file_exists($rutaOrigen)) {
    $dataRegistro["errores"]["avatar"] = "El archivo de avatar no existe en el servidor.";
} elseif (!copy($rutaOrigen, $rutaDestino)) {
    $dataRegistro["errores"]["avatar"] = "No se pudo copiar el avatar al servidor.";
} else {
            
                $passwordSecure =  password_hash($password, PASSWORD_DEFAULT);
                $atributos = array(
                    $nombreMod,
                    $rol,
                    $email,
                    $passwordSecure,
                    $provincia,
                    $direccion,
                    $codPostal,
                    $telefono,
                    $nombreFinal
                );
                $usuarioModel = new UsuarioModel();
                $usuarioModel->aniadirUsuario($atributos);

                $dataRegistro["status"] = true;
            }
        }
            header('Content-Type: application/json');
            echo json_encode($dataRegistro);
        }
    }
    public function datosUsuarios()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $id = $_GET["id"] ?? "";
            $usuarioModel = new UsuarioModel();

            header('Content-Type: application/json');
            echo json_encode($usuarioModel->datosUsuario($id));
        }
    }
    public function modificarUsuario()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $nombre = $_GET["nombre"] ?? "";

            $buscar = ['%C3%A1', '%C3%A9', '%C3%AD', '%C3%B3', '%C3%BA', '%C3%81', '%C3%89', '%C3%8D', '%C3%93', '%C3%9A', '%C3%B1', '%C3%91'];
            $reemplazar = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú', 'ñ', 'Ñ'];


            $nombreMod = str_replace($buscar, $reemplazar, $nombre);
            $password = $_GET["password"] ?? "";
            $passwordSecure = $password !== "" ? password_hash($password, PASSWORD_DEFAULT) : "";
            $id = $_GET["id"] ?? "";
            $email =  $_GET["email"] ?? "";
            $telefono = $_GET["telefono"] ?? "";
            $direccion = $_GET["direccion"] ?? "";
            $codPostal = $_GET["codPostal"] ?? "";
            $provincia = $_GET["provincia"] ?? "";
               $nombreAvatarSeleccionado = $_GET['avatar'] ?? "";
              $avatarActual = $_GET['avatarActual']??"";
                $usuarioModel = new UsuarioModel();

 if ($nombreAvatarSeleccionado != "" && $nombreAvatarSeleccionado != $avatarActual) {
    // Ha seleccionado un nuevo avatar
    $nombreBaseAvatar = basename($nombreAvatarSeleccionado);
    $nombreFinal = time() . "_" . rand(100000, 999999) . "_" . $nombreBaseAvatar;
    
    $rutaOrigen = dirname(__DIR__, 2) . "/../src/assets/" . $nombreBaseAvatar;
    $rutaDestino = dirname(dirname(__DIR__)) . "/assets/avatar/" . $nombreFinal;

    if (!file_exists($rutaOrigen)) {
        $dataRegistro["errores"]['avatar'] = "El archivo de avatar no existe en el servidor.";
    } elseif (!is_file($rutaOrigen)) {
        $dataRegistro["errores"]['avatar'] = "La ruta del avatar no es un archivo válido.";
    } elseif (!copy($rutaOrigen, $rutaDestino)) {
        $dataRegistro["errores"]['avatar'] = "No se pudo copiar el avatar al servidor.";
    } else {
        // Copiado exitoso
        $usuarioModel->modificarUsuario($nombreMod, $email, $passwordSecure, $provincia, $direccion, $codPostal, $telefono, $id, $nombreFinal);
    }
} else {
    // No se seleccionó nuevo avatar → mantener el anterior
    $usuarioModel->modificarUsuario($nombreMod, $email, $passwordSecure, $provincia, $direccion, $codPostal, $telefono, $id, $avatarActual);
}

    }
    }
}
