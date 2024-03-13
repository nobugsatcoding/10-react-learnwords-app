export const SidePanel = ({
  countLikeClick,
  countDislikeClick,
  totalWords,
}) => {
  const totalLikes = countLikeClick.reduce((acc, curr) => acc + curr, 0);
  const totalDislikes = countDislikeClick.reduce((acc, curr) => acc + curr, 0);
  const totalClicks = totalLikes + totalDislikes;

  const totalScorePercentage =
    totalClicks > 0
      ? `${((totalLikes / totalClicks) * 100).toFixed(0)}%`
      : '0%';

  return (
    <div>
      <div className="sidePanel">
        You have {totalWords}
        <br />
        words in list
        <br />
        Your total
        <br />
        score is {totalScorePercentage}
      </div>
    </div>
  );
};
