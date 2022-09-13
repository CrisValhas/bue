import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./styles/Webs.css";

function Contact() {
    const lang = useSelector((state) => state.rootReducer.lang);

    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
        error: "",
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const validate = e => {
        e.preventDefault(e);

        if (!state.name || !state.email || !state.message) alert('Rellena todos los campos');

        if (state.name.length < 5) {
            setState({...state, error: "Please enter valid name"})
        } else if (state.email.indexOf("@") === -1 || state.email.length < 6) {
            setState({...state, error: "Please enter valid email"})
        } else if (state.message.length < 15) {
            setState({...state, error: "Please describe what you want in the message"})
        } else {
            alert("Form submitted successfully!");

            // -----------> se manda el mail

            setState({
                name: "",
                email: "",
                message: "",
                error: "",
            });
        } 
    };

    return (
        <div className="webs-contact">
            <h2>{lang.Webs.contact.title}</h2>
            <div id="error_message">{state.error}</div>

            <form id="myform" onSubmit={validate}>
                <div className="input_field">
                    <input required type="text" placeholder={lang.Webs.contact.name} name="name" value={state.name} onChange={handleChange} />
                </div>
                <div className="input_field">
                    <input required type="text" placeholder={lang.Webs.contact.email} name="email" value={state.email} onChange={handleChange} />
                </div>
                <div className="input_field">
                    <textarea required placeholder={lang.Webs.contact.message} name="message" value={state.message} onChange={handleChange} ></textarea>
                </div>
                <div className="btn">
                    <button>{lang.Webs.contact.send}</button>
                </div>
            </form>
        </div>
    )
};

export default function Webs() {
    const lang = useSelector((state) => state.rootReducer.lang);

    const [isOpenOne, setIsOpenOne] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenThree, setIsOpenThree] = useState(false)

    return (
        <motion.div className="Webs" initial={{ opacity: 0.5, transition: { duration: 1 } }} animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }} >
            
           <div className="webs-container">
                <Link to="/"><a href="#">←</a></Link>

                <div onClick={() => setIsOpenOne(!isOpenOne)}>
                    <p>{lang.Webs.simple.text}</p>
                    <h1>{lang.Webs.simple.label}</h1>
                </div>

                <div onClick={() => setIsOpenTwo(!isOpenTwo)}>
                    <p>{lang.Webs.intermediate.text}</p>
                    <h1>{lang.Webs.intermediate.label}</h1>
                </div>

                <div onClick={() => setIsOpenThree(!isOpenThree)}>
                    <p>{lang.Webs.advanced.text}</p>
                    <h1>{lang.Webs.advanced.label}</h1>
                </div>
            </div>

            { isOpenOne &&
                <div className="webs-click">
                    <a href="#" onClick={() => setIsOpenOne(!isOpenOne)}>←</a>

                    <div className="webs-click-cont">
                        <div className="web-text">
                            <h1>{lang.Webs.simple.label}</h1>
                            <ul>
                                <li>{lang.Webs.simple.description[1]}</li>
                                <li>{lang.Webs.simple.description[2]}</li>
                                <li>{lang.Webs.simple.description[3]}</li>
                                <li>{lang.Webs.simple.description[4]}</li>
                            </ul>
                            <h3>{lang.Webs.simple.description.price}</h3>
                        </div>

                        <Contact />
                    </div>
                </div>
            }

            { isOpenTwo &&
                <div className="webs-click">
                    <a href="#" onClick={() => setIsOpenTwo(!isOpenTwo)}>←</a>

                    <div className="webs-click-cont">
                        <div className="web-text">
                            <h1>{lang.Webs.intermediate.label}</h1>
                            <ul>
                                <li>{lang.Webs.intermediate.description[1]}</li>
                                <li>{lang.Webs.intermediate.description[2]}</li>
                                <li>{lang.Webs.intermediate.description[3]}</li>
                                <li>{lang.Webs.intermediate.description[4]}</li>
                            </ul>
                            <h3>{lang.Webs.intermediate.description.price}</h3>
                        </div>

                        <Contact />
                    </div>
                </div>
            }

            { isOpenThree &&
                <div className="webs-click">
                    <a href="#" onClick={() => setIsOpenThree(!isOpenThree)}>←</a>

                    <div className="webs-click-cont">
                        <div className="web-text">
                            <h1>{lang.Webs.advanced.label}</h1>
                            <ul>
                                <li>{lang.Webs.advanced.description[1]}</li>
                                <li>{lang.Webs.advanced.description[2]}</li>
                                <li>{lang.Webs.advanced.description[3]}</li>
                                <li>{lang.Webs.advanced.description[4]}</li>
                            </ul>
                            <h3>{lang.Webs.advanced.description.price}</h3>
                        </div>

                        <Contact />
                    </div>
                </div>
            }

        </motion.div>
    )
};