import React from "react";
import EyeIcon from "../icons/EyeIcon";
import EyeSlashIcon from "../icons/EyeSlashIcon";

export default function VisibilityButton({ visibility, setVisibility, className }) {

  return (
    <button
      type="button"
      onClick={e => setVisibility(prev => !prev)}
      className={[className]}
    >
      {visibility ? (
        <EyeIcon />
      ) : (
        <EyeSlashIcon />
      )}
    </button>
  );
}
