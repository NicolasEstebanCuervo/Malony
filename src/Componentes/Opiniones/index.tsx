import styled from '@emotion/styled'
import Portada1 from '../../Imagenes/FotoPersona1.jpg'
import Portada2 from '../../Imagenes/FotoPersona2.jpg'

const Opiniones = () => {
  return (
    <SeccionOpiniones>
      <TituloOpiniones>Que dicen nuestros clientes</TituloOpiniones>
      <ContenedorCards>
        <ContenedorCard> 
          <ImagenCard  src={Portada1}/>
          <SubContenedorOpiniones>
            <TituloCard>
              Name
            </TituloCard>
            <ParrafoCard>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestias perspiciatis, libero natus culpa et suscipit vero! Ipsa at animi vero velit, eveniet quas qui praesentium iure tenetur modi distinctio.
            </ParrafoCard>
          </SubContenedorOpiniones>
        </ContenedorCard>

        <ContenedorCard> 
          <ImagenCard  src={Portada2}/>
          <SubContenedorOpiniones>
            <TituloCard>
              Name
            </TituloCard>
            <ParrafoCard>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla molestias perspiciatis, libero natus culpa et suscipit vero! Ipsa at animi vero velit, eveniet quas qui praesentium iure tenetur modi distinctio.
            </ParrafoCard>
          </SubContenedorOpiniones>
        </ContenedorCard>
      </ContenedorCards>
    </SeccionOpiniones>
  );
};

const SeccionOpiniones = styled.section`
  padding: 50px;
`

const TituloOpiniones = styled.section`
  color: #642a73;
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;
`

const ContenedorCards = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const ContenedorCard = styled.div`
  background: #4d0686;
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
`

const ImagenCard = styled.img`
  width: 20%;
  height: 100px;
  object-fit: cover;
  border: 3px solid #fff;
  border-radius: 100%;
  display: block;
`

const SubContenedorOpiniones = styled.div`
  width: 60%;
  color: #fff;
  font-weight: 300;
  padding-top: 5px;
`

const TituloCard = styled.h1`
`

const ParrafoCard = styled.p`

`

export default Opiniones;