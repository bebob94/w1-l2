import { Card, Button, Col } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

function AllTheBooks() {
  return [...fantasy, ...history, ...horror, ...romance, ...scifi].map(
    (book) => (
      <Col>
        <Card className="m-3" style={{ width: "18rem" }} key={book.asin}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.category}</Card.Text>
            <Button variant="primary">{book.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  );
}
export default AllTheBooks;
