import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalExito from "../components/ModalExito";
import "../Styles/academico.css";
import "../../../styles/PanelAdmin.css";


const RegistrarProgramaPage = () => {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
    navigate("/academico/programas/consultar"); 
  };

  return (
    <div className="registrar-bg">
      <div className="registrar-card">

        <button className="btn-volver" onClick={() => navigate("/academico")}>
          ← Ir a Gestión académica
        </button>

        <div className="registrar-icon">🎓</div>
        <h1 className="registrar-titulo">Registrar programas de formación</h1>
        <p className="registrar-subtitulo">Crea un nuevo programa</p>

        <div className="registrar-form">
          <div className="form-group">
            <label className="form-label">Nombre del programa</label>
            <input
              type="text"
              placeholder="EJ: Análisis y desarrollo de software"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Estado</label>
            <select className="form-select">
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Nivel</label>
            <select className="form-select">
              <option value="tecnico">Técnico</option>
              <option value="tecnologo">Tecnólogo</option>
            </select>
          </div>

          <button className="btn-registrar" onClick={handleSubmit}>
            Registrar programa
          </button>

          <button className="btn-consultar" onClick={() => navigate("/academico/programas/consultar")}>
            Consultar programas
          </button>
        </div>
      </div>

      {/* Modal de éxito */}
      {mostrarModal && (
        <ModalExito
          mensaje="Programa registrado correctamente"
          onCerrar={handleCerrarModal}
        />
      )}
    </div>
  );
};

export default RegistrarProgramaPage;