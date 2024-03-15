import { useEffect } from "react"
import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import { useState } from "react"
import Card from "./components/Card/Card";


function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  const handleAddToCart = (product) => {
    // console.log(product);
    const isExit = carts.find(item => item.id == product.id);
    if(!isExit){
      setCarts([...carts,product])
    }else{
      alert("You have already add this product on cart")
    }
  }
  const handleDelete = (id) =>{
    const newCart = carts.filter(item => item.id != id);
    setCarts(newCart);
  }
  return (
    <>
      <Header />
      <main className="container mx-auto px-5 lg:px-10 py-5 lg:py-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-10">
          <Products products={products}
           handleAddToCart={handleAddToCart}
           />
          <div className="flex-1 shadow-lg p-5 bg-slate-100 rounded-lg">
            <h1 className="text-xl lg:text-2xl font-bold text-center py-5 ">Here the Cart items:  </h1>
            <div className="flex justify-around py-2 font-bold text-xl items-center">
                <p>Name</p>
                <p>Price</p>
                <p>Remove</p>
            </div>
            {
              carts.map((item, i) => <Card 
                key={i}
                item={item}
                handleDelete ={handleDelete}
              ></Card>)
            }

          </div>
        </div>
      </main>
    </>
  )
}

export default App
