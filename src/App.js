import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Dashboard from "./components/dashboard";
import Mapel from "./components/mapel";
import TambahMapel from "./components/tambahmapel";
import Kelas from "./components/kelas";
import TambahKelas from "./components/tambahkelas";
import Siswa from "./components/siswa";
import TambahSiswa from "./components/tambahsiswa";
import SiswaImport from "./components/siswaimport";
import Dosen from "./components/dosen";
import TambahDosen from "./components/tambahdosen";
import DosenImport from "./components/dosenimport";
import Ujian from "./components/ujian";
import TambahUjian from "./components/tambahujian";
import DetailUjian from "./components/detailujian";
import TambahSoalUjian from "./components/tambahsoalujian";
import SoalUjianImport from "./components/ujianimport";
import SesiUjian from "./components/sesiujian";
import TambahSesi from "./components/tambahsesi";
import DetailSesiUjian from "./components/detailsesiujian";
import EnrollSiswa from "./components/enrollsiswa";
import LaporanNilai from "./components/laporannilai";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mapel" element={<Mapel />} />
          <Route path="/tambahmapel" element={<TambahMapel />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/tambahkelas" element={<TambahKelas />} />
          <Route path="/siswa" element={<Siswa />} />
          <Route path="/tambahsiswa" element={<TambahSiswa />} />
          <Route path="/siswaimport" element={<SiswaImport />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/tambahdosen" element={<TambahDosen />} />
          <Route path="/dosenimport" element={<DosenImport />} />
          <Route path="/ujian" element={<Ujian />} />
          <Route path="/tambahujian" element={<TambahUjian />} />
          <Route path="/detailujian" element={<DetailUjian />} />
          <Route path="/tambahsoalujian" element={<TambahSoalUjian />} />
          <Route path="/ujianimport" element={<SoalUjianImport />} />
          <Route path="/sesiujian" element={<SesiUjian />} />
          <Route path="/tambahsesi" element={<TambahSesi />} />
          <Route path="/detailsesiujian" element={<DetailSesiUjian />} />
          <Route path="/enrollsiswa" element={<EnrollSiswa />} />
          <Route path="/laporannilai" element={<LaporanNilai />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
