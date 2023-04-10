// Este archivo index.js es un archivo de barril.

// Los archivos barril o barrel files nos permiten agrupar módulos para ser exportados y usados a través de una sola
// referencia. Son bastante útiles, pues simplifican el uso de los import.

// Por ejemplo, supongamos que tiene un proyecto con la siguiente estructura de archivos:

// project/
// ├── module1.js
// ├── module2.js
// └── module3.js

// Cada uno de estos módulos exporta uno o más valores y desea importarlos a otro módulo. Sin un archivo de barril,
// tendría que escribir varias declaraciones de importación para importar los valores que necesita:

// import { value1 } from './module1';
// import { value2 } from './module2';
// import { value3 } from './module3';

// Para que este proceso sea más conveniente, puede crear un archivo de barril llamado "index.js" en el directorio "proyecto".

// // project/index.js
// export * from './module1';
// export * from './module2';
// export * from './module3';

// Ahora, puede importar todos los valores que necesita con una sola declaración de importación:

// import { value1, value2, value3 } from './project';

// Los archivos barril son una herramienta útil para organizar y simplificar el proceso de importación en proyectos grandes con muchos módulos.
// Pueden ayudar a reducir la cantidad de código que tiene que escribir y facilitar la búsqueda de los valores que necesita.

export * from './AddCategory'; // Esto significa que exporta todo lo que AddCategory exporta.
export * from './GifGrid';
export * from './GifItem';

