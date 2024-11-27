import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function TambahUjian() {
  return (
    <Container>
      <Link to="/ujian">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <div className="body-wrapper">
        <h4>Tambah Ujian</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nama Ujian</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Nama Ujian" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Mata Pelajaran</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Kelas</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <FloatingLabel controlId="floatingTextarea2" label="Deskripsi">
            <Form.Control
              as="textarea"
              placeholder="Masukkan deskripsi"
              style={{ height: "100px" }}
            />
          </FloatingLabel>

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
