const chroma = require("chroma-js");
const colors = ["#1a1a1a", "#2d2d2d", "#4a4a4a", "#e85d3a", "#ff8a65", "#a0a0a0", "#f0d78c", "#c9a84c"];
for (const c of colors) {
  const oklch = chroma(c).oklch();
  console.log(c + " -> oklch(" + oklch[0].toFixed(3) + " " + oklch[1].toFixed(3) + " " + oklch[2].toFixed(3) + ")");
}
