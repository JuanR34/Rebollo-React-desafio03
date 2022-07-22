import './App.css';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
