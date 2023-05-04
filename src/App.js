
import { Suspense } from 'react';
import './App.scss';
import { Layot } from './Layot/Layot';
import "./i18n";



function App() {


  return (
   <Suspense fallback={"Loading..."}>
       <div className="App">
            <Layot />
       </div>   
   </Suspense>
  );
}

export default App;
