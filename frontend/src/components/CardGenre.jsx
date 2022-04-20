export default function CardGenre(props) {
  const { name } = props;
  return (
    <div className="cardgenre">
      <button type="submit">{name}</button>
    </div>
  );
}
