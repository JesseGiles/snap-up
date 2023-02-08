import "./jessecard.css";
import "./flip-transition.css";

function Card2({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        <img src="https://i.imgur.com/MoYm6Hq.png"></img>
      </div>
      <div className="card-front">
        <img src="https://i.imgur.com/YnhXsjQ.png"></img>
      </div>
    </div>
  );
}

export default Card2;
