import './App.css';
import { useEffect, useState } from 'react';
import { SidePanel } from './components/SidePanel';
import { WordList } from './components/WordList';
import wordslistTest from './data/wordslistTest';

function App() {
  const [countLikeClick, setCountLikeClick] = useState(
    JSON.parse(localStorage.getItem('countLikeClick')) ||
      wordslistTest.map(() => 0),
  );
  const [countDislikeClick, setCountDislikeClick] = useState(
    JSON.parse(localStorage.getItem('countDislikeClick')) ||
      wordslistTest.map(() => 0),
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
        totalWords={wordslistTest.length}
      />
      <WordList
        countLikeClick={countLikeClick}
        setCountLikeClick={setCountLikeClick}
        countDislikeClick={countDislikeClick}
        setCountDislikeClick={setCountDislikeClick}
        totalWords={wordslistTest.length}
      />
    </div>
  );
}

export default App;
