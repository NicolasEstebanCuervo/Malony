import styled from '@emotion/styled';

const Footer = () => {
  return (
    <ContenedorFooter>
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
  background-color: #f8f9fa;
  padding: 30px 0;
`;

const ContenedorSecciones = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
`

const ContenedorSeccion = styled.div`
`

const TituloSeccionFooter = styled.h3`
  font-size: 25px;
  margin-bottom: 10px;
`;

const ListaFooter = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const LiFooter = styled.li`
  list-style: none;
  display: flex;
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
`

const ContenedorRed = styled.div`
  display: flex;
  align-items: end;
`

const IconoFooter = styled.i`
  font-size: 25px;
  margin: 1%;
`

const TextoRed = styled.h1`
  font-size: 20px;
`