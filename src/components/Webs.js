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
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const validate = e => {
        e.preventDefault(e);

        if (!state.name || !state.email || !state.message) alert(lang.Webs.contact.errors.emptyField);

        if (state.name.length < 2) {
            alert(lang.Webs.contact.errors.name)
        } else if (state.email.indexOf("@") === -1 || state.email.length < 6) {
            alert(lang.Webs.contact.errors.email)
        } else if (state.message.length < 15) {
            alert(lang.Webs.contact.errors.message)
        } else {
            alert(lang.Webs.contact.submit);

            // -----------> se manda el mail

            setState({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <div className="webs-contact">
            <h1>{lang.Webs.contact.title}</h1>

            <form onSubmit={validate}>
                <input required type="text" placeholder={lang.Webs.contact.name} name="name" value={state.name} onChange={handleChange} />
                
                <input required type="text" placeholder={lang.Webs.contact.email} name="email" value={state.email} onChange={handleChange} />
                
                <textarea required placeholder={lang.Webs.contact.message} name="message" value={state.message} onChange={handleChange} />
                
                <button>{lang.Webs.contact.send}</button>
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
                <Link to="/"><button>←</button></Link>
                
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
                <div className="webs-absolute">
                    <div className="webs-plan">
                        <button onClick={() => setIsOpenOne(!isOpenOne)}>←</button>

                        <div className="webs-plan-cont">
                            <div className="webs-plan-text">
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
                </div>
            }

            { isOpenTwo &&
                <div className="webs-absolute">
                    <div className="webs-plan">
                        <button onClick={() => setIsOpenTwo(!isOpenTwo)}>←</button>

                        <div className="webs-plan-cont">
                            <div className="webs-plan-text">
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
                </div>
            }

            { isOpenThree &&
                <div className="webs-absolute">
                    <div className="webs-plan">
                        <button onClick={() => setIsOpenThree(!isOpenThree)}>←</button>

                        <div className="webs-plan-cont">
                            <div className="webs-plan-text">
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
                </div>
            }

        </motion.div>
    )
};