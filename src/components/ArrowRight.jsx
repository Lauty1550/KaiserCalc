export function ArrowRight({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick();
        // DirectionLeft();
      }}
    >
      <img
        className="change-view-button"
        src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/arrow-right.png"
      />
    </button>
  );
}
