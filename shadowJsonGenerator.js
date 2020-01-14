const Color = require('color');

const convertShadowToJSON = (boxShadowCSS) =>
  boxShadowCSS.split(", ").map(shadowLayer =>
    shadowLayer.split(" ").reduce((shadowObject, shadowLayerItem, idx) => {
      if (idx === 0) {
        shadowObject["xValue"] = shadowLayerItem;
      }

      if (idx === 1) {
        shadowObject["yValue"] = shadowLayerItem;
      }

      if (idx === 2) {
        shadowObject["blur"] = shadowLayerItem;
      }

      if (idx === 3) {
        shadowObject["spread"] = shadowLayerItem;
      }

      if (idx === 4) {
        const shadowColor = Color(shadowLayerItem).object();
        shadowObject["color"] = Color.rgb(shadowColor.r, shadowColor.g, shadowColor.b).hex();
        shadowObject["alpha"] = shadowColor.alpha.toString();
      }

      return shadowObject;
    }, {})
  );

console.log(JSON.stringify(convertShadowToJSON("0px 16pxß 48px 0px rgba(0,0,0,.175)")));