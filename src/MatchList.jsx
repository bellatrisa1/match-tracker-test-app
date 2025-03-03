import React from "react";

const MatchList = ({ matches, isLoading, error }) => {
  if (isLoading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">Ошибка: {error.message}</div>;

  return (
    <div>
      {matches.map((match, index) => (
        <div key={match.time} className="match-item">
          <div className="team">
            <img src="../img/illustrations_role.png" alt="Team Logo" />
            <span>Command №{index + 1}</span>
          </div>

          <div className="score">
            {match.homeScore} - {match.awayScore}
          </div>

          <div className="status-container">
            {match.homeScore > match.awayScore ? (
              <span className="status win">Live</span>
            ) : (
              <span className="status lose">Finished</span>
            )}
          </div>

          <div className="team">
            <span>Command №{index + 2}</span>
            <img src="../img/illustrations_role.png" alt="Team Logo" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
