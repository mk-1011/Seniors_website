import services from "../data/services.json";
import { Col, Row } from "react-bootstrap";
import { Service } from "../components/Service";
import "./CSS/home.css";
export function Home() {
  return (
    <>
      <div className="bg1">
        <h1 >Home</h1>
        <p className="para">
          Welcome to the page this is exclusively for helping out elderly with
          the internet.Feel free to explore the page.
        </p>
        <Row md={1} xs={1} lg={2} className="g-5">
          {services.map((item) => (
            <Col key={item.id}>
              <Service {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
