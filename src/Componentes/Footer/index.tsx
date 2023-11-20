import styled from '@emotion/styled';

const Footer = () => {
  return (
    <ContenedorFooter id="Contacto">
      <div className="container">
        <ContenedorSecciones>
          <ContenedorSeccion>
            <TituloSeccionFooter>Políticas de privacidad</TituloSeccionFooter>
            <ListaFooter>
              <LiFooter><LinkFooter href="#">Política de cookies</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Términos y condiciones</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Aviso legal</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Protección de datos</LinkFooter></LiFooter>
            </ListaFooter>
          </ContenedorSeccion>

          <ContenedorSeccion>
            <TituloSeccionFooter>Actividad</TituloSeccionFooter>
            <ListaFooter>
              <LiFooter><LinkFooter href="#">Últimas noticias</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Eventos próximos</LinkFooter></LiFooter>
            </ListaFooter>
          </ContenedorSeccion>

          <ContenedorSeccion>
            <TituloSeccionFooter>Acerca de</TituloSeccionFooter>
            <ListaFooter>
              <LiFooter><LinkFooter href="#">Equipo de trabajo</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Historia de la empresa</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Misión y visión</LinkFooter></LiFooter>
            </ListaFooter>
          </ContenedorSeccion>

          <ContenedorRedes>
            <TituloRedes>Contactanos</TituloRedes>
            <ContenedorRed>
              <IconoFooter className="bi bi-facebook"></IconoFooter><TextoRed>Nuestro Facebook</TextoRed>
            </ContenedorRed>
            <ContenedorRed>
              <IconoFooter className="bi bi-instagram"></IconoFooter><TextoRed>Nuestro Instagram</TextoRed> 
            </ContenedorRed>
            <ContenedorRed>
              <IconoFooter className="bi bi-linkedin"></IconoFooter><TextoRed>Nuestro Linkedin</TextoRed>
            </ContenedorRed>        
          </ContenedorRedes>
        </ContenedorSecciones>
      </div>
    </ContenedorFooter>
  );
};

export default Footer;

const ContenedorFooter = styled.footer`
  margin-top: 50px;
  padding: 30px 0;
  background: #f2f2f2;
`;

const ContenedorSecciones = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2,1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const ContenedorSeccion = styled.div`
`

const TituloSeccionFooter = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;

  @media (max-width: 300px) {
    font-size: 10vw;
  }
`;

const ListaFooter = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const LiFooter = styled.li`
  list-style: none;
  display: flex;

  @media (max-width: 300px) {
    font-size: 8vw;
  }
`;

const LinkFooter = styled.a`
  margin-bottom: 10px;
  color: #510a5f;
  transition: color 0.3s;

  &:hover {
    color: #a4c0f7;
  }
`;

const ContenedorRedes = styled.div`
  display: flex;
  flex-direction: column;
`

const TituloRedes = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;

  @media (max-width: 300px) {
    font-size: 10vw;
  }
`

const ContenedorRed = styled.div`
  display: flex;
  align-items: end;
`

const IconoFooter = styled.i`
  font-size: 25px;
  margin: 1%;

  @media (max-width: 300px) {
    font-size: 13vw;
  }
`

const TextoRed = styled.h1`
  font-size: 20px;

  @media (max-width: 300px) {
    font-size: 8vw;
  }
`