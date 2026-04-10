import "../Styles/academico.css";
 
interface ModalExitoProps {
  mensaje: string;
  onCerrar: () => void;
}
 
const ModalExito = ({ mensaje, onCerrar }: ModalExitoProps) => {
  return (
    <div className="modal-overlay" onClick={onCerrar}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icono">✅</div>
        <p className="modal-mensaje">{mensaje}</p>
      </div>
    </div>
  );
};
 
export default ModalExito;