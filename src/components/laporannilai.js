import { Button, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

export default function LaporanNilai() {
  return (
    <Container>
      <div className="sesi-ujian-wrapper mb-5">
        <div className="sesi-ujian-header">
          <h1>Filter Nilai Ujian</h1>
        </div>
        <div className="body-wrapper">
          <h5>Ujian</h5>
          <Row className="mb-3">
            <Col xs={9}>
              <Form.Group>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Button
              variant="primary"
              type="submit"
              className="text-icon-button"
              as={Col}
            >
              <i class="fas fa-filter"></i>
              Filter
            </Button>
          </Row>
        </div>
      </div>

      <div className="sesi-ujian-wrapper">
        <div className="sesi-ujian-header">
          <h1>Laporan Nilai Ujian</h1>
        </div>
        <Button variant="success" type="submit" className="text-icon-button">
          <i class="fas fa-file"></i>
          Download Excel
        </Button>
        <div className="body-wrapper">
          <h5>Ujian</h5>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Ujian</th>
                <th>Sesi</th>
                <th>Nama Siswa</th>
                <th>Kelas</th>
                <th>Pelajaran</th>
                <th>Nilai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ujian Tengah Semester (UTS)</td>
                <td>Sesi 2</td>
                <td>Amelia Safitri</td>
                <td>Teknik Informatika - A</td>
                <td>Matematika</td>
                <td>90</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}
