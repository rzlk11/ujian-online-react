import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dosen() {
  return (
    <Container>
      <div className="dosen-wrapper">
        <div className="dosen-header">
          <h1>Dosen</h1>
        </div>
        <div className="body-wrapper">
          <div className="input-area">
            <Link to="/tambahdosen">
              <Button variant="primary" className="mb-3 text-icon-button">
                <i className="fas fa-plus fa-xs"></i>Tambah
              </Button>
            </Link>
            <Link to="/dosenimport">
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
                <th>NIP</th>
                <th>Nama Dosen</th>
                <th>Alamat</th>
                <th>Jenis Kelamin</th>
                <th>Password</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>2001</td>
                <td>Andi</td>
                <td>Sidoarjo</td>
                <td>Laki-laki</td>
                <td>12345</td>
                <td>
                  <Button variant="primary">
                    <i className="fas fa-edit"></i>
                  </Button>
                  <Button variant="danger">
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>2002</td>
                <td>Budi</td>
                <td>Surabaya</td>
                <td>Laki-laki</td>
                <td>12345</td>
                <td>
                  <Button variant="primary">
                    <i className="fas fa-edit"></i>
                  </Button>
                  <Button variant="danger">
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>2003</td>
                <td>Rizal Kunanto Haryo Husodo</td>
                <td>Malang</td>
                <td>Laki-laki</td>
                <td>12345</td>
                <td>
                  <Button variant="primary">
                    <i className="fas fa-edit"></i>
                  </Button>
                  <Button variant="danger">
                    <i className="fas fa-trash"></i>
                  </Button>
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
