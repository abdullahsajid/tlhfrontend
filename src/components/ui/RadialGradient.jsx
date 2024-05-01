import React from "react";

const RadialGradient  = ({
  type = "circle",
  from = "rgba(120,119,198,0.5)",
  to = "hsla(0, 0%, 0%, 0)",
  size = 1500,
  origin = "bottom",
  className,
}) => {
  const styles = {
    position: "absolute",
    pointerEvents: "none",
    inset: 0,
    zIndex:-1,
    backgroundImage: `radial-gradient(${type} ${size}px at ${origin}, ${from}, ${to})`,
  };
  return <div className={className} style={styles} />;
};

export default RadialGradient;
  