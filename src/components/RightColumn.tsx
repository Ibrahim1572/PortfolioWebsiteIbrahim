import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { History } from './sections/History';
import { Contact } from './sections/Contact';

export function RightColumn() {
  return (
    <main
      id="main-content"
      className="right-scroll"
      style={{
        marginLeft: 'min(38%, 420px)',
        marginTop: '60px',
        minHeight: 'calc(100vh - 60px)',
        backgroundColor: 'var(--color-canvas)',
        overflowY: 'auto',
        padding: '60px 56px 80px',
      }}
    >
      <About />
      <Skills />
      <Projects />
      <History />
      <Contact />
    </main>
  );
}
