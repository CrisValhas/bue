import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./styles/Webs.css"
import { useState } from "react";

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
                    <p style={{ fontFamily: "Impact", fontSize: "25px"}} >Simple</p>
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
                        <p>¡Tu pagina web completisima! Te ofrecemos diez e-mails, posibilidad de montar una tienda online, galeria virtual, blog y similares donde podés subir material digital a tu página. ¡Todas tus ideas son valiosas!</p>
                    </div>
                    <p style={{ fontFamily: "Impact", fontSize: "25px"}} >Intermedio</p>
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

                        <p>La aplicacion web para tu emprendimiento o empresa, en base a tus necesidades.</p>
                    </div>
                    <p style={{ fontFamily: "Impact", fontSize: "25px"}} >Avanzado</p>
                </motion.div>
                {
                    isOpenOne &&
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
                            <p style={{ fontFamily: "Impact", fontSize: "50px"}}>Simple</p>
                            <ul style={{ listStyle: 'none', fontSize: "20px"}}>
                                <li>Elige las tres secciones mas relevantes para tu web.</li>
                                <li>Incluye por un año hosting, dominio (.com, .com.ar, etc) y certificado SSL.</li>
                                <li>Diseño y desarrollo de acuerdo a tus necesidades. </li>
                                <li>Adaptable para cualquier dispositivo. </li>
                            </ul>
                            <h3 style={{ color: "#ffc401"}} >Sin costo mensual</h3>
                        </motion.div>
                        <p className="Back" onClick={() => setIsOpenOne(!isOpenOne)}>X</p>
                        <motion.div className="Webs-info"
                            initial={{ width: "0vw", x: "90vw", scale: 1.5 }}
                            animate={{ width: "40%",x:"0", scale: 1 }}
                            transition={{ duration: 0.9, origin: 1 }}
                        >
                            <div class="wrapper">
                                <h2>Pide tu presupuesto</h2>
                                <div id="error_message">
                                </div>
                                <form action="" id="myform" onsubmit={()=>validate()}>
                                    <div class="input_field">
                                        <input type="text" placeholder="Nombre" id="name"/>
                                    </div>
                                    <div class="input_field">
                                        <input type="text" placeholder="Email" id="email"/>
                                    </div>
                                    <div class="input_field">
                                        <textarea placeholder="Mensaje" id="message"></textarea>
                                    </div>
                                    <div class="btn">
                                        <input type="submit"/>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
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
                        <motion.div className="Webs-info"
                            initial={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                            animate={{ width: "40%", x: 0, scale: 1 }}
                            transition={{ duration: 0.7, origin: 1 }}
                            exit={{ width: "0vw", x: "-90vw", scale: 1.5 }}
                        >
                            <p style={{ fontFamily: "Impact", fontSize: "50px"}}>Intermedio</p>
                            <ul style={{ listStyle: 'none', fontSize: "20px"}}>
                                <li>Incorporamos un servidor para que puedas guardar información online.</li>
                                <li>Mandar mails o notificaciones.</li>
                                <li>Tu pagina web personal donde subir tus fotos y videos, crear usuarios.</li>
                                <li>Podés realizar hasta 3 cambios en la pagina durante el mes.</li>
                            </ul>
                            <h3 style={{ color: "#ffc401"}} > Costo mensual a partir de $1200</h3>
                        </motion.div>
                        <p className="Back" onClick={() => setIsOpenTwo(!isOpenTwo)}>X</p>
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
                            <p style={{ fontFamily: "Impact", fontSize: "50px"}}>Avanzado</p>
                            <ul style={{ listStyle: 'none', fontSize: "20px"}}>
                                <li>Podrás gestionar (material digital, stock de la página) desde un panel de administrador.</li>
                                <li>Soporte técnito 24/7.</li>
                                <li>Registro, gestion de privilegios de usuarios (posibilidad de agregar vendedores, encargados, etc).</li>
                                <li>Con las funcionalidades que tu empresa necesite, no dudes en consultar.</li>
                            </ul>
                            <h3 style={{ color: "#ffc401"}} >Costo mensual a partir de $12000</h3>
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