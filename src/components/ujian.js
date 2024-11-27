import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Ujian() {
  return (
    <Container>
      <div className="ujian-wrapper">
        <div className="ujian-header">
          <h1>Ujian</h1>
        </div>
        <div className="body-wrapper">
          <div className="input-area">
            <Link to="/tambahujian">
              <Button variant="primary" className="mb-3 text-icon-button">
                <i className="fas fa-plus fa-xs"></i>Tambah
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
                <th>Ujian</th>
                <th>Pelajaran</th>
                <th>Kelas</th>
                <th>Jumlah Soal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ujian Tengah Semester (UTS)</td>
                <td>Matematika</td>
                <td>Teknik Informatika - A</td>
                <td>5</td>
                <td>
                  <Button variant="primary">
                    <i className="fas fa-edit"></i>
                  </Button>
                  <Button variant="danger">
                    <i className="fas fa-trash"></i>
                  </Button>
                  <Link to="/detailujian">
                    <Button variant="warning">
                      <i className="fas fa-plus"></i>
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ujian Tengah Semester (UTS)</td>
                <td>Bahasa Indonesia</td>
                <td>Teknik Informatika - B</td>
                <td>5</td>
                <td>
                  <Button variant="primary">
                    <i className="fas fa-edit"></i>
                  </Button>
                  <Button variant="danger">
                    <i className="fas fa-trash"></i>
                  </Button>
                  <Link to="/detailujian">
                    <Button variant="warning">
                      <i className="fas fa-plus"></i>
                    </Button>
                  </Link>
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
