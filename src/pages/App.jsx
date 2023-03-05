import "../styles/App.css";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <Container>
      <Navbar />
      <div className="h-screen bg-biruMuda"></div>
      <Footer />
    </Container>
  );
}

export default App;
