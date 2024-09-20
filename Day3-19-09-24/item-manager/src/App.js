import React from 'react';
  
  const App = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default App;
  import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import ItemComponent from './Components/ItemComponent';
import { ItemProvider } from './Components/ItemContext';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <ItemComponent />
      </ItemProvider>
    </div>
  );
}

export default App;
