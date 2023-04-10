import { useState } from "react";

// Se comenta porque ahora se usará el archivo de barril (index.js) creado en la carpeta components.
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components"; // No es necesario colocar /index porque el index se toma por defecto si existe y no ponemos nada.


// import React from 'react'
// Ya no es necesario importar react, porque eso ya se encuentra de manera global en el archivo
// vite.config.js en defineConfig:
//   export default defineConfig({
//       plugins: [react()],
//   })

// Cuando se quiera almacenar informacion y esa informacion tiene que cambiar el html, usualmente
// se necesitará un hook para mantener el estado. Existen varios hooks que mantienen el estado.

export const GifExpertApp = () => {

  // Con el snippet useStateSnippet se puede hacer el useState. Una regla de oro es que no se debe
  // colocar el state ni ningun hook dentro de un if. Los hooks trabajan en react basados en su posicion
  // y si los colocamos dentro de un if, react perdería la referencia de que state está manejando. 
  //   -----------------------
  // Reglas de los Hooks
  // -----------------------
  // Los Hooks son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.
  // Los Hooks son funciones de JavaScript, pero necesitas seguir dos reglas cuando los uses:

  // 1.- Llama Hooks solo en el nivel superior
  // -----------------------------------------
  // No llames Hooks dentro de ciclos, condicionales o funciones anidadas. En cambio, usa siempre Hooks en el nivel superior de tu función en React,
  // antes de cualquier retorno prematuro. Siguiendo esta regla, te aseguras de que los hooks se llamen en el mismo orden cada vez que un componente
  // se renderiza. Esto es lo que permite a React preservar correctamente el estado de los hooks entre multiples llamados a useState y useEffect.

  // 2.- Llama Hooks solo en funciones de React
  // ------------------------------------------
  // No llames Hooks desde funciones JavaScript regulares. En vez de eso, puedes:
  //  - Llama Hooks desde componentes funcionales de React.
  //  - Llama Hooks desde Hooks personalizados.
  // Siguiendo esta regla, te aseguras de que toda la lógica del estado de un componente sea claramente visible desde tu código fuente.
  const [categories, setCategories] = useState(['One Punch']);

  // const onAddCategory = () => {
  //   // No se puede usar el categories.push para agregar elementos al arreglo, porque eso muta el estado,
  //   // por eso se usa el operador spread.
  //   // setCategories([...categories, 'Valorant']);
  //   // Tambien se puede hacer usando el callback:
  //   // setCategories(cat => [...cat, 'Valorant']);
  //   // Si queremos insertar el valor al inicio sería:
  //   setCategories(['Valorant', ...categories]);
  // }
  // Lo de arriba se comenta porque ahora será usado por el evento onNewCategory.
  const onAddCategory = (newCategory) => {
    // Para validar que la categoría no exista en el arreglo antes de insertarlo.
    if (categories.includes(newCategory)) return;

    // No se puede usar el categories.push para agregar elementos al arreglo, porque eso muta el estado,
    // por eso se usa el operador spread.
    // setCategories([...categories, 'Valorant']);
    // Tambien se puede hacer usando el callback:
    // setCategories(cat => [...cat, 'Valorant']);
    // Si queremos insertar el valor al inicio sería:
    setCategories([newCategory, ...categories]);
  }

  return (
    // Estos <></> se llaman fragmento
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory
          // setCategories={setCategories}
          // Lo de arriba se comenta porque se va a mejorar y el setCategory sera reemplazado por un evento onNewCategory.
          onNewCategory={value => onAddCategory(value)}
        />

        {/* Listado de Gif */}
        {/* <ol> El ol ya no será usado, porque no usaremos el li*/}
          {/* El map tambien recibe como parametro un indice, ej: categories.map(category, i => .., el cual no debemos usar
            para asignarlo al key, porque si eliminamos un elemento n y el control de actualiza, el elemento n sigue
            existiendo porque se se asignaría a otra categoría cuando se actualiza el control, por eso react no recomienda
            usar el indice porque puede ocacionar problemas y el key debe ser unico. */}
          {
            // categories.map(category => {
            // // Siempre tiene que tener una propiedad unica key o dará error. Puede ser cualquier cosa,
            // // pero debe ser unica.
            // // return <li key={category}>{category}</li>
            // return (
            //   <div key={category}>
            //     <h3>{category}</h3>
            //     <li>{category}</li>
            //   </div>
            // )})

            // // Esto es igual a lo de arriba pero mas corto.
            // categories.map(category => 
            //   // Siempre tiene que tener una propiedad unica key o dará error. Puede ser cualquier cosa,
            //   // pero debe ser unica.
            //   // return <li key={category}>{category}</li>
            //   (
            //     <div key={category}>
            //       <h3>{category}</h3>
            //       <li>{category}</li>
            //     </div>
            //   ))

            // Lo de arriba se actualiza para que trabaje con el nuevo componente GifGrid.
            // El .map() es el equivalente de .Select() de c#. El .filter() sería el .Where() y
            // el .reduce() sería el .Aggregate().
            categories.map(category => (
              // Siempre tiene que tener una propiedad unica key o dará error. Puede ser cualquier cosa,
              // pero debe ser unica.
                <GifGrid key={category} category={category} />
              ))
          }
        {/* </ol> */}
    </>
  );
}
