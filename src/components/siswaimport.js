import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SiswaImport() {
  return (
    <Container>
      <Link to="/siswa">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <Button variant="success" className="ms-3 text-icon-button">
        <i className="fas fa-file fa-xs"></i>Contoh Format
      </Button>
      <div className="body-wrapper">
        <h4>Import Siswa</h4>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>File Excel</Form.Label>
            <Form.Control type="file" />
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
