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

const Buttons = () => {
    return <>
        <button className="nav-button">
            Info
        </button>
        <button className="nav-button">
            Projects
        </button>
        <button className="nav-button">
            Contacts
        </button>
    </>;
}

const Navigation = () => {
    return <nav className="nav">
        <div className="left">
            <h1 className="title">
                zuna.cf
            </h1>
        </div>
        <div className="center">
            <Splash />
        </div>
        <div className="right">
            <Buttons />
        </div>
    </nav>;
};

export default Navigation;
