import "../css/PlayerSelector.css";

export function FormatedOptions({ data }) {
  return (
    <main className="character-selection">
      <img src={data.image} style={{ width: 40, marginRight: 10 }} />
      <span className="label-text">{data.label}</span>
    </main>
  );
}
