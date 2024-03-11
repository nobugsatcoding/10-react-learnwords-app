import { useState } from 'react';
import { GrLike } from 'react-icons/gr';
import wordslist from '../data/wordslist';

export const WordList = () => {
  const [yesIcon, setYesIcon] = useState('Yes');
  const [isYesClicked, setIsYesClicked] = useState(false);

  const showIcon = () => {
    if (!isYesClicked) {
      setYesIcon(<GrLike />);
      setIsYesClicked(true);
    }
  };

  return (
    <div className="wordList">
      {wordslist.map((word) => (
        <div className="enLtWord" key={word.id}>
          <div className="voteIcon">
            <div className="yes" onClick={showIcon}>
              {yesIcon}
            </div>
            <div className="no">No</div>
          </div>
          <div>
            <p>{word.eng}</p>
            <p style={{ visibility: 'hidden' }}>{word.lt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
