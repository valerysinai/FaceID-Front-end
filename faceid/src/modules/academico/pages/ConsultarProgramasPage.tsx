import { useNavigate } from "react-router-dom";
import "../Styles/academico.css";
import "../../../styles/PanelAdmin.css";
 
const programas = [
  { id: 1, nombre: "ADSO", estado: "Activo" },
  { id: 2, nombre: "Multimedia", estado: "Activo" },
];
 
const ConsultarProgramasPage = () => {
  const navigate = useNavigate();
 
  return (
    <div className="registrar-bg">
      <div className="registrar-card consultar-card">
 
        <button className="btn-volver" onClick={() => navigate("/academico/programas")}>
          ← Ir a Registrar programas
        </button>
 
        <div className="registrar-icon">🎓</div>
        <h1 className="registrar-titulo">Programas registrados</h1>
 
        <div className="programas-lista">
          {programas.map((programa) => (
            <div key={programa.id} className="programa-item">
              <div className="programa-header">
                <span className="programa-nombre">{programa.nombre}</span>
                <span className="badge-activo">{programa.estado}</span>
              </div>
              <button
                className="btn-fichas"
                onClick={() => navigate(`/academico/fichas/${programa.id}`)}
              >
                Fichas asociadas
              </button>
            </div>
          ))}
        </div>
 
      </div>
    </div>
  );
};
 
export default ConsultarProgramasPage;