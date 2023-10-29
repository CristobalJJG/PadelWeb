import borders from "./borders";
import colors from "./colors";
import radius from "./radius";
import shadows from "./shadows";
import sizes from "./sizes";
import transition from "./transition";
import typography from "./typography";
import blur from "./blur";
import variants from "./variants";

const foundations = {
  blur,
  borders,
  colors,
  radius,
  sizes,
  shadows,
  transition,
  ...typography,
  variants
};

export default foundations;
