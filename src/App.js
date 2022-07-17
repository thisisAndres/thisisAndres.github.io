import Weather from './components/FetchApi';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState } from 'react';


function App() {

const [text, setText] = useState(true);

function renderText (){
  setText(false)
}

  return (
    <div>
      <div className="App">
        <Header text={text}/>
        <Weather renderText={renderText}/>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
