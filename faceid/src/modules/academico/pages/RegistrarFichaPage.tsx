import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/academico.css";
import "../../../styles/PanelAdmin.css";

const RegistrarFichaPage = () => {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [programa, setPrograma] = useState("");
  const [jornada, setJornada] = useState("Mañana");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMostrarModal(true);
  };

  return (
    <div className="registrar-bg">
      <div className="registrar-card">

        <button className="btn-volver" onClick={() => navigate("/academico")}>
          ← Ir a Gestión académica
        </button>

        <h1 className="registrar-titulo">Registrar ficha</h1>
        <p className="registrar-subtitulo">
          Crea una nueva ficha y asóciala a un programa
        </p>

        <div className="registrar-form">
          <div className="form-group">
            <label className="form-label">Nombre de la ficha</label>
            <input
              type="text"
              placeholder="EJ: 3145555"
              className="form-input"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Programa de formación</label>
            <select className="form-select" value={programa} onChange={(e) => setPrograma(e.target.value)}>
              <option value="">Seleccione un programa</option>
              <option value="ADSO-2025">Análisis y Desarrollo de Software (ADSO)</option>
              <option value="Multimedia-2025">Multimedia</option>
              <option value="Redes-2025">Redes de Computadores</option>
              <option value="Contabilidad-2025">Contabilidad y Finanzas</option>
              <option value="Administracion-2025">Administración Empresarial</option>
              <option value="Electronica-2025">Electrónica</option>
              <option value="Salud-2025">Auxiliar en Salud</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Jornada</label>
            <select className="form-select" value={jornada} onChange={(e) => setJornada(e.target.value)}>
              <option value="Mañana">Mañana</option>
              <option value="Tarde">Tarde</option>
              <option value="Noche">Noche</option>
            </select>
          </div>

          <button className="btn-registrar" onClick={handleSubmit}>
            Registrar ficha
          </button>
        </div>
      </div>

      {/* Modal con datos de la ficha */}
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-ficha-card">
            <button className="modal-cerrar" onClick={() => setMostrarModal(false)}>✕</button>
            <h2 className="modal-ficha-titulo">Fichas registradas</h2>
            <div className="modal-ficha-item">
              <div className="ficha-header">
                <span className="ficha-numero">{nombre || "3145555"}</span>
                <span className="badge-activo">Activo</span>
              </div>
              <p className="ficha-info">Programa: {programa || "ADSO-2025"}</p>
              <p className="ficha-info">Jornada: {jornada}</p>
              <div className="ficha-codigo-box">
                <span className="ficha-codigo-label">Código de acceso:</span>
                <span className="ficha-codigo">FICHA{nombre || "3145555"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrarFichaPage;