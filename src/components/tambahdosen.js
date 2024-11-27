import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function TambahDosen() {
  return (
    <Container>
      <Link to="/dosen">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <div className="body-wrapper">
        <h4>Tambah Dosen</h4>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>NIP</Form.Label>
              <Form.Control type="text" placeholder="Masukkan NISN" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Lengkap" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Alamat</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Alamat" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan Password" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Konfirmasi Password</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Konfirmasi Password" />
            </Form.Group>
          </Row>

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
