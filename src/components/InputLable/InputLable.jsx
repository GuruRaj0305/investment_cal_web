export function InputLable ({investment, onSelect}) {
  return (
    <p>
      <label for={investment}>{investment}</label>
      <input
        type="number"
        name={investment}
        required
        onChange={(event) => onSelect(event, investment)}
      ></input>
    </p>
  );
}
