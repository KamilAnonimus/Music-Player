import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './homepage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

const massTracks = []
massTracks[0] = {
  name: "Kizara",
}
massTracks[1] = {
  name: "Morgenshtern"
}
massTracks[2] = {
  name: "Miyagi & Andy Panda"
}
console.log(massTracks)