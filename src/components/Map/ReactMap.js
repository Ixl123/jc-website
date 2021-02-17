import React from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import Marker from './Marker';
import GeoWorldMap from '../world-50m.json';

const placesIHaveVisited = [
  {
    name: 'North America',
    coordinates: [-100.1667, 48.1667],
  },
  { name: 'Germany', coordinates: [10.45412, 51.45412] },
  { name: 'New Zealand', coordinates: [174.885971, -40.90055] },
  { name: 'Oman', coordinates: [55.923255, 21.512583] },
  { name: 'Switzerland', coordinates: [8.227512, 46.818188] },
];

const variants = {
  start: {
    transition: { staggerChildren: 1, delayChildren: 1 },
  },
  end: {
    transition: { staggerChildren: 1 },
  },
};
const ReactMap = () => {
  const item = {
    start: { opacity: 0 },
    end: { opacity: 1 },
  };
  return (
    <>
      <ComposableMap
        width={980}
        height={551}
        style={{
          width: `100%`,
          height: `auto`,
        }}
      >
        <Geographies geography={GeoWorldMap}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    stroke: `#F4F4F4`,
                    strokeWidth: 0.5,
                    outline: `none`,
                    fill: `var(color-)`,
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
        <motion.g variants={variants} initial={'start'} animate={'end'}>
          {placesIHaveVisited.map(({ name, coordinates, markerOffset }, index) => (
            <Marker
              key={name}
              coordinates={coordinates}
              markerOffset={markerOffset}
              name={name}
              variants={item}
            ></Marker>
          ))}
        </motion.g>
      </ComposableMap>
    </>
  );
};

export default ReactMap;
