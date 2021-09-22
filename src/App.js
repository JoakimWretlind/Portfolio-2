import { GlobalStyle } from './globalStyle'
import { Home, About, Projects, Contact, Footer, Logo } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
