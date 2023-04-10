// Como en este archivo no se regresa un functional component, no se usa la extension jsx.

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Este es un hook personalizado.
// Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.
// Un Hook personalizado es una función de JavaScript cuyo nombre comienza con ”use” y que puede llamar a otros Hooks.
// A diferencia de un componente de React, un Hook personalizado no necesita tener una firma específica. Podemos decidir
// lo que adopta como argumentos y que, si lo hace, debería devolver. En otras palabras, es como una función normal.
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect(() => {
        //Esto no puede ser una promesa, debe ser una funcion, osea, no podemos tener un async/await aquí adentro, pero si
        //podemos un async/await afuera, por lo tanto comentar el getGifs y usar un getImages.
        //getGifs(category);
        getImages();
    },
    // Si se dejan las dependencias vacías, el hook useEffect solo se disparará la primera vez que se crea el componente.
    []);

    // Se retorna un objeto.
    return {
        images,
        isLoading
    }
}
