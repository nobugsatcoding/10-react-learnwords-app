import './App.css';
import { SidePanel } from './components/SidePanel';
import { WordList } from './components/WordList';

function App() {
  return <div className="App">
    <SidePanel />
    <WordList/>
  </div>;
}

export default App;
