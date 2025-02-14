export const Products = ({products, buyProduct}) => {

return <div className="row">
    {products.map((element,index)=>{
        return <div className="col-4" key={index}>
            <h4>{element.title} </h4>
            <img src= {element.image} height={200} width={200} alt="" />
            <h3> Precio: ${element.price}</h3>
            <button onClick={()=>{buyProduct(element)}}>Comprar</button>
            </div>

    })}
    
    </div>
}