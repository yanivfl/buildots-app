import React, { useRef, useEffect, memo } from 'react';
import { pannellum } from './pannellum';
import './ExplorerPage.css';

const Panorama = memo(({ url, id }) => {
  const viewer = useRef(null);

  useEffect(() => {
    viewer.current = pannellum.viewer(id, {
      autoLoad: true,
      panorama: url,
      dynamicUpdate: true,
      compass: true,
      friction: 0,
      mouseZoom: true,
      showZoomCtrl: true,
      showFullscreenCtrl: true,
      type: 'equirectangular',
    });

    return () => {
      viewer.current.destroy();
    };
  }, [id, url]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <div className="panorama" id={id} />;
});

export { Panorama };
