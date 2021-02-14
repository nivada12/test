import React from "react";
import { Container } from "react-bootstrap";
import Caro from "./style/Caro";

function Accueil() {
  return (
    <div>
      <Container fluid className="p-0">
        <Caro />
      </Container>
    </div>
  );
}

export default Accueil;
