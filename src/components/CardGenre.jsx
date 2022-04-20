import react from "react";

export default function CardGenre(props) {
  return (
    <div className="cardgenre">
      <button>{props.name}</button>
    </div>
  );
}
