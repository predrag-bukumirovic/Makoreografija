import React from "react";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>Oops!</h1>
      <p>
        404 GREŠKA - stranica nije pronadjena, stranica je izbrisana ili je
        premeštena.
      </p>
      <a href="/">Povratak na početnu</a>
    </div>
  );
}
