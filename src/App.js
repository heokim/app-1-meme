import './App.css';
//import 'img';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = (event) => {
    setLinea1(event.target.value);
  }

  const onChangeLinea2 = (event) => {
    setLinea2(event.target.value);
  }

  const onChangeImagen = (event) => {
    setImagen(event.target.value);
  }

  const onClickExportar = (event) => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <br />
      <select onChange={onChangeImagen} >
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">Historia</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <br />

      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1' /> <br />
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2' /> <br />
      <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className='meme' id='meme'>
        <span className='linea1'>{linea1}</span><br />
        <span className='linea2'>{linea2}</span><br />
        <img className='imgid' src={"/img/" + imagen + ".jpg"} alt="Plantilla de Meme" />
      </div>

    </div>
  );
}

export default App;
