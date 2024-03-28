import React from "react";
import ParticleImage, { forces, Vector } from "react-particle-image";

import src from "./wtf2.png";

export default function App() {
    return (
        <div className="App w-3/4 m-auto">
            <ParticleImage
                width={Number(window.innerWidth * 0.75)}
                height={Number(500)}

                scale={0.17}
                maxParticles={10000}
                backgroundColor="transparent"
                src={src}
                mouseMoveForce={(x, y) => forces.disturbance(x, y, 60)}
                touchMoveForce={(x, y) => forces.disturbance(x, y, 60)}
                mouseDownForce={(x, y) => forces.disturbance(x, y, 100)}
                particleOptions={{
                    mass: () => 40,
                    filter: ({ x, y, image }) => {
                        const pixel = image.get(x, y);
                        return pixel.r === 255;
                    },
                    color: () => "#90CAF9",
                    friction: () => 0.15,
                    initialPosition: ({ canvasDimensions }) => {
                        return new Vector(
                            canvasDimensions.width / 2,
                            canvasDimensions.height / 2
                        );
                    }
                }}
            />
        </div>
    );
}
