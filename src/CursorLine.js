import React, { useEffect, useRef } from "react";

const CursorLine = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let mouseMoved = false;

    const pointer = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
    };

    const params = {
      pointsNumber: 40,
      widthFactor: 0.2,
      mouseThreshold: 0.6,
      spring: 0.4,
      friction: 0.5,
    };

    const trail = new Array(params.pointsNumber);
    for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      };
    }

    const updateMousePosition = (eX, eY) => {
      pointer.x = eX;
      pointer.y = eY;
    };

    const update = (t) => {
      if (!mouseMoved) {
        pointer.x =
          (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
          window.innerWidth;
        pointer.y =
          (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
          window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 0; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      window.requestAnimationFrame(update);
    };

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("click", (e) => {
      updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("mousemove", (e) => {
      mouseMoved = true;
      updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("touchmove", (e) => {
      mouseMoved = true;
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    });

    setupCanvas();
    update(0);
    window.addEventListener("resize", setupCanvas);

    return () => {
      window.removeEventListener("click", updateMousePosition);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
    />
  );
};

export default CursorLine;
