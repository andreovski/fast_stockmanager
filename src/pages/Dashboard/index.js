import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Table from "../../components/ProductsTable";

import { Container, HeadContent, PlusIcon, Content } from "./style";

export default function Dashboard() {
  return (
    <>
      <Header />

      <Container>
        <HeadContent>
          <p>Produtos</p>
          <Link className="link" to="/addproduct">
            <button type="button">
              <PlusIcon />
              <span>Novo</span>
            </button>
          </Link>
        </HeadContent>

        <Content>
          <Table />
        </Content>
      </Container>
    </>
  );
}
