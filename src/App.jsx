import './App.css'
import ListEmployee from './components/ListEmployee'
import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'
import EmployeeComp from './components/EmployeeComp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>{/*BrowserRouter é um componente que serve para encapsular as rotas da aplicação*/}
        <HeaderComp/>
        <Routes>{/*Routes é onde ficam as rotas da aplicação*/}
            <Route path="/" element={<ListEmployee/>}/>{/*Route é onde definimos uma rota, o path é o caminho da rota e o element é o componente que será renderizado. Neste caso, o componente ListEmployee será renderizado quando a rota for a raiz da aplicação*/}
            <Route path="/employees" element={<ListEmployee/>}/>
            
            <Route path="/add-employee" element={<EmployeeComp/>}/>
            <Route path="/edit-employee/:id" element={<EmployeeComp/>}/>
        </Routes>
        <FooterComp/>
    </BrowserRouter>
  )
}

export default App
