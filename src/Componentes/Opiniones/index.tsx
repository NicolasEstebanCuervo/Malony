import styled from '@emotion/styled'
import Portada1 from '../../Imagenes/FotoPersona1.jpg'
import Portada2 from '../../Imagenes/FotoPersona2.jpg'

const Opiniones = () => {
  return (
    <SeccionOpiniones>
      <TituloOpiniones>Que dicen nuestros clientes</TituloOpiniones>
      <ContenedorCards className='container'>
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
  margin-top: 50px;
  padding: 50px 0;
`

const TituloOpiniones = styled.section`
  color: #642a73;
  font-size: 40px;
  text-align: center;
  margin-bottom: 60px;

  @media (max-width: 600px) {
    font-size:10vw;
  }
`

const ContenedorCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const ContenedorCard = styled.div`
  margin:2%;
  background: #4d0686;
  display: flex;
  max-width: 600px;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
`

const ImagenCard = styled.img`
  max-width:100px;
  width: 100%;
  height: 100px;
  object-fit: cover;
  border: 3px solid #fff;
  border-radius: 100%;
  display: block;

  @media (max-width: 1000px) {
    max-width: 120px;
    height: 120px;
  }

  @media (max-width: 500px) {
    max-width: 80px;
    height: 80px;
  }

  @media (max-width: 250px) {
    max-width: 50px;
    height: 50px;
  }

`

const SubContenedorOpiniones = styled.div`
  width: 60%;
  color: #fff;
  font-weight: 300;
  padding-top: 5px;
`

const TituloCard = styled.h1`
  font-size: 2vmax;

  @media (max-width: 1000px) {
    font-size:5vw;
  }

  @media (max-width: 700px) {
    font-size:8vw;
  }

  @media (max-width: 400px) {
    font-size:10vw;
  }
`

const ParrafoCard = styled.p`
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

export default Opiniones;