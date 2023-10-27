import { useNavigate } from "react-router";

import "./Navigation.scss";

const splashes: string[] = [
    "woah yet another portfolio website!",
    "hosted since...",
    `2by2`
];

const Splash = () => {
    let n = Math.floor(Math.random() * splashes.length);
    return <p className="splash">{splashes[n]}</p>
};

const Navigation = () => {
    const navigate = useNavigate();

    return <nav className="nav">
        <div className="left">
            <h1 onClick={() => {
                navigate("/");
            }} className="title">
                zuna.cf
            </h1>
        </div>
        <div className="center">
            <Splash />
        </div>
        <div className="right">
            <button onClick={() => {
                navigate("/projects");
            }} className="nav-button">
                Projects
            </button>
            <button onClick={() => {
                navigate("/contacts");
            }} className="nav-button">
                Contact
            </button>
        </div>
    </nav>;
};

export default Navigation;
