import styled from '@emotion/styled'
import  Ilustracion from "../../Imagenes/Ilustracion1.svg"

const NuestroProducto = () => {
  return (
    <SectionNuestroProducto>
      <TituloNuestroProducto>Nuestro producto</TituloNuestroProducto>
      <SubContenedorSobreNosotros>
        <ImagenSobreNosotros src={Ilustracion} />
        <ContenedorTextosSobreNosotros>
          <TituloTextoSobreNosotros> <SpanSobreNosotros>1</SpanSobreNosotros> Los mejores productos</TituloTextoSobreNosotros>
          <ParrafoNuestroProducto>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ParrafoNuestroProducto>
          <TituloTextoSobreNosotros> <SpanSobreNosotros>2</SpanSobreNosotros> Los mejores productos</TituloTextoSobreNosotros>
          <ParrafoNuestroProducto>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ParrafoNuestroProducto>
        </ContenedorTextosSobreNosotros>
      </SubContenedorSobreNosotros>
    </SectionNuestroProducto>
  );
};

const SectionNuestroProducto = styled.section`
  margin-top: 50px;
  padding: 50px 0;
`

const TituloNuestroProducto = styled.h1`
  color: #642a73;
  font-size: 40px;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 600px) {
    font-size:10vw;
  }
`
const SubContenedorSobreNosotros = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ImagenSobreNosotros = styled.img`
  max-width: 350px;
  width: 100%;
  margin-right: 20px;

  @media (max-width: 900px) {
    order: 1;
    margin: 20px 0;
  }
`

const ContenedorTextosSobreNosotros = styled.div`
  width: 45%;

  @media (max-width: 900px) {
    width:80%;
  }
`

const TituloTextoSobreNosotros = styled.h1`
  font-size: 25px;
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    font-size:4vw;
  }

  @media (max-width: 700px) {
    font-size:6vw;
  }

  @media (max-width: 400px) {
    font-size:10vw;
  }
`

const ParrafoNuestroProducto = styled.p`
  font-size: 1vmax;

  @media (max-width: 1000px) {
    font-size:2vw;
  }

  @media (max-width: 700px) {
    font-size:3vw;
  }

  @media (max-width: 400px) {
    font-size:5vw;
  }
`

const SpanSobreNosotros = styled.span`
  font-size: 20px;
  background: #4d0686;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  padding: 3px 10px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  margin-right: 5px;
`

export default NuestroProducto;