import { useEffect } from "react"
import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import { useState } from "react"
import Card from "./components/Card/Card";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  return (
    <>
      <Header />
      <main className="container mx-auto px-5 lg:px-10 py-5 lg:py-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-10">
          <Products products={products} />
          <Card/>
        </div>
      </main>
    </>
  )
}

export default App
