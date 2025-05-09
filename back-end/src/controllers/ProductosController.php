<?php
namespace Larit\Proyecto\Controllers;
use Larit\Proyecto\Models\ProductosModel;

class ProductosController{
  
    public function aniadirProductos() {
     
        $nombre = $_POST["nombre"]??"";
        $idCategoria = $_POST["idCategoria"]??"";
      
        $stock = $_POST["stock"]??"";
        $descripcion = $_POST["descripcion"]??"";
        $precio = $_POST["precio"]??"";
        $nombre2= "";

        if (isset($_FILES['foto'])) {
            $nombre2 = time() . "_" . rand(1000000, 9999999) . $_FILES['foto']['name'];
            move_uploaded_file($_FILES['foto']['tmp_name'], __DIR__ . "/../../assets/uploads/{$nombre2}");
        }

       
        $dataRegistros = [
            "status" => false,
            "errores" => []
        ];
        
        if(empty($dataRegistros["errores"])){
            $atributos = array(
              $nombre,
              $idCategoria,
              $stock,
              $nombre2,
              $descripcion,
              $precio
            );

            $incidenciasModel = new ProductosModel();
            $incidenciasModel->aniadirProductos($atributos);
            $dataRegistros["status"] = true;
        }

        header('Content-Type: application/json');
        echo json_encode($dataRegistros); 
    }
    public function getProductosByFruta() {
        $productosModel = new ProductosModel();

        header('Content-Type: application/json');
        echo json_encode($productosModel->getProductosByFruta());
    }
    public function getProductosByVerdura() {
        $productosModel = new ProductosModel();

        header('Content-Type: application/json');
        echo json_encode($productosModel->getProductosByVerdura());
    }
    public function getProductosByFrutaBloqueados() {
        $productosModel = new ProductosModel();

        header('Content-Type: application/json');
        echo json_encode($productosModel->getProductosByFrutaBloqueados());
    }
    public function getProductosByVerduraBloqueados() {
        $productosModel = new ProductosModel();

        header('Content-Type: application/json');
        echo json_encode($productosModel->getProductosByVerduraBloqueados());
    }
    public function getProductos() {
        $productosModel = new ProductosModel();

        header('Content-Type: application/json');
        echo json_encode($productosModel->getProductos());
    }
    public function borrarProductos() {
        $productos = $_GET["id"]??"";
        $productosModel = new ProductosModel();

        header('Content-Type: application/json');
        echo json_encode($productosModel->getBloquear($productos));
    }
    public function getDesbloquear() {
        $productos = $_GET["id"]??"";
        $productosModel = new ProductosModel();

        header('Content-Type: application/json');
        echo json_encode($productosModel->getDesbloquear($productos));
    }
    public function getBorrarProductoEnOtroSitio(){
        $id = $_GET["id"]??"";
        $productosModel =  new ProductosModel();
      $productos = $productosModel->getBorrarProductoEnOtroSitio($id);
      header('Content-Type: application/json');

      if (empty($productos)) {
        echo json_encode(["puedeEliminar" => true]);
    } else {
        echo json_encode(["puedeEliminar" => false, "mensaje" => "No se puede eliminar: el producto está en un carrito o pedido."]);
    }
    }
}
