import { useNavigate } from "react-router-dom";
import "../Styles/academico.css";

interface AcademicoOptionCardProps {
  title: string;
  path: string;
  img: string;
}

const AcademicoOptionCard = ({ title, path, img }: AcademicoOptionCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="quick-item academico-card" onClick={() => navigate(path)}>
      <img src={img} alt={title} className="card-img" />
      <p className="card-title">{title}</p>
    </div>
  );
};

export default AcademicoOptionCard;