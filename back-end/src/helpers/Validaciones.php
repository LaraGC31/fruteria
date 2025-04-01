<?php
namespace Larit\Proyecto\Helpers;
use Larit\Proyecto\Config\Parameters;
class Validaciones {
        public static function validateName($nombre):bool{
     
            return (!empty($nombre) && preg_match("/^[a-zñáéíóú]+([ ][a-zñáéíóú]+)*$/", mb_strtolower($nombre, 'UTF-8')));
        
        }

        public static function validateEmail($email):bool{
            return (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL));
        }

        public static function validateFormatPassword($password):bool{
            return (!empty($password)
                 && strlen($password) >= Parameters::$PASSWORD_MIN_LENGTH)
                 && preg_match("/[A-Z]/", $password) 
                 && preg_match("/[a-z]/", $password) 
                 && preg_match("/[0-9]/", $password) 
                 && preg_match("/[^a-zA-Z0-9]/", $password);
        }
       public static function validarCodigoPostal($codPostal) {
            return (!empty($codPostal) && preg_match("/^[0-9]{5}$/", $codPostal));
        }
        public static function validateTelefono($telefono): bool{
            return (!empty($telefono) && preg_match("/^[0-9]{9}/", $telefono));
    
    
        }
    }

?>