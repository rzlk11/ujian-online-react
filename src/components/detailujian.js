import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DetailUjian() {
  return (
    <Container>
      <Link to="/ujian">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <div className="detail-ujian-wrapper mb-5">
        <div className="detail-ujian-header">
          <h1>Detail Ujian</h1>
        </div>
        <div className="body-wrapper">
          <Table bordered hover>
            <tbody>
              <tr>
                <th>Nama Ujian</th>
                <td>Ujian Tengah Semester (UTS)</td>
              </tr>
              <tr>
                <th>Mata Pelajaran</th>
                <td>Bahasa Indonesia</td>
              </tr>
              <tr>
                <th>Kelas</th>
                <td>Teknik Informatika - B</td>
              </tr>
              <tr>
                <th>Jumlah Soal</th>
                <td>5</td>
              </tr>
              <tr>
                <th>Durasi</th>
                <td>20 Menit</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="ujian-wrapper">
        <div className="ujian-header">
          <h1>Soal Ujian</h1>
        </div>
        <div className="body-wrapper">
          <div className="input-area">
            <Link to="/tambahsoalujian">
              <Button variant="primary" className="mb-3 text-icon-button">
                <i className="fas fa-plus fa-xs"></i>Tambah
              </Button>
            </Link>
            <Link to="/ujianimport">
              <Button variant="success" className="mb-3 text-icon-button">
                <i className="fas fa-file fa-xs"></i>Import
              </Button>
            </Link>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Masukkan kata kunci dan enter"
                aria-label="Masukkan kata kunci dan enter"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <i class="fas fa-search"></i>
              </Button>
            </InputGroup>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Soal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody></tbody>
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
