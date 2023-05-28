/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import Portada from "../../Imagenes/Portada.jpg"

const Navegacion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Navbar expand="lg" css={nav} className="container">
        <Navbar.Brand href="#home" css={titulo_navegacion}>¡Bienvenido a Malony!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleClick} />
        <Navbar.Collapse id="basic-navbar-nav" css={navbarCollapseStyles} className={`${isOpen ? "show" : "centrar"}`}>
          <Nav>
            <Nav.Link href="#Sobre mi" css={links}>Inicio</Nav.Link>
            <Nav.Link href="#Conocimientos" css={links}>Nuestro producto</Nav.Link>
            <Nav.Link href="#Estudios" css={links}>Nuestros proyectos</Nav.Link>
            <Nav.Link href="#Mi mejor proyecto" css={links}>Opiniones</Nav.Link>
            <Nav.Link href="#Contacto" css={links}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <SeccionTextosHeader>
        <TituloHeader>Potencia tus ventas al menos un 200%</TituloHeader>
        <SubtituloHeader>Con una pagina web potente</SubtituloHeader>
        <OndaContenedor >
          <Onda viewBox="0 0 500 150" preserveAspectRatio="none">
            <Path d="M0.00,49.98 C142.49,140.63 348.47,-43.89 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></Path>
          </Onda>
        </OndaContenedor>
      </SeccionTextosHeader>

    </Header>
  );
};

export default Navegacion;

const Header = styled.header`
    width: 100%;
    height: 600px;
    background: linear-gradient(to right,hsla(333, 86%, 55%, 0.573),hsla(10, 73%, 52%, 0.573)),url(${Portada});
    background-size: cover;
    background-attachment: fixed;
    position: relative;
`;

const nav = css`
  width: 90%;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;

  @media (max-width: 320px) {
    padding: 2vw;
  }
`;

const navbarCollapseStyles  = css`
  justify-content: end;
`

const titulo_navegacion = css`
  color: #fff;
  
  &:hover {
    color: #FFD4F3;
  }

  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;

const links = css`
  border-bottom: 2px solid transparent; 
  transition: border-color 0.5s ease;
  padding-bottom: 10px;
  color: #fff;
  
  &:hover {
    color: #FFD4F3;
    border-color: #FFADE9;
  }

  &.active {
    color: #fec8f0 !important;
  }

  @media (max-width: 1200px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 3vw;
  }
`;

const SeccionTextosHeader = styled.section`
  display: flex;
  height: 430px;
  width: 100;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const TituloHeader = styled.h1`
  font-size: 50px;
  color: #fff;
`

const SubtituloHeader = styled.h1`
  font-size: 30px;
  color: #fff;
  font-weight: 300;
`

const OndaContenedor = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px; 
  overflow: hidden;
`

const Onda = styled.svg`
  height: 100%; width: 100%;
` 
const Path = styled.path`
  stroke: none; fill: #fff;
`