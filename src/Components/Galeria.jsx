import { useContext } from "react";
import "../assets/css/galeria.css";
import Context from "../views/Context";
import Heart from "./Heart";


export default function Home() {
  const { fotos, setFotos} =  useContext(Context);
  const changeFavorito = ( id ) => {
      const indexFoto  = fotos.findIndex( (f) => f.id === id);
      fotos[indexFoto].favorito = !fotos[indexFoto].favorito;
      setFotos([...fotos]);
  };
  //
  return (
    <div className="galeria grid-columns-5 p-3">
       {
        fotos.map ( (f,id) =>(
        <div
          onClick={() => changeFavorito(f.id)}
          className="foto"
          style = {{backgroundImage: `url(${f.src})`}}
          key   = {f.id}
        >
          <Heart filled={f.favorito}/>
          <p>{f.desc}</p>
        </div>
        ))}
    </div>
  );
}
