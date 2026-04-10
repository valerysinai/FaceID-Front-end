import AcademicoOptionCard from "../components/AcademicoOptionCard";
import "../Styles/academico.css";
import "../../../styles/PanelAdmin.css";

const AcademicoHomePage = () => {
  return (
    <div className="panel-container">
      <h1>Gestión académica</h1>
      <p className="texto-descripcion">
        Opciones administrativas
      </p>

      {/* ACCESOS RÁPIDOS */}
      <div className="quick">
        <h2>Accesos rápidos</h2>
        <div className="quick-grid">
          <AcademicoOptionCard
            title="Programas de formación"
            path="/academico/programas"
            img="/academico/ProgramasFormacion.png"
          />
          <AcademicoOptionCard
            title="Registrar fichas"
            path="/academico/fichas"
            img="/academico/RegistrarFichas.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AcademicoHomePage;
