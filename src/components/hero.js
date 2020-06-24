import React from "react";

import Profile from "./profile";
import { useTrail, animated } from "react-spring";

const Hero = () => {
  const items = [
    <h2 key="a">Yo! 👋🏽</h2>,
    <h2 key="b">
      I&apos;m <span className="low-light-red">Paulie Rodriguez</span>
    </h2>,
    <h2 key="c">a UX Designer,</h2>,
    <h2 key="d">and Software Developer.</h2>,
  ];

  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 250 },
    from: { transform: "translate(0,100%)" },
    to: { transform: "translate(0%,0)" },
  });

  return (
    <div className="lg:py-16 py-8 mx-8 md:mx-32 xl:mx-48 flex lg:flex-row flex-col yeseva xl:text-5xl md:text-4xl text-3xl text-4xl text-blue-900 leading-tight justify-between lg:items-center">
      <div className="items-center">
        <div className="lg:mb-0 mb-4 flex flex-col items-start">
          {trail.map(({ ...rest }, index) => (
            <div id="mask" className='relative overflow-hidden' key={index}>
            <animated.div
              className={`trails-text  ${items[index].class}`}
              style={{ ...rest }}
            >
              {items[index]}
            </animated.div>
            </div>
          ))}
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default Hero;
