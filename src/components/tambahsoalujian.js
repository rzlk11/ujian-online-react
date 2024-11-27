import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FloatingLabel } from "react-bootstrap";

export default function TambahSoalUjian() {
  return (
    <Container>
      <Link to="/detailujian">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <div className="tambahsoal-wrapper">
        <div className="tambahsoal-header">
          <h1>Tambah Soal Ujian</h1>
        </div>
        <div className="body-wrapper">
          <Table bordered hover>
            <tbody>
              <tr>
                <td>Soal</td>
                <td>
                  <FloatingLabel controlId="floatingTextarea2" label="Soal">
                    <Form.Control
                      as="textarea"
                      placeholder="Masukkan soal"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </td>
              </tr>
              <tr>
                <td>Pilihan A</td>
                <td>
                  <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control as="textarea" style={{ height: "100px" }} />
                  </FloatingLabel>
                </td>
              </tr>
              <tr>
                <td>Pilihan B</td>
                <td>
                  <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control as="textarea" style={{ height: "100px" }} />
                  </FloatingLabel>
                </td>
              </tr>
              <tr>
                <td>Pilihan C</td>
                <td>
                  <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control as="textarea" style={{ height: "100px" }} />
                  </FloatingLabel>
                </td>
              </tr>
              <tr>
                <td>Pilihan D</td>
                <td>
                  <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control as="textarea" style={{ height: "100px" }} />
                  </FloatingLabel>
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
    </Container>
  );
}
