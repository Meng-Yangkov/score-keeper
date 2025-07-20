import React,{useState} from "react";
import './ScoreKeeper.scss';

function ScoreKeeper({numPlayers = 3,target = 10}){
  const [scores,setScores ] = useState(new Array(numPlayers).fill(0));
  
  const incrementScore1 = (idx) => {
   setScores(() => {
     const copy = [...scores];
      copy[idx] += 1;
      return copy;
   });
  };

  const incrementScore2 = (i) => {
   setScores((prevScores) => {
     return prevScores.map((score,idx) => {
      if(i === idx ) return score + 1;
      return score;
     })
   });
  };
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  }
  return(
    <div>
      <h1>Score Keepter</h1>
      <ul>
          {scores.map((score,idx) => {
            return <li key={idx}>Player {idx+1} : {score}
            <button onClick={() => incrementScore2(idx)}>+1</button>
            {score >= target && "Winner!"}</li>
          })}
          <button onClick={reset}>Reset</button>
      </ul>
    </div>
  )
}

export default ScoreKeeper;