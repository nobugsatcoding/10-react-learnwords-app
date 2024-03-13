import './App.css';
import { useState } from 'react';
import { SidePanel } from './components/SidePanel';
import { WordList } from './components/WordList';
import wordslist from './data/wordslist';

function App() {
  const [countLikeClick, setCountLikeClick] = useState(wordslist.map(() => 0));
  const [countDislikeClick, setCountDislikeClick] = useState(
    wordslist.map(() => 0),
  );

  return (
    <div className="App">
      <SidePanel
        countLikeClick={countLikeClick}
        countDislikeClick={countDislikeClick}
        totalWords={wordslist.length}
        
      />
      <WordList
        countLikeClick={countLikeClick}
        setCountLikeClick={setCountLikeClick}
        countDislikeClick={countDislikeClick}
        setCountDislikeClick={setCountDislikeClick}
        totalWords={wordslist.length}
      />
    </div>
  );
}

export default App;
