import { useState } from 'react';
import { GrLike, GrDislike } from 'react-icons/gr';
import wordslist from '../data/wordslist';

export const WordList = () => {
  const [yesIcon, setYesIcon] = useState(wordslist.map(() => 'Yes'));
  const [noIcon, setNoIcon] = useState(wordslist.map(() => 'No'));

  const [wordVisibility, setWordVisibility] = useState(
    wordslist.map(() => ({yes:false, no:false})),
  );

  const showYesIcon = (index) => {
    const updateVisibility = [...wordVisibility];
    updateVisibility[index] = {...updateVisibility[index], yes: true};
    setWordVisibility(updateVisibility);

    const updatedYesIcons = [...yesIcon];
    updatedYesIcons[index] = <GrLike />;
    setYesIcon(updatedYesIcons);
  };

  const showNoIcon = (index) => {
    const updateVisibility = [...wordVisibility];
    updateVisibility[index] = {...updateVisibility[index], no: true};
    setWordVisibility(updateVisibility);

    const updatedNoIcons = [...noIcon];
    updatedNoIcons[index] = <GrDislike />;
    setNoIcon(updatedNoIcons);
  };

  return (
    <div className="wordList">
      {wordslist.map((word, index) => (
        <div className="enLtWord" key={word.id}>
          <div className="voteIcon">
            <div className="yes" onClick={() => showYesIcon(index)}>
              {wordVisibility[index].yes ? <GrLike /> : yesIcon[index]}
            </div>
            <div className="no" onClick={() => showNoIcon(index)}>
              {wordVisibility[index].no ? <GrDislike /> : noIcon[index]}
            </div>
          </div>
          <div>
            <p>{word.eng}</p>
            <p
              style={{
                visibility: wordVisibility[index].yes || wordVisibility[index].no ? 'visible' : 'hidden',
              }}
            >
              {word.lt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
