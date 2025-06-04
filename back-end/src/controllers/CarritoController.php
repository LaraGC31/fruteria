<?php

namespace Larit\Proyecto\Controllers;

use Larit\Proyecto\Models\CarritoModel;

class CarritoController
{

    public function aniadirCarrito()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $idUsuario = $_POST["idUsuario"] ?? "";
            $idProducto = $_POST["idProducto"] ?? "";

            $precio = $_POST["precio"] ?? "";
            $fecha = new \DateTime();
            $fecha = $fecha->format('Y-m-d H:i:s');

            $dataRegistros = [
                "status" => false,
                "errores" => []
            ];

            if (empty($dataRegistros["errores"])) {
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
    }
    public function getProductosCarritoByUsuario()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $idUsuario = $_GET['idUsuario'] ?? "";
            $carritoModel = new CarritoModel();

            header('Content-Type: application/json');
            echo json_encode($carritoModel->getProductosCarritoByUsuario($idUsuario));
        }
    }
    public function getBorrarProductosCarrito()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $idProducto = $_GET['idProducto'] ?? "";
            $carritoModel = new CarritoModel();

            header('Content-Type: application/json');
            echo json_encode($carritoModel->getBorrarProductosCarrito($idProducto));
        }
    }
    public function getBorrarProductosCarritoTodos()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $idUsuario = $_GET['idUsuario'] ?? "";
            $carritoModel = new CarritoModel();

            header('Content-Type: application/json');
            echo json_encode($carritoModel->getBorrarProductosCarritoTodos($idUsuario));
        }
    }
}
