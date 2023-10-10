const transition = {
  property: {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  easing: {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  duration: {
    "ultra-fast": ".05s",
    faster: ".1s",
    fast: ".15s",
    normal: ".2s",
    slow: ".3s",
    slower: ".4s",
    "ultra-slow": ".5s",
  },
};

export default transition;
