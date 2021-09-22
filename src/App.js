import { GlobalStyle } from './globalStyle'
import { Home, About, Projects, Contact, Footer } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
