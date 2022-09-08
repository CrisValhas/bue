import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./styles/Webs.css"

// language
import { ESP } from "../lang/esp";
import { ENG } from "../lang/eng";

export default function Webs() {
    const lang = useSelector((state) => state.rootReducer.lang);

    const [isOpenOne, setIsOpenOne] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenThree, setIsOpenThree] = useState(false)

    function validate() {
        var name = document.getElementById("name").value;
        var subject = document.getElementById("subject").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var error_message = document.getElementById("error_message");

        error_message.style.padding = "10px";

        var text;
        if (name.length < 5) {
            text = "Please Enter valid Name";
            error_message.innerHTML = text;
            return false;
        }
        if (subject.length < 10) {
            text = "Please Enter Correct Subject";
            error_message.innerHTML = text;
            return false;
        }
        if (isNaN(phone) || phone.length !== 10) {
            text = "Please Enter valid Phone Number";
            error_message.innerHTML = text;
            return false;
        }
        if (email.indexOf("@") === -1 || email.length < 6) {
            text = "Please Enter valid Email";
            error_message.innerHTML = text;
            return false;
        }
        if (message.length <= 140) {
            text = "Please Enter More Than 140 Characters";
            error_message.innerHTML = text;
            return false;
        }
        alert("Form Submitted Successfully!");
        return true;
    }

    return (

        <motion.div className="Webs"
            initial={{ opacity: 0.5, transition: { duration: 1 } }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
        >
            <div className="Webs-container">
                <div className="webs-container-back">
                    <Link className="webs-back" to="/">←</Link>
                </div>

                {/* ------------------------------option 1---------------------------------- */}

                <motion.div onClick={() => setIsOpenOne(!isOpenOne)} className="Webs-options-container"
                    initial={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                    animate={{ width: "100%", x: 0, scale: 1 }}
                    transition={{ duration: 0.7, origin: 1 }}
                    exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                >
                    <div className="Webs-options">
                        <p>{lang === "ESP" ? ESP.Webs.simple.text : ENG.Webs.simple.text}</p>
                    </div>
                    <p style={{ fontFamily: "Impact", fontSize: "25px" }}>{lang === "ESP" ? ESP.Webs.simple.label : ENG.Webs.simple.label}</p>
                </motion.div>
                {/* ------------------------------option 2---------------------------------- */}
                <motion.div onClick={() => setIsOpenTwo(!isOpenTwo)} className="Webs-options-two-container"
                    initial={{ width: "0vw", x: "90vw", scale: 1.5 }}
                    animate={{ width: "100%", x: 0, scale: 1 }}
                    transition={{ duration: 0.7, origin: 1 }}
                    exit={{ width: "0vw", x: "90vw", scale: 1.5 }}
                >
                    <div className="Webs-options-two">
                        {/* <img className="webs-img" src={gmid} alt="gmid"/> */}
                        <p>{lang === "ESP" ? ESP.Webs.intermediate.text : ENG.Webs.intermediate.text}</p>
                    </div>
                    <p style={{ fontFamily: "Impact", fontSize: "25px" }}>{lang === "ESP" ? ESP.Webs.intermediate.label : ENG.Webs.intermediate.label}</p>
                </motion.div>
                {/* ------------------------------option 3---------------------------------- */}
                <motion.div onClick={() => setIsOpenThree(!isOpenThree)} className="Webs-options-container"
                    initial={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                    animate={{ width: "100%", x: 0, scale: 1, }}
                    transition={{ duration: 0.7, origin: 1 }}
                    exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                >
                    {/* <img className="webs-img" src={gbottom} alt="gbottom"/> */}
                    <div className="Webs-options">

                        <p>{lang === "ESP" ? ESP.Webs.advanced.text : ENG.Webs.advanced.text}</p>
                    </div>
                    <p style={{ fontFamily: "Impact", fontSize: "25px" }}>{lang === "ESP" ? ESP.Webs.advanced.label : ENG.Webs.advanced.label}</p>
                </motion.div>
                {
                    isOpenOne &&

                    <motion.div className="Webs-click"
                        initial={{ width: "0vw", x: "0vw", scale: 0.4, opacity: 0, rotateY: 180 }}
                        animate={{ width: "100%", x: 0, scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4 }}
                        exit={{ width: "0vw", x: "0vw", scale: 0.4 }}
                    >
                        <div className="webs-options-back-container">
                            <p className="webs-back-option" onClick={() => setIsOpenOne(!isOpenOne)}>←</p>
                        </div>

                        <div className="Webs-info-cont">
                            <motion.div className="Webs-info"
                                initial={{ x: "-90vw", scale: 1.5 }}
                                animate={{ x: 0, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                            >
                                <div className="web-text">
                                    <p style={{ fontFamily: "Impact", fontSize: "50px" }}>{lang === "ESP" ? ESP.Webs.simple.label : ENG.Webs.simple.label}</p>
                                    <ul style={{ listStyle: 'none', fontSize: "20px" }}>
                                        <li>{lang === "ESP" ? ESP.Webs.simple.description[1] : ENG.Webs.simple.description[1]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.simple.description[2] : ENG.Webs.simple.description[2]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.simple.description[3] : ENG.Webs.simple.description[3]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.simple.description[4] : ENG.Webs.simple.description[4]}</li>
                                    </ul>
                                    <h3 style={{ color: "#ffc401" }} >{lang === "ESP" ? ESP.Webs.simple.description.price : ENG.Webs.simple.description.price}</h3>
                                </div>

                            </motion.div>
                            <motion.div className="Webs-info"
                                initial={{ x: "90vw", scale: 1.5 }}
                                animate={{ x: "0", scale: 1 }}
                                transition={{ duration: 0.9 }}
                            >
                                <div class="wrapper">
                                    <h2>{lang === "ESP" ? ESP.Webs.contact.title : ENG.Webs.contact.title}</h2>
                                    <div id="error_message">

                                    </div>
                                    <form action="" id="myform" onsubmit={() => validate()}>
                                        <div class="input_field">
                                            <input type="text" placeholder={lang === "ESP" ? ESP.Webs.contact.name : ENG.Webs.contact.name} id="name" />
                                        </div>
                                        <div class="input_field">
                                            <input type="text" placeholder={lang === "ESP" ? ESP.Webs.contact.email : ENG.Webs.contact.email} id="email" />
                                        </div>
                                        <div class="input_field">
                                            <textarea placeholder={lang === "ESP" ? ESP.Webs.contact.message : ENG.Webs.contact.message} id="message"></textarea>
                                        </div>
                                        <div class="btn">
                                            <button type="submit">{lang === "ESP" ? ESP.Webs.contact.send : ENG.Webs.contact.send}</button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </div>

                    </motion.div>
                }
                {
                    isOpenTwo &&
                    <motion.div className="Webs-click"
                        initial={{ width: "0vw", x: "0vw", scale: 0.4, opacity: 0, rotateY: 180 }}
                        animate={{ width: "100%", x: 0, scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4 }}
                        exit={{ width: "0vw", x: "0vw", scale: 0.4 }}
                    >
                        <div className="webs-options-back-container">
                            <p className="webs-back-option" onClick={() => setIsOpenTwo(!isOpenTwo)}>←</p>
                        </div>

                        <div className="Webs-info-cont">
                            <motion.div className="Webs-info"
                                initial={{ x: "-90vw", scale: 1.5 }}
                                animate={{ x: 0, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                            >
                                <div className="web-text">
                                    <p style={{ fontFamily: "Impact", fontSize: "50px" }}>{lang === "ESP" ? ESP.Webs.intermediate.label : ENG.Webs.intermediate.label}</p>
                                    <ul style={{ listStyle: 'none', fontSize: "20px" }}>
                                        <li>{lang === "ESP" ? ESP.Webs.intermediate.description[1] : ENG.Webs.intermediate.description[1]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.intermediate.description[2] : ENG.Webs.intermediate.description[2]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.intermediate.description[3] : ENG.Webs.intermediate.description[3]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.intermediate.description[4] : ENG.Webs.intermediate.description[4]}</li>
                                    </ul>
                                    <h3 style={{ color: "#ffc401" }} >{lang === "ESP" ? ESP.Webs.intermediate.description.price : ENG.Webs.intermediate.description.price}</h3>
                                </div>

                            </motion.div>
                            <motion.div className="Webs-info"
                                initial={{ x: "90vw", scale: 1.5 }}
                                animate={{ x: "0", scale: 1 }}
                                transition={{ duration: 0.9 }}
                            >
                                <div class="wrapper">
                                    <h2>{lang === "ESP" ? ESP.Webs.contact.title : ENG.Webs.contact.title}</h2>
                                    <div id="error_message">

                                    </div>
                                    <form action="" id="myform" onsubmit={() => validate()}>
                                        <div class="input_field">
                                            <input type="text" placeholder={lang === "ESP" ? ESP.Webs.contact.name : ENG.Webs.contact.name} id="name" />
                                        </div>
                                        <div class="input_field">
                                            <input type="text" placeholder={lang === "ESP" ? ESP.Webs.contact.email : ENG.Webs.contact.email} id="email" />
                                        </div>
                                        <div class="input_field">
                                            <textarea placeholder={lang === "ESP" ? ESP.Webs.contact.message : ENG.Webs.contact.message} id="message"></textarea>
                                        </div>
                                        <div class="btn">
                                            <button type="submit">{lang === "ESP" ? ESP.Webs.contact.send : ENG.Webs.contact.send}</button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </div>

                    </motion.div>
                }
                {
                    isOpenThree &&
                    <motion.div className="Webs-click"
                        initial={{ x: "0vw", scale: 0.4, opacity: 0, rotateY: 180 }}
                        animate={{ x: 0, scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4 }}
                        exit={{ width: "0vw", x: "0vw", scale: 0.4 }}
                    >
                        <div className="webs-options-back-container">
                            <p className="webs-back-option" onClick={() => setIsOpenThree(!isOpenThree)}>←</p>
                        </div>

                        <div className="Webs-info-cont">
                            <motion.div className="Webs-info"
                                initial={{ x: "-90vw", scale: 1.5 }}
                                animate={{ x: 0, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                            >
                                <div className="web-text">
                                    <p style={{ fontFamily: "Impact", fontSize: "50px" }}>{lang === "ESP" ? ESP.Webs.advanced.label : ENG.Webs.advanced.label}</p>
                                    <ul style={{ listStyle: 'none', fontSize: "20px" }}>
                                        <li>{lang === "ESP" ? ESP.Webs.advanced.description[1] : ENG.Webs.advanced.description[1]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.advanced.description[2] : ENG.Webs.advanced.description[2]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.advanced.description[3] : ENG.Webs.advanced.description[3]}</li>
                                        <li>{lang === "ESP" ? ESP.Webs.advanced.description[4] : ENG.Webs.advanced.description[4]}</li>
                                    </ul>
                                    <h3 style={{ color: "#ffc401" }} >{lang === "ESP" ? ESP.Webs.advanced.description.price : ENG.Webs.advanced.description.price}</h3>
                                </div>

                            </motion.div>
                            <motion.div className="Webs-info"
                                initial={{ x: "90vw", scale: 1.5 }}
                                animate={{ x: "0", scale: 1 }}
                                transition={{ duration: 0.9 }}
                            >
                                <div class="wrapper">
                                    <h2>{lang === "ESP" ? ESP.Webs.contact.title : ENG.Webs.contact.title}</h2>
                                    <div id="error_message">

                                    </div>
                                    <form action="" id="myform" onsubmit={() => validate()}>
                                        <div class="input_field">
                                            <input type="text" placeholder={lang === "ESP" ? ESP.Webs.contact.name : ENG.Webs.contact.name} id="name" />
                                        </div>
                                        <div class="input_field">
                                            <input type="text" placeholder={lang === "ESP" ? ESP.Webs.contact.email : ENG.Webs.contact.email} id="email" />
                                        </div>
                                        <div class="input_field">
                                            <textarea placeholder={lang === "ESP" ? ESP.Webs.contact.message : ENG.Webs.contact.message} id="message"></textarea>
                                        </div>
                                        <div class="btn">
                                            <button type="submit">{lang === "ESP" ? ESP.Webs.contact.send : ENG.Webs.contact.send}</button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                }
            </div>
        </motion.div>
    )
};