<?php
namespace Larit\Proyecto\Controllers;

use Larit\Proyecto\Models\CarritoModel;

class CarritoController{
  
    public function aniadirCarrito() {
     
        $idUsuario = $_POST["idUsuario"]??"";
        $idProducto = $_POST["idProducto"]??"";
      
        $precio = $_POST["precio"]??"";
        $fecha = new \DateTime();
        $fecha = $fecha->format('Y-m-d H:i:s');

        $dataRegistros = [
            "status" => false,
            "errores" => []
        ];
        
        if(empty($dataRegistros["errores"])){
            $atributos = array(
              $idUsuario,
              $idProducto,
              $precio,
              $fecha
            );

            $carritoModel = new CarritoModel();
            $carritoModel->aniadirCarrito($atributos);
            $dataRegistros["status"] = true;
        }
        header('Content-Type: application/json');
        echo json_encode($dataRegistros); 
    }
    public function getProductosCarritoByUsuario() {
        $idUsuario = $_GET['idUsuario']??"";
        $carritoModel = new CarritoModel();

        header('Content-Type: application/json');
        echo json_encode($carritoModel->getProductosCarritoByUsuario($idUsuario));
    }
    public function getBorrarProductosCarrito() {
        $idProducto = $_GET['idProducto']??"";
        $carritoModel = new CarritoModel();

        header('Content-Type: application/json');
        echo json_encode($carritoModel->getBorrarProductosCarrito($idProducto));
    }
   public function getBorrarProductosCarritoTodos() {
        $idUsuario = $_GET['idUsuario']??"";
        $carritoModel = new CarritoModel();

        header('Content-Type: application/json');
        echo json_encode($carritoModel->getBorrarProductosCarritoTodos($idUsuario));
    }
}
