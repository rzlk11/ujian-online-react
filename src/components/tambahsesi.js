import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function TambahSesi() {
  return (
    <Container>
      <Link to="/sesiujian">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <div className="body-wrapper">
        <h4>Tambah Sesi</h4>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Nama Sesi</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Ujian" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Ujian</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label>Waktu Mulai</Form.Label>
                <Form.Control type="datetime-local" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Waktu Selesai</Form.Label>
                <Form.Control type="datetime-local" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="mt-2">
            Submit
          </Button>
          <Button variant="secondary" className="ms-2 mt-2">
            Reset
          </Button>
        </Form>
      </div>
    </Container>
  );
}
