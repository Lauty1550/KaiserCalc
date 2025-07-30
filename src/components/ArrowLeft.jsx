export function ArrowLeft({ onClick }) {
  return (
    <button
      onClick={() => {
        onClick();
        // DirectionRight();
      }}
    >
      <img
        className="change-view-button"
        src="https://res.cloudinary.com/dq5ffjlgd/image/upload/Icons/Card/arrow-left.png"
      />
    </button>
  );
}
