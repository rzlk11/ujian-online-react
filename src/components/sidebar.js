import React from "react";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <i className="fas fa-graduation-cap fa-lg"></i>
        <h5>Ujian Online</h5>
        <Badge bg="warning">PRO</Badge>
      </div>
      <div className="section">
        <Nav className="flex-column">
          <Link to="/" className="nav-link">
            <i className="fas fa-tachometer-alt"></i>Dashboard
          </Link>
        </Nav>
      </div>
      <div className="section">
        <Nav className="flex-column">
          <Nav.Link href="/mapel">
            <i className="fas fa-bookmark"></i>Mata Pelajaran
          </Nav.Link>
          <Nav.Link href="/kelas">
            <i className="fas fa-clone"></i>Kelas
          </Nav.Link>
          <Nav.Link href="/siswa">
            <i className="fas fa-user-friends"></i>Siswa
          </Nav.Link>
          <Nav.Link href="/dosen">
            <i className="fas fa-user-friends"></i>Dosen
          </Nav.Link>
        </Nav>
      </div>

      <div className="section">
        <Nav className="flex-column">
          <Nav.Link href="/ujian">
            <i className="fas fa-edit"></i>Ujian
          </Nav.Link>
          <Nav.Link href="/sesiujian">
            <i className="fas fa-clock"></i>Sesi Ujian
          </Nav.Link>
        </Nav>
      </div>

      <div className="section">
        <Nav className="flex-column">
          <Nav.Link href="/laporannilai">
            <i className="fas fa-chart-line"></i>Laporan Nilai
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}
