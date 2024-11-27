import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function Dashboard() {
  return (
    <Container>
      <div className="content-wrapper">
        <div className="content-header">
          <h1>Dashboard</h1>
        </div>
        <div className="content-body">
          <Card style={{ width: "18rem", border: "0px" }}>
            <Card.Body>
              <i className="fas fa-clone fa-3x"></i>
              <Card.Text>Kelas</Card.Text>
              <Card.Title>0</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", border: "0px" }}>
            <Card.Body>
              <i className="fas fa-user-friends fa-3x"></i>
              <Card.Text>Siswa</Card.Text>
              <Card.Title>0</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", border: "0px" }}>
            <Card.Body>
              <i className="fas fa-edit fa-3x"></i>
              <Card.Text>Ujian</Card.Text>
              <Card.Title>0</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", border: "0px" }}>
            <Card.Body>
              <i className="fas fa-clock fa-3x"></i>
              <Card.Text>Kelas</Card.Text>
              <Card.Title>0</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
