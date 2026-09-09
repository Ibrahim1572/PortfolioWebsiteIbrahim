import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { TopBar } from './components/TopBar';
import { LeftColumn } from './components/LeftColumn';
import { RightColumn } from './components/RightColumn';
import { COLORS } from './constants/colors';
import './index.css';

const SECTION_IDS = ['about', 'expertise', 'projects', 'career-history', 'contact', 'more-projects'];

function App() {
  const [theme, toggleTheme] = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: COLORS.canvas }}>
      <TopBar theme={theme} onToggle={toggleTheme} />

      {/* Desktop two-column layout */}
      <div style={{ display: 'flex' }}>
        <LeftColumn activeSection={activeSection} />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;
