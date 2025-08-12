import "../css/PlayerSelector.css";

export function FormatedOptions({ data }) {
  return (
    <main className="character-selection">
      <img src={data.image} />
      <span className="label-text">{data.label}</span>
    </main>
  );
}
