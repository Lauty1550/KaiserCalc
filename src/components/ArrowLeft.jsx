import "../css/PlayerStats.css";
export function ArrowLeft({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick();
        // DirectionRight();
      }}
      className="arrow-buttons-button"
    >
      <img
        className="change-view-button"
        src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/arrow-left.png"
      />
    </button>
  );
}
