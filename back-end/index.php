<?php
require_once 'vendor/autoload.php';
session_start();

use Larit\Proyecto\Config\Parameters;

// CONTROLADOR FRONTAL:
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials:true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

   $nameController = "Larit\\Proyecto\\Controllers\\";
    $nameController = $nameController . (($_GET["controller"]) ?? Parameters::$CONTROLLER_DEFAULT) . "Controller";
    $action = $_GET["action"] ?? Parameters::$ACTION_DEFAULT;
    
    if(class_exists($nameController)){
      $controller = new $nameController();
      if(method_exists($controller, $action)){
        $controller->$action();
      }
    }

    

  ?>
