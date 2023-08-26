import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import CityImg from "../assets/city.jpg";

const WelcomePage = () => {
  return (
    <React.Fragment>
      <header className="relative h-[100vh]">
        <div className="absolute inset-1/4 z-40 max-w-2xl text-center text-white lg:left-[35%]">
          <h1 className="mb-3 py-5 text-3xl md:text-6xl lg:mb-5">
            Ready for a Challenge?
          </h1>
          <Link
            to="/challenges"
            className="rounded-md bg-blue-500 px-4 py-2 text-lg hover:bg-blue-400 md:px-6"
          >
            Get Started
          </Link>
        </div>
        <img
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
            “I never realized what I was capable of until I set my first
            challenge here. It's been a transformative experience!” - Alex P.
          </p>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default WelcomePage;
