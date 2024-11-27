import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EnrollSiswa() {
  return (
    <Container>
      <Link to="/detailsesiujian">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <div className="enroll-wrapper">
        <div className="enroll-header">
          <h1>Enroll Siswa</h1>
        </div>
        <div className="body-wrapper">
          <Table bordered hover>
            <thead>
              <tr>
                <th>
                  <Form.Check aria-label="option 1" />
                </th>
                <th>Nama Siswa</th>
                <th>Kelas</th>
                <th>Jenis Kelamin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td>Amelia Safitri</td>
                <td>Teknik Informatika - A</td>
                <td>P</td>
              </tr>
            </tbody>
          </Table>
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
          <Button variant="primary" type="submit" className="mt-2">
            Submit
          </Button>
          <Button variant="secondary" className="ms-2 mt-2">
            Reset
          </Button>
        </div>
      </div>
    </Container>
  );
}
