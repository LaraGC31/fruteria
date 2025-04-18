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
            "errores" => []
        ];
        
        if(empty($dataRegistros["errores"])){
            $atributos = array(
              $idUsuario,
              $fecha,
              $estado,
              $totalPrecio
            );

            $pedidoModel = new PedidosModel();
            $pedidoModel->aniadirPedidos($atributos);
            $dataRegistros["status"] = true;
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
    




}