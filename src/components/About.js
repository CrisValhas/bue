import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/About.css";

function BoxText({ text, drop, arrayToRender }) {
  return (
    <div>
      {arrayToRender.includes(text) ? (
        <motion.div
          className="About-box"
          initial={{ y: 0 }}
          animate={
            drop
              ? {
                  y: 150,
                  transition: { duration: Math.random() * 2 },
                  opacity: 0,
                }
              : {
                  y: 0,
                  x: 0,
                  transition: { duration: Math.random() * 2 },
                }
          }
          drag
          dragConstraints={{
            top: -300,
            left: -600,
            right: 500,
            bottom: 480,
          }}
        >
          <p className="About-text"> {text} </p>
        </motion.div>
      ) : (
        <motion.div
          className="About-box"
          initial={{ y: 0 }}
          drag
          dragConstraints={{
            top: -300,
            left: -600,
            right: 500,
            bottom: 480,
          }}
        >
          <p className="About-text"> {text} </p>
        </motion.div>
      )}
    </div>
  );
}

export default function About() {
  let stringAbout =
      "Somos un equipo que crea aplicaciones modernas e intuitivas usando las tecnologías más demandadas del mercado. En Bue! desarrollamos tu idea. Buenas apps, buenos momentos.",
    stringAbout1 = "Somos más que un equipo",
    stringAbout2 = "desarrollamos más que aplicaciones",
    stringAbout3 = "Bue! crea apps, intuitivas";
  let arrayAbout = stringAbout.split(" ");
  let arrayAbout1 = stringAbout1.split(" ");
  let arrayAbout2 = stringAbout2.split(" ");
  let arrayAbout3 = stringAbout3.split(" ");

  let allPhrases = [arrayAbout1, arrayAbout2, arrayAbout3];

  let [count, setCount] = useState(0);
  const [arrayToRender, setArrayToRender] = useState(allPhrases[count]);
  const [drop, setDrop] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!drop) {
      setDrop(!drop);
    }
    if (drop) {
      if (count < 3) {
        setCount(++count);
      }
      if (count === 2) {
        setCount(0);
      }
      setArrayToRender(allPhrases[count]);
      setDrop(!drop);
    }
  };
  let random = true;

  return (
    <motion.div
      className="About"
      initial={{ scale: 0, transition: { duration: 0.1 } }}
      animate={{ x: 0, scale: 1, transition: { duration: 0.7 } }}
    >
      <button onClick={(e) => handleClick(e)}>
        <motion.div className={"About-dashboard"}>
          {arrayAbout?.map((world, indice) => {
            random = !random;
            return (
              <BoxText
                text={world}
                key={indice}
                drop={drop}
                arrayToRender={arrayToRender}
              />
            );
          })}
          <motion.div className={"About-dashboard-text"} >{drop? arrayToRender : null}</motion.div>
        </motion.div>
      </button>
      <Link className="Back" to="/">
        Back
      </Link>
    </motion.div>
  );
}
