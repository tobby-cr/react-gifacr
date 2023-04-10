import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';

// Para que el css sea global se coloca aquí.
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Este modo también activa
  // advertencias y comprobaciones adicionales para sus descendientes. Nota: Las comprobaciones hechas por el modo
  // estricto solamente son ejecutadas en el modo de desarrollo; no van a impactar producción. Si se quiere se puede
  // comentar pero no se recomienda.
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);
