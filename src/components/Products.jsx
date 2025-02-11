export const Products = ({products}) => {

return <>
    <h1> Nombre del producto: {products.title} </h1>
    <h3> Precio  {products.price}</h3>
    <img src= {products.image} height={200} width={300} alt="" />
    </>
}