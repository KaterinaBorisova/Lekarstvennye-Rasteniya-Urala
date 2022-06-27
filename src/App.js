
import './App.css';
import {useState} from 'react';
import {data} from './data';

function App() {

  const [plantes, setPlantes] = useState (0);
  const {id, name, latinName, family, range, image, property} = data[plantes];
  const [showMore, setShowMore] = useState (false);
  


  const previousPlante =()=>{
    setPlantes ((plantes => {
      plantes --;
      if (plantes < 0){
        return data.length -1
      }
      return plantes
    }))
  }

  const nextPlante = ()=> {
    setPlantes ((plantes => {
      plantes ++;
      if (plantes > data.length -1){
        plantes = 0;
      }
      return plantes;
    }))
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          <h1>Лекарственные растения Урала</h1>
        </div >
        <div key={id} className='container'>
          <h2><span>Название:</span> {name}</h2>
          <p><span>Латинское название:</span> {latinName}</p>
          <p><span>Семейство:</span> {family}</p>
          <p><span>Место произрастания:</span> {range}</p>
          <div>
            <img src={ image } alt='plantsImages' />
          </div>
          <p><span>Свойство:</span> { showMore ? property : property.substring (0,80) + "...."}
            <button className='btnShow' onClick={() =>setShowMore(!showMore)}>{showMore ? "Свернуть" : "Читать больше"}</button>
          </p>
        </div>
        <div className='btn'>
          <button onClick={ previousPlante}>Назад </button>
          <button onClick = { nextPlante }> Вперед</button>
        </div>
      
      </header>
    </div>
  );
}

export default App;
