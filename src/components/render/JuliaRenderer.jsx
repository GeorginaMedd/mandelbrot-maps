import React, { useEffect, useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture';
import newSmoothJuliaShader from '../../shaders/newSmoothJuliaShader';
import MinimapViewer from './MinimapViewer';
import { genericTouchBind } from '../utils';
import WebGLCanvas from './WebGLCanvas';
import { SettingsContext } from '../settings/SettingsContext';

export default function JuliaRenderer(props) {
  // variables to hold canvas and webgl information
  const canvasRef = useRef();
  const miniCanvasRef = useRef();

  const gl = useRef();
  const miniGl = useRef();

  // this multiplier subdivides the screen space into smaller increments
  // to allow for velocity calculations to not immediately decay, due to the
  // otherwise small scale that is being mapped to the screen.
  const screenScaleMultiplier = props.screenmult;

  // read incoming props
  const [{ xy }] = props.controls.xyCtrl;
  // const [{ theta, last_pointer_angle }, setControlRot] = props.controls.rot;
  const [{ z }, setControlZoom] = props.controls.zoomCtrl;
  const maxI = props.maxI; // -> global
  const AA = props.useAA ? 2 : 1;

  const fragShader = newSmoothJuliaShader({
    maxI: maxI,
    AA: AA,
    // showCrosshair: false,
  });

  const miniFragShader = newSmoothJuliaShader({
    maxI: maxI,
    AA: 2,
    // showCrosshair: false,
  });

  const [dragging, setDragging] = useState(false);

  let gtb = genericTouchBind({
    domTarget: canvasRef,
    xyCtrl: props.controls.xyCtrl,
    zoomCtrl: props.controls.zoomCtrl,
    screenScaleMultiplier:
      screenScaleMultiplier / (props.useDPR ? window.devicePixelRatio : 1),
    gl: gl,
    setDragging: setDragging,
  });

  let touchBind = useGesture(gtb.handlers, gtb.config);

  useEffect(touchBind, [touchBind]);

  return (
    <SettingsContext.Consumer>
      {({ settings }) => (
        <div
          className="renderer"
          style={{
            position: 'relative',
          }}
        >
          <WebGLCanvas
            id="julia"
            fragShader={fragShader}
            useDPR={props.useDPR}
            u={{
              zoom: z,
              xy: xy,
              c: props.c,
              maxI: maxI,
              screenScaleMultiplier: screenScaleMultiplier,
            }}
            ref={canvasRef}
            glRef={gl}
            dragging={dragging}
          />
          <MinimapViewer
            fragShader={miniFragShader}
            useDPR={settings.useDPR}
            u={{
              zoom: z,
              xy: xy,
              maxI: maxI,
              c: props.c,
              screenScaleMultiplier: screenScaleMultiplier,
            }}
            canvasRef={miniCanvasRef}
            glRef={miniGl}
            onClick={() => setControlZoom({ z: 1 })}
            show={settings.showMinimap}
          />
        </div>
      )}
    </SettingsContext.Consumer>
  );
}
