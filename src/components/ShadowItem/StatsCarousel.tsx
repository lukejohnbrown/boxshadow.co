import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import {
  ShadowsJsonLayers,
} from "../../types/graphql"
import { ShadowLayerTitle } from "./styles";
import ShadowStats from "./ShadowStats";

type StatsCarouselProps = {
  shadowLayers: ShadowsJsonLayers[]
}

const StatsCarousel: React.FC<StatsCarouselProps> = ({ shadowLayers }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={78}
      infinite
      totalSlides={shadowLayers.length}
    >
      <Slider>
        {shadowLayers &&
          shadowLayers.map(
            ({ color, alpha, blur, spread, xValue, yValue }, idx) => (
              <Slide index={idx} key={idx}>
                <ShadowStats
                  shadowStats={[
                    {
                      statTitle: "Color",
                      statDetail: color,
                    },
                    {
                      statTitle: "Alpha",
                      statDetail: alpha,
                    },
                    {
                      statTitle: "Blur",
                      statDetail: blur,
                    },
                    {
                      statTitle: "Offset-X",
                      statDetail: xValue,
                    },
                    {
                      statTitle: "Offset-Y",
                      statDetail: yValue,
                    },
                  ]}
                />
              </Slide>
            )
          )}
      </Slider>
      <DotGroup className="shadowitem__dotgroup" />
    </CarouselProvider>
  )
}

export default StatsCarousel;
