import './App.css';
import { useEffect, useState } from 'react';
import { SidePanel } from './components/SidePanel';
import { WordList } from './components/WordList';
import wordslist from './data/wordslist';

function App() {
  const [countLikeClick, setCountLikeClick] = useState(
    JSON.parse(localStorage.getItem('countLikeClick')) ||
      wordslist.map(() => 0),
  );
  const [countDislikeClick, setCountDislikeClick] = useState(
    JSON.parse(localStorage.getItem('countDislikeClick')) ||
      wordslist.map(() => 0),
  );

  useEffect(() => {
    localStorage.setItem('countLikeClick', JSON.stringify(countLikeClick));
  }, [countLikeClick]);

  useEffect(() => {
    localStorage.setItem(
      'countDislikeClick',
      JSON.stringify(countDislikeClick),
    );
  }, [countDislikeClick]);

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
