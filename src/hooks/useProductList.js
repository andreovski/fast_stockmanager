import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import api from "../service/api";

export const ProductsContext = createContext({});

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const response = async () => {
      await api.get("/products").then((res) => setProducts(res.data));
    };

    response();
  }, []);

  const handleAddProduct = useCallback(async (productData) => {
    try {
      const response = await api.post("/products", {
        id: uuidv4(),
        ...productData,
      });

      const product = response.data;

      setProducts([...products, product]);
    } catch {
      alert("Não foi possivel adicionar o produto.");
    }
  }, []);

  const handleUpdateProduct = useCallback(async (values) => {
    try {
      const getProducts = [...products];
      const updatedProduct = getProducts.filter(
        (product) => product.id !== values.id
      );

      updatedProduct.push(values);

      await api.put(`/products/${values.id}`, {
        ...values,
      });
      setProducts(updatedProduct);
    } catch {
      alert("erro ao adicionar o produto");
      history.push("/");
    }
  }, []);

  const handleRemoveProduct = useCallback(async (id) => {
    try {
      const newProductsData = products.filter((product) => product.id !== id);

      await api.delete(`/products/${id}`);
      setProducts(newProductsData);
    } catch {
      alert("Erro ao deletar produto!");
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        handleAddProduct,
        handleRemoveProduct,
        handleUpdateProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductsContext);

  return context;
}
