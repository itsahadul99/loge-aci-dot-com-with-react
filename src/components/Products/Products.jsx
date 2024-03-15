import Product from "../Product/Product";

const Products = ({products}) => {
    console.log(products);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-5">
            {
                products.map(product => <Product
                    product ={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;