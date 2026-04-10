import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  path: string;
  img: string;
}

const HorariosOptionCard = ({ title, path, img }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="quick-item" onClick={() => navigate(path)}>
      <img src={img} alt={title} className="card-img" />
      <strong>{title}</strong>
    </div>
  );
};

export default HorariosOptionCard;