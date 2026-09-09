import { About } from './sections/About';
import { Expertise } from './sections/Expertise';
import { Projects } from './sections/Projects';
import { History } from './sections/History';
import { Contact } from './sections/Contact';
import { MoreProjects } from './sections/MoreProjects';
import { COLORS } from '../constants/colors';

export function RightColumn() {
  return (
    <main
      id="main-content"
      className="right-scroll"
      style={{
        marginLeft: 'min(38%, 420px)',
        marginTop: '60px',
        minHeight: 'calc(100vh - 60px)',
        backgroundColor: COLORS.canvas,
        overflowY: 'auto',
        padding: '60px 56px 80px',
      }}
    >
      <About />
      <Expertise />
      <Projects />
      <History />
      <MoreProjects />
      <Contact />
    </main>
  );
}
