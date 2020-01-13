import hexToRgba from "hex-to-rgba"
import { ShadowsJsonLayers } from "../types/graphql";

export type ShadowStyles = Partial<ShadowsJsonLayers>;

export const constructBoxShadowStyle = (layers: ShadowStyles[]): string | undefined => {
  let boxShadowCSS = ``;
  layers.forEach(({
    color,
    alpha,
    blur,
    spread,
    xValue,
    yValue,
  }) => {
    if (!color || !alpha) return
    const rgbaColor = hexToRgba(color, alpha);
    const currentBoxShadow = `${xValue} ${yValue} ${blur} ${spread} ${rgbaColor}`;
    if (!boxShadowCSS) {
      boxShadowCSS = currentBoxShadow
    } else {
      boxShadowCSS = `${boxShadowCSS}, ${currentBoxShadow}`
    }
  })

  return boxShadowCSS;
}

