import "../css/PlayerStats.css";
export function ArrowRight({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick();
        // DirectionLeft();
      }}
      className="arrow-buttons-button"
    >
      <img
        className="change-view-button"
        src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/arrow-right.png"
      />
    </button>
  );
}
