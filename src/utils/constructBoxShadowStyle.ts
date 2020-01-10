import hexToRgba from "hex-to-rgba"
import { ShadowsJson } from "../types/graphql";

export type ShadowStyles = Partial<ShadowsJson>;

export const constructBoxShadowStyle = ({
  color,
  alpha,
  blur,
  spread,
  xValue,
  yValue,
}: ShadowStyles): string | undefined => {
  if (!color || !alpha) return;

  const rgbaColor = hexToRgba(color, alpha)
  return `${xValue} ${yValue} ${blur} ${spread} ${rgbaColor}`
}

