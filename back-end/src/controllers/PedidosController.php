<?php

namespace Larit\Proyecto\Controllers;

use Larit\Proyecto\Models\PedidosModel;

class PedidosController
{
    public function aniadirPedido()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $idUsuario = $_POST["idUsuario"] ?? "";
            $estado = "pendiente";

            $totalPrecio = $_POST["totalPrecio"] ?? "";
            $fecha = new \DateTime();
            $fecha = $fecha->format('Y-m-d H:i:s');

            $dataRegistros = [
                "status" => false,
                "errores" => [],
                "idPedido" => null
            ];

            if (empty($dataRegistros["errores"])) {
                $atributos = array(
                    $idUsuario,
                    $fecha,
                    $estado,
                    $totalPrecio
                );

                $pedidoModel = new PedidosModel();
                $idPedido  =  $pedidoModel->aniadirPedidos($atributos);

                if ($idPedido !== null) {
                    $dataRegistros["status"] = true;
                    $dataRegistros["idPedido"] = $idPedido;
                } else {
                    $dataRegistros["errores"][] = "No se pudo insertar el pedido";
                }
            }
            header('Content-Type: application/json');
            echo json_encode($dataRegistros);
        }
    }
    public function aniadirDetallePedido()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $idPedido = $_POST["idPedido"] ?? "";
            $idProducto = $_POST["idProducto"] ?? "";

            $precio = $_POST["precio"] ?? "";
            $cantidad = $_POST["cantidad"] ?? "";

            $dataRegistros = [
                "status" => false,
                "errores" => []
            ];

            if (empty($dataRegistros["errores"])) {
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

    public function getOnePedidos()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $idUsuario = $_GET["idUsuario"] ?? "";
            $pedidoModel = new PedidosModel();
            header('Content-Type: application/json');
            echo json_encode($pedidoModel->getOnePedidos($idUsuario));
        }
    }

    public function getObtenerTodosLosPedidos()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $pedidoModel = new PedidosModel();
            header('Content-Type: application/json');
            echo json_encode($pedidoModel->getObtenerTodosLosPedidos());
        }
    }
    public function getObtenerDelUsuario()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $id = $_GET["id"] ?? "";
            $pedidoModel = new PedidosModel();
            header('Content-Type: application/json');
            echo json_encode($pedidoModel->getObtenerDelUsuario($id));
        }
    }
    public function cambioEstadoPedidos()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $id = $_GET["id"] ?? "";
            $estado = $_GET["estado"] ?? "";
            $pedidoModel = new PedidosModel();
            $pedidoModel = $pedidoModel->cambioEstadoPedidos($estado, $id);
        }
    }
    public function borrarPedido()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $id = $_GET["id"] ?? "";
            $pedidoModel = new PedidosModel();
            $pedidoModel = $pedidoModel->borrarPedido($id);
        }
    }
}
