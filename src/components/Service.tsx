import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "src/pages/CSS/home.css";
import "../pages/CSS/home.css";
type ServiceProps = {
  id: number;
  name: string;
  imgUrl: string;
  link: string;
};

export function Service({ id, name, imgUrl, link }: ServiceProps) {
  return (
    <Link to={link}>
      <Card>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
