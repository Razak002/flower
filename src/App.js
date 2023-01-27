import './App.css';
import Flowers from './components/Flowers';
import FlowersData from './components/FlowersData';

const FlowersInfo = (values) => {
  return (
    <>
      <Flowers
        title={values.title}
        imgsrc={values.imgsrc}
        desc={values.desc}
        btn={values.btn}
      />
    </>
   
  )
}

function App() {
  return (
    <>
      <h1>About Flowers</h1>
      <div className='container'>
        {FlowersData.map(FlowersInfo)}

      </div>
    </>
  )
}

export default App

