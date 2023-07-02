import React from "react";

export default function Button({ icons, onClick }) {
  return (
    <a href="#" onClick={onClick} className="button">
      {icons}
    </a>
  );
}