import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Typical from "react-typical";
import { Link, animateScroll as scroll } from "react-scroll";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carter Tran</title>
        <meta name="description" content="A website made by yours truly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id="introduction">
          <h1 className={styles.title}>Carter Tran</h1>

          <p className={styles.description}>
            I'm a
            <Typical
              loop={Infinity}
              wrapper="typical"
              steps={[
                " student 📚",
                1000,
                " developer 💻",
                1000,
                "n athlete 🎾",
                1000,
                " musician 🥁",
                1000,
              ]}
            />
          </p>
        </div>

        <div id="skills">
          <h2 className="text-3xl">About Me</h2>
          <div tabIndex={0} className="collapse w-96">
            <div className="collapse-title text-xl font-medium">
              Junior at BASIS Chandler
            </div>
            <div className="collapse-content">
              <p>
                I am currently going to BASIS Chandler, ranked #8 in the nation
                by the US News and World Report. By the end of this year I will
                have taken 17 AP exams, 10 of them having been taken in grades
                8-10. I am also a member of the National Honor Society, Tri-M
                Music Honor Society, and Hack Club.
              </p>
                <Link className="btn btn-outline btn-primary mt-2" activeClass="active" to="education" spy={true} smooth={true} offset={-70} duration={500}>Learn More</Link>
            </div>
          </div>
          <div tabIndex={0} className="collapse w-96">
            <div className="collapse-title text-xl font-medium">
              Aspiring Computer Science Major
            </div>
            <div className="collapse-content">
              <p>
                I have experience programming in Java, Python, C++, HTML, CSS,
                and Javascript. I am currently pursuing a MicroBachelors from
                NYU in Programming &amp; Data Structures on EdX.
              </p>
              <Link className="btn btn-outline btn-primary mt-2" activeClass="active" to="programming" spy={true} smooth={true} offset={-70} duration={500}>Next( )</Link>
            </div>
          </div>
          <div tabIndex={0} className="collapse w-96">
            <div className="collapse-title text-xl font-medium">
              Tennis Player
            </div>
            <div className="collapse-content">
              <p>
                I train at least two hours every day with the goal of playing
                tennis at the college level.
              </p>
              <Link className="btn btn-outline btn-primary mt-2" activeClass="active" to="tennis" spy={true} smooth={true} offset={-70} duration={500}>Second Serve</Link>
            </div>
          </div>
          <div tabIndex={0} className="collapse w-96">
            <div className="collapse-title text-xl font-medium">
              Percussionist
            </div>
            <div className="collapse-content">
              <p>
                I have been a musician for as long as I can remember. I grew up
                playing piano. In 4th grade I started learning how to play the
                violin. In 5th grade I became a percussionist. Although I don't
                play piano or violin anymore, I continue to play the drums and
                mallet percussion. I am the section leader of the BASIS Chandler
                Symphonic Wind Ensemble. I was in Honor Band in 7th grade,
                Regionals in 9th and 10th grade, and eventually will play in
                All-State.
              </p>
              <Link className="btn btn-outline btn-primary mt-2" activeClass="active" to="music" spy={true} smooth={true} offset={-70} duration={500}>Next Measure</Link>
            </div>
          </div>
        </div>
        <div id="education" className="h-screen">
          <h2 className="text-2xl">Education</h2>
        </div>
        <div id="programming" className="h-screen">
          <h2 className="text-2xl">Programming</h2>
        </div>
        <div id="tennis" className="h-screen">
          <h2 className="text-2xl">Tennis</h2>
        </div>
        <div id="music" className="h-screen">
          <h2 className="text-2xl">Music</h2>
        </div>
      </main>

      <footer className="items-center p-4 footer text-base-content">
        <div className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © 2021 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/cartertran/">
            <svg
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://github.com/cartert27/">
            <svg
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a href="https://instagram.com/cartert27/">
            <svg
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>
          <a href="mailto:carter.tran@gmail.com">
            <svg
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Gmail</title>
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
