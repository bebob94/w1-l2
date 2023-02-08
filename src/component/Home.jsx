import { Component } from "react";
import { Row, Container } from "react-bootstrap";
import MyNavbar from "./MyNav";
import "./Home.css";
import MyFooter from "./MyFooter";
import AllTheBooks from "./AllTheBooks";

class Home extends Component {
  render() {
    return (
      <>
        <MyNavbar />
        <Container>
          <Row className="justify-content-center">
            <AllTheBooks />
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}
export default Home;
