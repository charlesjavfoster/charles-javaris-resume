import React from 'react';
import Resume from './components/Resume';
import Projects from './projects/Projects';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <div className="container">
        <Resume />
        <Projects />
      </div>
      <footer>
        &copy; {new Date().getFullYear()} Charles Javaris. All rights reserved.
      </footer>
    </div>
  );
};

export default App;