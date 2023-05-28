import styled from '@emotion/styled'
import  Ilustracion from "../../Imagenes/Ilustracion1.svg"

const NuestroProducto = () => {
  return (
    <section>
      <TituloNuestroProducto>Nuestro producto</TituloNuestroProducto>
      <SubContenedorSobreNosotros>
        <ImagenSobreNosotros src={Ilustracion} />
        <ContenedorTextosSobreNosotros>
          <TituloTextoSobreNosotros> <SpanSobreNosotros>1</SpanSobreNosotros> Los mejores productos</TituloTextoSobreNosotros>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <TituloTextoSobreNosotros> <SpanSobreNosotros>2</SpanSobreNosotros> Los mejores productos</TituloTextoSobreNosotros>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </ContenedorTextosSobreNosotros>
      </SubContenedorSobreNosotros>
    </section>
  );
};

const TituloNuestroProducto = styled.h1`
  color: #642a73;
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;
`
const SubContenedorSobreNosotros = styled.div`
  display: flex;
  justify-content: space-around;
`

const ImagenSobreNosotros = styled.img`
  width: 400px;
  position: relative;
  left: 160px;
  top: 0px;
`

const ContenedorTextosSobreNosotros = styled.div`
  width: 45%;
`

const TituloTextoSobreNosotros = styled.h1`
  font-size: 25px;
  display: flex;
  align-items: center;
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