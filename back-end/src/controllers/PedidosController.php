<?php
namespace Larit\Proyecto\Controllers;

use Larit\Proyecto\Models\PedidosModel;

class PedidosController{
    public function aniadirPedido() {
     
        $idUsuario = $_POST["idUsuario"]??"";
        $estado = "pendiente";
      
        $totalPrecio = $_POST["totalPrecio"]??"";
        $fecha = new \DateTime();
        $fecha = $fecha->format('Y-m-d H:i:s');

        $dataRegistros = [
            "status" => false,
            "errores" => [],
            "idPedido" => null
        ];
        
        if(empty($dataRegistros["errores"])){
            $atributos = array(
              $idUsuario,
              $fecha,
              $estado,
              $totalPrecio
            );

            $pedidoModel = new PedidosModel();
           $idPedido  =  $pedidoModel->aniadirPedidos($atributos);
 
           if($idPedido !== null){
            $dataRegistros["status"] = true;
            $dataRegistros["idPedido"] = $idPedido;
           }else{
            $dataRegistros["errores"][] = "No se pudo insertar el pedido";
           }

        }
        header('Content-Type: application/json');
        echo json_encode($dataRegistros);
    }
    public function aniadirDetallePedido() {
     $idPedido = $_POST["idPedido"]??"";
        $idProducto = $_POST["idProducto"]??"";
      
        $precio = $_POST["precio"]??"";
        $cantidad = $_POST["cantidad"]??"";
      
        $dataRegistros = [
            "status" => false,
            "errores" => []
        ];
        
        if(empty($dataRegistros["errores"])){
            $atributos = array(
              $idPedido,
              $idProducto,
              $cantidad,
              $precio
            );

            $pedidoModel = new PedidosModel();
            $pedidoModel->aniadirDetallesPedidos($atributos);
            $dataRegistros["status"] = true;
        }
        header('Content-Type: application/json');
        echo json_encode($dataRegistros); 
    }
    
public function getOnePedidos(){
    $idUsuario = $_GET["idUsuario"]??"";
    $pedidoModel = new PedidosModel();
    header('Content-Type: application/json');
    echo json_encode($pedidoModel->getOnePedidos($idUsuario)); 
}

public function getObtenerTodosLosPedidos(){
$pedidoModel = new PedidosModel();
    header('Content-Type: application/json');
    echo json_encode($pedidoModel->getObtenerTodosLosPedidos());
}
public function getObtenerDelUsuario(){
    $id = $_GET["id"]??"";
    $pedidoModel = new PedidosModel();
        header('Content-Type: application/json');
        echo json_encode($pedidoModel->getObtenerDelUsuario($id));
    }
public function cambioEstadoPedidos(){
    $id = $_GET["id"]??"";
    $estado = $_GET["estado"]??"";
    $pedidoModel = new PedidosModel();
    $pedidoModel = $pedidoModel->cambioEstadoPedidos($estado, $id);
}
public function borrarPedido(){
    $id = $_GET["id"]??"";
    $pedidoModel = new PedidosModel();
    $pedidoModel = $pedidoModel->borrarPedido($id);
}
}