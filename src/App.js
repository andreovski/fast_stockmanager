import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./hooks/useProductList";
import Routes from "./routes";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ProductsProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
