import { buildCloudinaryUrl } from "../functions/buildCloudinaryUrl";
import "../css/Player.css";

export function Player({ nickName, label, character, country }) {
  return (
    <main className="player-display">
      <div className="player-main">
        <section className="player-container">
          <img
            className="card-layer frame"
            src="https://res.cloudinary.com/dq5ffjlgd/image/upload/ui_card_img_rarity_05_super_star.png"
          />
          {/* <img
          className="card-layer second-frame"
          src="https://res.cloudinary.com/dq5ffjlgd/image/upload/TOUGHNESS_SSR_DREAM_FESTIVAL"
        /> */}
          <img
            className="card-layer player"
            src={buildCloudinaryUrl({ nickName, country, character })}
          />
        </section>
        <footer className="footer">
          <h1>{label}</h1>
        </footer>
      </div>
    </main>
  );
}
