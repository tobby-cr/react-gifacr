import { useState } from 'react';

// export const AddCategory = ({setCategories}) => {
//     const [inputValue, setInputValue] = useState('');



//     // const onInputChange = (event) => {
//     //     // Para que se pueda escribir en el control input, se debe hacer de la siguiente manera:
//     //     setInputValue(event.target.value);
//     // }

//     // Lo de arriba tambien se puede escribir así:
//     const onInputChange = ({target}) => {
//         // Para que se pueda escribir en el control input, se debe hacer de la siguiente manera:
//         setInputValue(target.value);
//     }

//     const onSubmit = (event) => {

//         // Si damos enter, se recarga la pagina y se limpia la consola, por lo tanto, para mantener los
//         // logs, desde la configuracion de la consola (icono de engranaje), se puede seleccionar la opcion "Preserve log".
//         // console.log(event);

//         // Para evitar el refresh del navegador.
//         event.preventDefault();

//         // Para validar de que siempre exista mas de una letra.
//         if (inputValue.trim().length <= 1) return;

//         // El callback obtiene las categorias anteriores para agregarlas.
//         setCategories(categories => [inputValue, ...categories]);
//         setInputValue('');
//     }

//     return (
//         // Se coloca el form para que cuando se de enter en el control, se haga el submit, el cual
//         // podemos controlar.
//         <form onSubmit={onSubmit}>
//             <input
//                 type="text"
//                 placeholder="Buscar gifs"
//                 value={inputValue}
//                 // Si no colocamos el onChange da un warning y el input se trabajará como un readOnly.
//                 onChange={onInputChange}
//                 // Lo de arriba es igual que si escribimos lo siguiente:
//                 // onChange={(event) => onInputChange(event)}
//             />
//         </form>
//     );
// }

// Lo de arriba se actualiza.
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) => {
    //     // Para que se pueda escribir en el control input, se debe hacer de la siguiente manera:
    //     setInputValue(event.target.value);
    // }

    // Lo de arriba tambien se puede escribir así:
    const onInputChange = ({target}) => {
        // Para que se pueda escribir en el control input, se debe hacer de la siguiente manera:
        setInputValue(target.value);
    }

    const onSubmit = (event) => {

        // Si damos enter, se recarga la pagina y se limpia la consola, por lo tanto, para mantener los
        // logs, desde la configuracion de la consola (icono de engranaje), se puede seleccionar la opcion "Preserve log".
        // console.log(event);

        // Para evitar el refresh del navegador.
        event.preventDefault();

        // Para validar de que siempre exista mas de una letra.
        if (inputValue.trim().length <= 1) return;

        // El callback obtiene las categorias anteriores para agregarlas.
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        // Se coloca el form para que cuando se de enter en el control, se haga el submit, el cual
        // podemos controlar.
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // Si no colocamos el onChange da un warning y el input se trabajará como un readOnly.
                onChange={onInputChange}
                // Lo de arriba es igual que si escribimos lo siguiente:
                // onChange={(event) => onInputChange(event)}
            />
        </form>
    );
}