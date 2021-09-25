import { GlobalStyle } from './globalStyle'
import { Home, About, Projects, Contact, Logo, ToTopBtn, ScrollIndicator, SmoothScrolling } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ScrollIndicator />
      <ToTopBtn />
      <SmoothScrolling >
        <Home />
        <About />
        <Projects />
        <Contact />
      </SmoothScrolling>
    </>
  );
}

export default App;
