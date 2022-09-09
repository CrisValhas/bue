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
          initial={{ y: 0, scale: 1 }}
          animate={
            drop
              ? {
                  y: 150,
                  transition: { duration: 1 },
                  opacity: 0,
                  scale: 1.5,
                }
              : {
                  y: 0,
                  x: 0,
                  transition: { duration: 1 },
                }
          }
          drag
          dragConstraints={{
            top: -300,
            left: -600,
            right: 500,
            bottom: 200,
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
            bottom: 200,
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
    stringAbout4 = "Desarrollamos más que aplicaciones",
    stringAbout3 = "Bue! crea apps, intuitivas";
  let arrayAbout = stringAbout.split(" ");
  let arrayAbout1 = stringAbout1.split(" ");
  let arrayAbout2 = stringAbout2.split(" ");
  let arrayAbout3 = stringAbout3.split(" ");

  let allPhrases = [arrayAbout1, arrayAbout2, arrayAbout3];
  let allPhrasesToRender = [stringAbout1, stringAbout4, stringAbout3];

  let [count, setCount] = useState(0);
  const [arrayToMap, setArrayToMap] = useState(allPhrases[count]);
  const [arrayToRender, setArrayToRender] = useState(allPhrasesToRender[count]);
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
        setCount(-1);
      }
      setArrayToMap(allPhrases[count]);
      setArrayToRender(allPhrasesToRender[count]);
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
      <div className="About-back" >
        <Link className="buestore-links" to="/">
          ←
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start', width: '54%'}} onClick={(e) => handleClick(e)}>
        <motion.div className={"About-dashboard"}>
          {arrayAbout?.map((world, indice) => {
            random = !random;
            return (
              <BoxText
                text={world}
                key={indice}
                drop={drop}
                arrayToRender={arrayToMap}
              />
            );
          })}
          <motion.div className={"About-dashboard-text-box"}>
            {drop ? (
              <motion.div className="About-dashboard-text">
                <motion.div
                  initial={{
                    fontFamily: "Calibri",
                    width: "100%",
                    y: "-10vw",
                    scale: 1,
                    opacity: 0,
                    color: "#ffffff",
                  }}
                  animate={{
                    width: "100%",
                    y: "0",
                    scale: 1.2,
                    opacity: 1,
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                  transition={{ duration: 1.1, origin: 1 }}
                >
                  {arrayToRender}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className="About-dashboard-text-descubre"
                initial={{
                  fontFamily: "Impact",
                  color: "#ffc401",
                 
                  scale: 1,
                }}
                animate={{ scale: 1.3 }}
                transition={{ duration: 0.5, origin: 1 }}
              >
                Descubre
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
