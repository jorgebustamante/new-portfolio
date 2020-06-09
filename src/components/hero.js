import React from "react";

import Profile from "./profile";
import { useTrail, animated } from "react-spring";

const Hero = () => {
  const items = [
    <p key="a">Yo! 👋🏽</p>,
    <p key="b">
      I&apos;m <span className="low-light-red">Paulie Rodriguez</span>
    </p>,
    <p key="c">a UX Designer,</p>,
    <p key="d">and Software Developer.</p>,
  ];

  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 200 },
    from: { transform: "translate(0,60%)" },
    to: { transform: "translate(0%,0)" },
  });

  return (
    <div className="lg:py-16 py-8 mx-8 md:mx-32 flex lg:flex-row flex-col josefin xl:text-5xl md:text-4xl text-3xl text-4xl text-gray-800 leading-tight justify-between lg:items-center">
      <div className="items-center">
        <div className="lg:mb-0 mb-4 flex flex-col items-start">
          {trail.map(({ ...rest }, index) => (
            <animated.div
              key={index}
              className={`trails-text  ${items[index].class}`}
              style={{ ...rest }}
            >
              {items[index]}
            </animated.div>
          ))}
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Hero;
