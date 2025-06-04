<?php

namespace Larit\Proyecto\Controllers;

use Larit\Proyecto\Models\CategoriaModel;

class CategoriaController
{

    public function obtenerCategorias()
    {
        if (
            !isset($_SERVER['HTTP_ORIGIN']) ||
            $_SERVER['HTTP_ORIGIN'] !== 'http://localhost:4200'
        ) {
            http_response_code(403);
            exit('Origen no autorizado');
        } else {
            $categoriaModel = new CategoriaModel();

            header('Content-Type: application/json');
            echo json_encode($categoriaModel->obtenerCategorias());
        }
    }
}
