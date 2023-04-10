// import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    // // I. Todo esto irá en un hook personalizado que se llamará useFetchGifs
    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    
    // // Nunca se debe colocar la llamada a una funcion dentro de un functional component, porque cada vez que la funcion
    // // se vuelva a renderizar va a volver a ejecutar la funcion.
    // // Actualmente la llamada a getGifs se realiza dos veces la primera vez y eso es porque el <React.StrictMode> del archivo
    // // main.jsx hace que se ejecute una vez como revision de que el componente funciona bien y la segunda vez el nuestra
    // // ejecucion, pero esto no pasará en produccion ya que el modo estricto es solo en desarrollo. Pero si guardamos una
    // // categoría y el control se recarga, las llamadas se van multiplicando. Esto se soluciona con el hook llamado useEffect
    // // el cual se utiliza para disparar efectos secundarios en los functional components.
    // // Cuando el componente se cargue por primera vez (efecto secundario cuando se carga el componente), solo ahí vamos a
    // // hacer la peticion http y ya no se seguirá ejecutando la funcion getGifs cuando se actualize el componente.
    // useEffect(() => {
    //     //Esto no puede ser una promesa, debe ser una funcion, osea, no podemos tener un async/await aquí adentro, pero si
    //     //podemos un async/await afuera, por lo tanto comentar el getGifs y usar un getImages.
    //     //getGifs(category);
    //     getImages();
    // },
    // // Si se dejan las dependencias vacías, el hook useEffect solo se disparará la primera vez que se crea el componente.
    // []);
    // // F. Todo esto irá en un hook personalizado que se llamará useFetchGifs.

    // Hook personalizado que contiene lo comentado arriba.
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {/* Esto tambien puede ser un componente que solo se encarge de mostrar el cargando. */}
            {
                // Los parentesis se pueden quitar:
                // isLoading && (<h2>Cargando...</h2>)
                isLoading && <h2>Cargando...</h2>
            }
            

            {/* Dentro del control jsx, no se puede colocar la palabra reservada class para
            utilizar un estilo en htmo. Ej: <div class="card-grid">, ya que da un error porque
            esto (jsx) es codigo javascript y en javascript existe la palabra class para crear
            una clase, entonces para solucionar este problema, react usa la palabra className. */}
            <div className="card-grid">
                {
                    // images.map(({id, title}) => (
                    //     <GifItem key={id} />
                    // ))

                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            // Con esto, esparcimos todas las propiedades de image en el control, es decir, se crea una
                            // propiedad (props) en el control GifItem por cada propiedad de image.
                            {...image}
                        />
                    ))
                }
            </div>
            
            
        </>
    )
}
