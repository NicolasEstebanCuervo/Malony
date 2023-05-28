import styled from "@emotion/styled/macro";
import Imagen1 from '../../Imagenes/Img1.jpg';
import Imagen2 from '../../Imagenes/Img2.jpg';
import Imagen3 from '../../Imagenes/Img3.jpg';
import Imagen4 from '../../Imagenes/Img4.jpg';
import Imagen5 from '../../Imagenes/Img5.jpg';
import Imagen6 from '../../Imagenes/Img6.jpg';
import Imagen7 from '../../Imagenes/Img7.jpg';
import Imagen8 from '../../Imagenes/Img8.jpg';
import Hover from '../../Imagenes/Hover.png';

const NuestrosProyectos = () => {
  return (
    <SeccionProyectos>
      <TituloProyectos>Portafolio</TituloProyectos>
      <ContenedorProyectos className="container">

        {/* Proyecto 1 */}

        <ContenedorProyecto>
          <ImagenProyecto src={Imagen1} />
          <HoverProyecto className="hover-galeria">
            <ImagenHover src={Hover} />
            <TextoHover>Proyecto 1</TextoHover>
          </HoverProyecto>
        </ContenedorProyecto>

        
        {/* Proyecto 2 */}
        
        <ContenedorProyecto>
          <ImagenProyecto src={Imagen2} />
          <HoverProyecto className="hover-galeria">
            <ImagenHover src={Hover} />
            <TextoHover>Proyecto 2</TextoHover>
          </HoverProyecto>
        </ContenedorProyecto>

        
        {/* Proyecto 3 */}
        
        <ContenedorProyecto>
          <ImagenProyecto src={Imagen3} />
          <HoverProyecto className="hover-galeria">
            <ImagenHover src={Hover} />
            <TextoHover>Proyecto 3</TextoHover>
          </HoverProyecto>
        </ContenedorProyecto>
        
        {/* Proyecto 4 */}
        
        <ContenedorProyecto>
          <ImagenProyecto src={Imagen4} />
          <HoverProyecto className="hover-galeria">
            <ImagenHover src={Hover} />
            <TextoHover>Proyecto 4</TextoHover>
          </HoverProyecto>
        </ContenedorProyecto>

        
        {/* Proyecto 5 */}
        
        <ContenedorProyecto>
          <ImagenProyecto src={Imagen5} />
          <HoverProyecto className="hover-galeria">
            <ImagenHover src={Hover} />
            <TextoHover>Proyecto 5</TextoHover>
          </HoverProyecto>
        </ContenedorProyecto>

        {/* Proyecto 6 */}
        
        <ContenedorProyecto>
          <ImagenProyecto src={Imagen6} />
          <HoverProyecto className="hover-galeria">
            <ImagenHover src={Hover} />
            <TextoHover>Proyecto 6</TextoHover>
          </HoverProyecto>
        </ContenedorProyecto>

        {/* Proyecto 7 */}
        
        <ContenedorProyecto>
          <ImagenProyecto src={Imagen7} />
          <HoverProyecto className="hover-galeria">
            <ImagenHover src={Hover} />
            <TextoHover>Proyecto 7</TextoHover>
          </HoverProyecto>
        </ContenedorProyecto>

        {/* Proyecto 8 */}
        
        <ContenedorProyecto>
          <ImagenProyecto src={Imagen8} />
          <HoverProyecto className="hover-galeria">
            <ImagenHover src={Hover} />
            <TextoHover>Proyecto 8</TextoHover>
          </HoverProyecto>
        </ContenedorProyecto>


      </ContenedorProyectos>
    </SeccionProyectos>
  );
};

export default NuestrosProyectos;

const SeccionProyectos = styled.div`
  background: #f2f2f2;
  padding: 50px;
`;

const TituloProyectos = styled.h1`
  color: #642a73;
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;
`;

const ContenedorProyectos = styled.div`
  display: grid;
  grid-template-columns: repeat(4,250px);
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const ContenedorProyecto = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  height: 200px;
`;

const ImagenProyecto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const HoverProyecto = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transform: scale(0);
  background: hsla(273, 91%, 27%, 0.7);
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${ContenedorProyecto}:hover & {
    transform: scale(1);
  }
`;

const ImagenHover = styled.img`
  width: 50px;
`;

const TextoHover = styled.h1`
  font-size: 15px;
  color: #fff;
`;
