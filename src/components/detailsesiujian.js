import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function DetailSesiUjian() {
  return (
    <Container>
      <Link to="/sesiujian">
        <Button variant="primary" className="text-icon-button">
          <i className="fas fa-arrow-left"></i>
          Kembali
        </Button>
      </Link>
      <div className="detail-ujian-wrapper mb-5">
        <div className="detail-ujian-header">
          <h1>Detail Sesi Ujian</h1>
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
                <th>Sesi</th>
                <td>Sesi 2</td>
              </tr>
              <tr>
                <th>Mulai</th>
                <td>2024-08-18 22:21:00</td>
              </tr>
              <tr>
                <th>Selesai</th>
                <td>2024-08-18 22:21:00</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      <div className="detail-sesi-wrapper">
        <div className="detail-sesi-header">
          <h1>Enrolled Siswa</h1>
        </div>
        <div className="body-wrapper">
          <div className="input-area">
            <Link to="/enrollsiswa">
              <Button variant="primary" className="mb-3 text-icon-button">
                <i className="fas fa-user-plus fa-xs"></i>Enroll Siswa
              </Button>
            </Link>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Siswa</th>
                <th>Kelas</th>
                <th>Jenis Kelamin</th>
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
