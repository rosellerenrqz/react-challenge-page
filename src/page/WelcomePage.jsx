import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CityImg from "../assets/city.jpg";

const WelcomePage = () => {
  const { scrollY } = useScroll();

  const yCity = useTransform(scrollY, [0, 200], [0, -300]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.3]);
  const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 150, 300]);

  //1st value number of pixels to be scrolled.
  //2nd value array of breakpoints pixels
  //3rd value array of breakpoints and between those breakpoints that should transformed, opacity after
  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 900],
    [1, 0.5, 0.3, 0],
  );

  return (
    <React.Fragment>
      <header className="relative h-[100vh]">
        <motion.div
          style={{ scale: scaleText, y: yText }}
          className="absolute inset-1/4 z-10 max-w-2xl text-center text-white lg:left-[35%]"
        >
          <h1 className="mb-3 py-5 text-3xl md:text-6xl lg:mb-5">
            Ready for a Challenge?
          </h1>
          <Link
            to="/challenges"
            className="rounded-md bg-blue-500 px-4 py-2 text-lg hover:bg-blue-400 md:px-6"
          >
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: opacityCity, y: yCity }}
          src={CityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </header>
      <main className="mx-auto w-[50%] md:my-24">
        <section className="my-10 md:my-16">
          <h1 className="pb-5 text-2xl font-bold text-cyan-400 md:text-4xl">
            There's never been a better time.
          </h1>
          <p className="text-sm text-white md:text-base">
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it's personal growth, professional
            achievements, or just for fun, we've got you covered.
          </p>
        </section>

        <section className="my-16">
          <h1 className="pb-5 text-2xl font-bold text-cyan-400 md:text-4xl">
            Why Challenge Yourself?
          </h1>
          <p className="text-sm text-white md:text-base">
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section className="my-16">
          <h1 className="pb-5 text-2xl font-bold text-cyan-400 md:text-4xl">
            Features
          </h1>
          <p className="text-sm text-white md:text-base">
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </p>
        </section>

        <section className="my-16">
          <h1 className="pb-5 text-2xl font-bold text-cyan-400 md:text-4xl">
            Join Thousands Embracing The Challenge
          </h1>
          <p className="text-sm text-white md:text-base">
            “Join the ranks of those who boldly embrace challenges, for in their
            pursuit, they discover the strength and resilience that transform
            dreams into reality.”
          </p>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default WelcomePage;
