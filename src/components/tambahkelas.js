import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TambahKelas() {
  return (
    <Container>
      <Link to="/kelas">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <div className="body-wrapper">
        <h4>Tambah Kelas</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Kelas</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Kelas" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" className="ms-2">
            Reset
          </Button>
        </Form>
      </div>
    </Container>
  );
}
