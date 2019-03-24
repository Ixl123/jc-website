import React from 'react';
// import theme from 'styled-theming';

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from 'react-simple-maps';
import GeoWorldMap from './world-50m.json';

// const MapColor = theme('mode', {
//   light: props => props.theme.colors.white,
//   dark: props => props.theme.colors.black,
// });

const ReactMaps = () => {
  return (
    <ComposableMap
      projectionConfig={{
        scale: 205,
        rotation: [-11, 0, 0],
      }}
      width={980}
      height={551}
      style={{
        width: `100%`,
        height: `auto`,
      }}
    >
      <ZoomableGroup center={[0, 20]} disablePanning>
        <Geographies geography={GeoWorldMap}>
          {(geographies, projection) =>
            geographies.map((geography, index) => (
              <Geography
                key={index}
                geography={geography}
                projection={projection}
                style={{
                  default: {
                    stroke: `#F4F4F4`,
                    strokeWidth: 0.5,
                    outline: `none`,
                  },
                  hover: {
                    stroke: `#F4F4F4`,
                    strokeWidth: 0.5,
                    outline: `none`,
                  },
                  pressed: {
                    stroke: `#F4F4F4`,
                    strokeWidth: 0.5,
                    outline: `none`,
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default ReactMaps;
