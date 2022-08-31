import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./styles/Webs.css"
import { useState } from "react";
import gbottom from "../assets/webs-media/globos-bottom.png"
import gmid from "../assets/webs-media/globos-mid.png"
import gtop from "../assets/webs-media/globos-top.png"

export default function Webs() {
    const [isOpenOne, setIsOpenOne] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenTree, setIsOpenTree] = useState(false)

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
            initial={{ color: "white", width: "0vw", x: "50vw", opacity: 0, scale: 0.8, transition: { duration: 1.3 } }}
            animate={{ width: "100vw", x: "0vw", scale: 1, opacity: 1, transition: { duration: 1.3 } }}
            exit={{ width: "0vw", x: "50vw", opacity: 0, scale: 0.8, transition: { duration: 0.5 } }}
        >
            <div className="Webs-container">
                <Link className="Back" to="/">Back</Link>
                {/* ------------------------------option 1---------------------------------- */}

                <motion.div onClick={() => setIsOpenOne(!isOpenOne)} className="Webs-options-container"
                    initial={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                    animate={{ width: "100%", x: 0, scale: 1 }}
                    transition={{ duration: 0.7, origin: 1 }}
                    exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                >
                    <div className="Webs-options">
                        {/* <img className="webs-img" src={gtop} alt="gtop"/> */}
                        <p>Son paginas web de estilo portfolio o contacto, sirven para que la gente te conozca, a vos o tu proyecto y pueda contactarte. Generar presencia en la Web es importante!</p>
                    </div>
                    <p>Simple</p>
                    {/* <motion.div className="Webs-icon"
                        initial={{ width: "0vw", x: 0, scale: 1.5 }}
                        animate={{ width: "16%", x: 0, }}
                        transition={{ duration: 1.5, origin: 1 }}
                    >
                        
                    </motion.div> */}
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
                        <p>Una pagina web completisima! con mails, posibilidad qu</p>
                    </div>
                    <p>Medium</p>
                </motion.div>
                {/* ------------------------------option 3---------------------------------- */}
                <motion.div onClick={() => setIsOpenTree(!isOpenTree)} className="Webs-options-container"
                    initial={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                    animate={{ width: "100%", x: 0, scale: 1, }}
                    transition={{ duration: 0.7, origin: 1 }}
                    exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                >
                    {/* <img className="webs-img" src={gbottom} alt="gbottom"/> */}
                    <div className="Webs-options">

                        <p>hola jorgue como estas</p>
                    </div>
                    <p >Advanced</p>
                </motion.div>
                {
                    isOpenOne &&
                    <motion.div className="Webs-click"
                        initial={{ width: "0vw", x: "0vw", scale: 0.4, opacity: 0, rotateY: 180 }}
                        animate={{ width: "100%", x: 0, scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4, origin: 1 }}
                        exit={{ width: "0vw", x: "0vw", scale: 0.4 }}
                    >
                        <p className="Back" onClick={() => setIsOpenOne(!isOpenOne)}>X</p>
                        hola aca tenes la info completa de la opcion uno
                    </motion.div>
                }
                {
                    isOpenTwo &&
                    <motion.div className="Webs-click"
                        initial={{ width: "0vw", x: "0vw", scale: 0.4, opacity: 0, rotateY: 180 }}
                        animate={{ width: "100%", x: 0, scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4, origin: 1 }}
                        exit={{ width: "0vw", x: "0vw", scale: 0.4 }}
                    >
                        <p className="Back" onClick={() => setIsOpenTwo(!isOpenTwo)}>X</p>
                        hola aca tenes la info completa de la opcion dos
                    </motion.div>
                }
                {
                    isOpenTree &&
                    <motion.div className="Webs-click"
                        initial={{ width: "0vw", x: "0vw", scale: 0.4, opacity: 0, rotateY: 180 }}
                        animate={{ width: "100%", x: 0, scale: 1, opacity: 1, rotateY: 0 }}
                        transition={{ duration: 0.4, origin: 1 }}
                        exit={{ width: "0vw", x: "0vw", scale: 0.4 }}
                    >
                        
                        <motion.div className="Webs-info"
                            initial={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                            animate={{ width: "40%", x: 0, scale: 1 }}
                            transition={{ duration: 0.7, origin: 1 }}
                            exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                        >
                            <h1>Advanced</h1>
                            hola aca tenes la info completa de la opcion tres
                            porque aca podes hacer un monton de cosas que ni sabias que querias?.
                            desde una app para buscar a tu mascota, una red social nueva o hasta una aplicacion para controlar tu industria.
                            <h3>En bue! todo es posible !</h3>
                        </motion.div>
                        <p className="Back" onClick={() => setIsOpenTree(!isOpenTree)}>X</p>
                        <motion.div className="Webs-info"
                            initial={{ width: "0vw", x: "90vw", scale: 1.5 }}
                            animate={{ width: "40%",x:"0", scale: 1 }}
                            transition={{ duration: 0.9, origin: 1 }}
                        >
                            <div class="wrapper">
                                <h2>Contact us</h2>
                                <div id="error_message">

                                </div>
                                <form action="" id="myform" onsubmit={()=>validate()}>
                                    <div class="input_field">
                                        <input type="text" placeholder="Name" id="name"/>
                                    </div>
                                    <div class="input_field">
                                        <input type="text" placeholder="Email" id="email"/>
                                    </div>
                                    <div class="input_field">
                                        <textarea placeholder="Message" id="message"></textarea>
                                    </div>
                                    <div class="btn">
                                        <input type="submit"/>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                }
            </div>

        </motion.div>
    )
};