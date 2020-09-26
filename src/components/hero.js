import React from "react";
import Miroodle from "./miroodle";
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
    <span key="c">a Designer,</span>,
    <span key="d">and Coder.</span>,
  ];

  const trail = useTrail(items.length, {
    config: { mass: 15, tension: 2000, friction: 250 },
    from: { transform: "translate(0,100%)" },
    to: { transform: "translate(0%,0)" },
  });

  return (
    <div className="">
      <div className="lg:py-16 py-8 flex lg:flex-row flex-col yeseva font-bold italic sm:text-5xl text-4xl text-blue-900 leading-tight justify-between items-center mx-auto">
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
      <div className="flex lg:flex-row flex-col font-regular text-blue-900 font-medium">
        <div className="lg:w-1/2">
          <Miroodle />
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-around">
          <div>
            <h2 className="text-2xl sm:text-4xl yeseva italic font-bold md:leading-tight leading-8">
              I&apos;m a hybrid between{" "}
              <span className="low-light-blue">code</span><span> &amp; </span>
              <span className="low-light-yellow">design.</span>
              <p className="text-2xl sm:text-4xl yeseva italic font-bold md:leading-tight leading-8">
                What can I say? I like the visual side of things!
              </p>
            </h2>
          </div>
        </div>
      </div>
      <p className='text-2xl josefin'>Im currently transitioning this website to a fan page for global funk music, stay tuned</p>

    </div>
  );
};

export default Hero;
