import React,{Component} from 'react';
import Styles from './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';



class App extends Component{
 
  state = { 


  }
  render() {
    return ( 
      <div class="container">
        <Header 
        titulo='Administrador Paciente Veterinaria'/>

        <div className="col-md-10 mx-auto">
          <NuevaCita/>
        </div>

      </div>

    );
  }
  
}
export default App;
