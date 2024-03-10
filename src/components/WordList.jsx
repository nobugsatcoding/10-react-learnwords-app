import { useState } from 'react';
import wordslist from '../data/wordslist';

export const WordList = () => {
    const [yesIcon, setYesIcon] = useState('Yes')

    const showIcon = () => {
        
    }

  return (
    <div className="wordList">
      {wordslist.map((word) => (
        <div className="enLtWord">
          <div className="voteIcon">
            <div className='yes'onClick={showIcon()}>{yesIcon}</div>
            <div className='no'>No</div>
          </div>
          <div key={word.id}>
            <p>{word.eng}</p>
            <p style={{ visibility: 'hidden' }}>{word.lt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
