import './App.css';
import Footer from './Component/Footer/Footer';
import Frame1 from './Component/Frame1/Frame1';
import Frame2 from './Component/Frame2/Frame2';
import Frame3 from './Component/Frame3/Frame3';
import Frame4 from './Component/Frame4/Frame4';
import Frame5 from './Component/Frame5/Frame5';
import Frame6 from './Component/Frame6/Frame6';
import Frame7 from './Component/Frame7/Frame7';

import Heeader from './Component/Header/Heeader';

function App() {
  return (
    <div className="App">
      <Heeader/>
    <Frame1/>
    <Frame2/>
    <Frame3/>
    <Frame4/>
    <Frame5/>
    <Frame6/>
    <Frame7/>
    <Footer/>
    </div>
  );
}

export default App;
