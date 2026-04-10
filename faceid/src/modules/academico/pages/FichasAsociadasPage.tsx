import { useNavigate } from "react-router-dom";
import "../Styles/academico.css";
import "../../../styles/PanelAdmin.css";

const fichas = [
  { id: 3145555, estado: "Activo", programa: "ADSO-2025", jornada: "Mañana", codigo: "FICHA3145555" },
  { id: 3145556, estado: "Activo", programa: "ADSO-2025", jornada: "Tarde", codigo: "FICHA3145556" },
];

const FichasAsociadasPage = () => {
  const navigate = useNavigate();

  return (
    <div className="registrar-bg">
      <div className="registrar-card fichas-card">

        <button className="btn-volver" onClick={() => navigate("/academico/programas/consultar")}>
          ← Ir a Registrar programas
        </button>

        <div className="registrar-icon">🎓</div>
        <h1 className="registrar-titulo">Fichas asociadas al programa</h1>

        <div className="fichas-grid">
          {fichas.map((ficha) => (
            <div key={ficha.id} className="ficha-item">
              <div className="ficha-header">
                <span className="ficha-numero">{ficha.id}</span>
                <span className="badge-activo">{ficha.estado}</span>
              </div>
              <p className="ficha-info">Programa: {ficha.programa}</p>
              <p className="ficha-info">Jornada: {ficha.jornada}</p>
              <div className="ficha-codigo-box">
                <span className="ficha-codigo-label">Código de acceso:</span>
                <span className="ficha-codigo">{ficha.codigo}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FichasAsociadasPage;