const ItemDetail = ({producto}) => {  
return(

    <>
    <h3>{producto?.title}</h3>
    <p>descripcion: {producto?.description} </p>
</>
)

}

export default ItemDetail