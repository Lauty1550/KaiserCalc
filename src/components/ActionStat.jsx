import "../css/ActionStat.css";

export function ActionStat({ value, action, actionLabel }) {
  return (
    <main className="action-stat">
      <section className="total-label">
        <h2> {value}</h2>
      </section>
      <figure className="img-container">
        <img
          className="image-action"
          src={`https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Match/${action}.png`}
          alt={action}
        />
      </figure>
      <footer className="action-label">
        {" "}
        <h2>{actionLabel}</h2>
      </footer>
    </main>
  );
}
