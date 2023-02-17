import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'
import SKills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';



function App() {
  return (
    <>
      <Header/>
      <main claaName='main'>
        <Home/>
        <About/>
        <SKills/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
