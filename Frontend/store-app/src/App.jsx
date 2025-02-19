import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Store Products</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 w-64 bg-white"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold truncate">{product.title}</h3>
            <p className="text-gray-600 font-medium">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
