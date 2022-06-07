# eCommerce Proyecto React Js (CoderHouse)

> Aplicacion de eCommerce, muestra catalogo de Productos, detalle de Productos y Carrito de compras.

## Tabla de Contenido

- [Descripción](#Descripción)
- []()


## Descripción

Esta app de eCommerce, permite navegar en una lista de productos desde una base de datos de firebase, pudiendo ver la lista general de productos, como las diferentes categorias de los productos, filtrando los productos por categorias. 
Al seleccionar un producto, manda la informacion detallada del mismo, asi como la opcion de agregar el producto al carrito de compras, dando a elegir la cantidad a agregar (No permitiendo agregar mas del stock disponible).

Al agregar el producto al carrito, se despliegan 2 opciones
- **Seguir Comprando:** *Al elegir esta opcion te redirige a la lista de productos, donde puedes seguir agregando productos al carrito.*
- **Ir al Carrito de compras:** *Al elegir esta opcion se te redirige al carrito de compras.*

Dentro del componente del Carrito de compras (**Cart**) se muestra el detalle de todos los productos agregados al carrito de compras, ofreciendo de igual manera varias opciones.

- **Eliminar producto del carrito de compras:** *Elimina el producto que eliges de la lista del carrito de compras.*
- **Vaciar Carrito de Compras:** *Elimina todos los productos del carrito de compras.*
- **Ir al Carrito de compras:** *Al elegir esta opcion se te redirige al carrito de compras.*
- **Terminar Compra** *Genera una nueva coleccion en firebase( **Coleccion: Ordenes** ) con el catalogo de productos que se eligieron comprar.*
(Al elegir esta opcion manda un anuncio confirmando la compra y mostrando el id del pedido)
