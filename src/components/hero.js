import React from "react";

import Profile from "./profile";
import { useTrail, animated } from "react-spring";

const Hero = () => {
  const items = [
    <span key="a" className="heaviest">
      {" "}
      Yo! &nbsp;
    </span>,
    <span key="b">
      I&apos;m <span className="low-light-red">Paulie Rodriguez</span>
    </span>,
    <span key="c">a UX Designer,</span>,
    <span key="d">and Software Developer.</span>,
  ];

  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 250 },
    from: { transform: "translate(0,100%)" },
    to: { transform: "translate(0%,0)" },
  });

  return (
    <div className="lg:py-16 py-8 flex lg:flex-row flex-col yeseva font-bold italic xl:text-5xl md:text-4xl text-3xl text-4xl text-blue-900 leading-tight justify-between lg:items-center">
      <div className="items-center">
        <div className="lg:mb-0 mb-4 flex flex-col items-start">
          {trail.map(({ ...rest }, index) => (
            <div id="mask" className="relative overflow-hidden" key={index}>
              <animated.h1
                className={`trails-text  ${items[index].class}`}
                style={{ ...rest }}
              >
                {items[index]}
              </animated.h1>
            </div>
          ))}
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Hero;
