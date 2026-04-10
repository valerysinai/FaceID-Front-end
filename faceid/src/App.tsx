import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './modules/auth/pages/Login'
import AcademicoHomePage from './modules/academico/pages/AcademicoHomePage'
import RegistrarProgramaPage from './modules/academico/pages/RegistrarProgramaPage'
import ConsultarProgramasPage from './modules/academico/pages/ConsultarProgramasPage'
import FichasAsociadasPage from './modules/academico/pages/FichasAsociadasPage'
import RegistrarFichaPage from './modules/academico/pages/RegistrarFichaPage'
     


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/academico" element={<AcademicoHomePage />} />
        <Route path="/academico/programas" element={<RegistrarProgramaPage />} />
        <Route path="/academico/programas/consultar" element={<ConsultarProgramasPage />} />
        <Route path="/academico/fichas" element={<RegistrarFichaPage />} />
        <Route path="/academico/fichas/:id" element={<FichasAsociadasPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App