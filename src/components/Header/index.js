import { Container } from "./style";

import LogoImg from "../../assets/Logo.svg";

export default function Header() {
  return (
    <Container>
      <img src={LogoImg} alt="Logo" />
    </Container>
  );
}
