import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    
    return (
        <>
        <div className="container mt-5 text-center">
          <h3>
            ¡ Bienvenido al catalogo de {props.name} !
          </h3>
        </div>
        <ItemCount />
        </>
)
}
export default ItemListContainer;