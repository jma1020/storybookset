import React from "react";
import "./modal.css";

interface ModalProps {
  backgroundColor?: string;
  size?: "mini" | "full";
  label: string;
  show: boolean;
  onClose?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Modal = ({
  show = false,
  size = "mini",
  backgroundColor,
  label,
  ...props
}: ModalProps) => {
  const mode = show ? "storybook-modal--show" : "storybook-modal--noshow";
  return (
    <div
      className={["storybook-modal", `storybook-modal--${size}`, mode].join(
        " ",
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </div>
  );
};
