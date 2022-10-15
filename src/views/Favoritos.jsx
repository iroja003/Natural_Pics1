import { useContext } from "react";
import Context from "./Context";

export default function Favoritos() {
  const { fotos, setFotos} = useContext(Context);

  const sacadeFavorito = (id) => {
      const indexFoto = fotos.findIndex ( (f) => f.id === id);
      fotos[indexFoto].favorito = !fotos[indexFoto].favorito;
      setFotos([...fotos]);
    };
  
  // renderizar Favorito
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {
        fotos.filter((f) => f.favorito).map(
        (f,id) => ( 
          <img 
            src={f.src}
            alt={f.desc} 
            onClick={() => sacadeFavorito(f.id)}
            key={f.id}
          />
          ))}                  
      </div>
    </div>
  );
}
