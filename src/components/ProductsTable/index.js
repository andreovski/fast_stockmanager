import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/useProductList";

import EmptyListImage from "../../assets/emptyStockList.svg";
import { Table, ResponsiveTable, TrashIcon, EditIcon, SvgImage } from "./style";

export default function ContentTable() {
  const { products, handleRemoveProduct } = useProduct();

  function valueFormat(value) {
    const newValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

    return newValue;
  }

  console.log(products);

  return (
    <>
      <ResponsiveTable>
        <Table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">NOME</th>
              <th scope="col">DESCRIÇÃO</th>
              <th scope="col">CATEGORIA</th>
              <th scope="col">VALOR</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.name}>
                <td>
                  <img src={product.image} alt="Imagem" />
                </td>
                <td data-label="Nome">
                  <p>{product.name}</p>
                </td>
                <td data-label="Descrição">
                  <p>{product.description}</p>
                </td>
                <td data-label="Categoria" className="tagsTable">
                  <div className="separetor">
                    {product.category.slice([0], [2]).map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                </td>
                <td data-label="Valor">
                  <p>{valueFormat(product.value)}</p>
                </td>
                <td>
                  <Link to={`/editproduct/${product.id}`}>
                    <button type="button">
                      <EditIcon />
                    </button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ResponsiveTable>

      {products <= 0 && (
        <SvgImage>
          <img src={EmptyListImage} alt="Lista vazia" />
          <p>Por aqui está tudo limpo!</p>
        </SvgImage>
      )}
    </>
  );
}
