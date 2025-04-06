<?php
namespace Larit\Proyecto\Controllers;

use Larit\Proyecto\Models\CategoriaModel;

class CategoriaController{
  
    public function obtenerCategorias() {
        $categoriaModel = new CategoriaModel();

        header('Content-Type: application/json');
        echo json_encode($categoriaModel->obtenerCategorias());
    }
}
