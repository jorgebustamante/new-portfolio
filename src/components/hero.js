import React from "react";
import Miroodle from "./miroodle";
import Profile from "./profile";
// import { useTrail, animated } from "react-spring";

const Hero = () => {
  // const items = [
  //   <span key="a" className="heaviest">
  //     {" "}
  //     Yo! &nbsp;
  //   </span>,
  //   <span key="b">
  //     I&apos;m&nbsp;
  //   </span>,
  //   <span className="low-light-red" key="c">
  //     Paulie
  //     </span>,
  //   <span className="low-light-red" key="d">
  //      Rodriguez.
  //      </span>,
  // ];

  // const trail = useTrail(items.length, {
  //   config: { mass: 15, tension: 2000, friction: 250 },
  //   from: { transform: "translate(0,100%)" },
  //   to: { transform: "translate(0%,0)" },
  // });

  return (
    <div className="">
      <div className="pt-8 flex lg:flex-row flex-col yeseva font-bold text-5xl sm:text-6xl lg:text-7xl text-ink leading-tight justify-between mx-auto">
        <div className="lg:w-1/2 lg:self-center">
          <div className="lg:mb-0 mb-4 flex flex-wrap items-start">
            <span >Yo!&nbsp;</span>{" "}
            <span >I&apos;m&nbsp;</span>{" "}
            <span className="low-light-red">Paulie</span>
            <span className="low-light-red">Rodriguez.&nbsp;</span>
            {/* {trail.map(({ ...rest }, index) => (
              <h1 id="mask" className="" key={index}>
                <animated.p
                  className={`trails-text  ${items[index].class}`}
                  style={{ ...rest }}
                >
                  {items[index]}
                </animated.p>
              </h1>
            ))} */}
          </div>
        </div>
        <Profile />
      </div>
      <div className="flex lg:flex-row flex-col font-regular text-ink font-medium bottom-24 relative lg:static">
        <div className="lg:w-1/2">
          <Miroodle />
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-around">
          <div>
            <h2 className="text-2xl sm:text-4xl yeseva font-bold md:leading-tight leading-8">
              I&apos;m a hybrid between{" "}
              <span className="low-light-blue">code</span>
              <span> &amp; </span>
              <span className="low-light-yellow">design.</span>
              <p className="text-2xl sm:text-4xl yeseva font-bold md:leading-tight leading-8">
                What can I say? I like the visual side of things!
              </p>
            </h2>
          </div>
        </div>
      </div>
      <p className="text-2xl josefin">
        Im currently transitioning this website to a fan page for global funk
        music, stay tuned
      </p>
    </div>
  );
};

export default Hero;
