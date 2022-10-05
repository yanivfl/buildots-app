import React, { useRef, useEffect, memo } from 'react';
import { Space } from 'antd';
import { pannellum } from './pannellum';
import './Panorama.css';
import { FullSizeBox } from '../../../Core';
import chatSvg from '../../../../icons/chatSvg.svg';
import chainSvg from '../../../../icons/chainSvg.svg';

const SideControls = () => (
  <Space className="sideCtrls" direction="vertical">
    <div className="sideCtrl">
      BIM
    </div>
    <div className="sideCtrl">
      <img src={chatSvg} className="ctrlSvg" alt="svg" />
    </div>
    <div className="sideCtrl">
      <img src={chainSvg} className="ctrlSvg" alt="svg" />
    </div>
    <div className="sideCtrl">
      +
    </div>
    <div className="sideCtrl">
      -
    </div>
  </Space>

);
const Panorama = memo(({ url, id }) => {
  const viewer = useRef(null);

  useEffect(() => {
    viewer.current = pannellum.viewer(id, {
      panorama: url,
      autoLoad: true,
      dynamicUpdate: true,
      compass: false,
      friction: 0,
      mouseZoom: false,
      showZoomCtrl: false,
      showFullscreenCtrl: false,
      type: 'equirectangular',
    });

    return () => {
      viewer.current.destroy();
    };
  }, [id, url]);

  return (
    <FullSizeBox position="relative">
      <div className="panorama" id={id} />
      <div
        className="viewCtrl"
        style={{}}
        id="pan-up"
        onClick={() => {
          viewer.current.setPitch(viewer.current.getPitch() + 10);
        }}
      >
        &#9650;
      </div>
      <div
        className="viewCtrl"
        id="pan-down"
        onClick={() => {
          viewer.current.setPitch(viewer.current.getPitch() - 10);
        }}
      >
        &#9660;
      </div>
      <div
        className="viewCtrl"
        id="pan-left"
        onClick={() => {
          viewer.current.setYaw(viewer.current.getYaw() - 10);
        }}
      >
        &#9664;
      </div>
      <div
        className="viewCtrl"
        id="pan-right"
        onClick={() => {
          viewer.current.setYaw(viewer.current.getYaw() + 10);
        }}
      >
        &#9654;
      </div>
      <SideControls />
    </FullSizeBox>

  );
});

export { Panorama };
