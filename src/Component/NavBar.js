import '../App.css';

export const navBar = () => {
    return(
        <header className="Header">
            <button className="home">
                <img className="whiteHome" src="white.jpg"></img>
                <h2 className="homePustalk">PuStalk</h2>
                <h4 className="homeAdmin">ADMIN</h4>
            </button>
            <button className="admin">
                <h3 className="adminWrite">Admin</h3>
                <img className="adminImage" src="admin.png"></img>
            </button>
            <button className="website">
                <h3 className="websiteWrite">PUSTALK WEBSITE</h3>
            </button>        
        </header>
    )
}

