import { useState } from "react";
import "../css/Collapsible.css";

export function Collapsible({ children, title }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="collapsible">
      <button className="collapsible-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▲" : "▼"} {title}
      </button>

      <div className={`collapsible-content ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
}
