import React, {useState} from "react";


const Header = () => {

    const [menu, setMenu] = useState(false);

    const toggleMenu = (event) => {
        event.preventDefault();
        if(menu){
            setMenu(false);
        }
        else{
            setMenu(true);
        }
    }


    return(

        <header className="sticky-top">
            <div className="container">

                <div className="row align-items-center">

                    <div className="col-md-3 d-flex flex-wrap justify-content-between d-md-block align-items-center">
                        <img src={require("../assets/images/logo.png").default} alt="#" className="img-fluid headerLogo" />
                        
                        <a href="#" onClick={(event)=>toggleMenu(event)} className="toggleMenu blueTxt d-inline-block d-md-none">
                            <i className={menu ? "fa fa-times" : "fa fa-bars"} aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="col-md-9">

                        <nav className={menu ? "fullHeight" : ""}>
                            <ul className="p-0 m-0 d-md-flex flex-wrap justify-content-md-end">

                                <li>
                                    <a href="#" className="text-uppercase d-block">vision</a>
                                </li>

                                <li>
                                    <a href="#" className="text-uppercase d-block">iot careers</a>
                                </li>

                                <li>
                                    <a href="#" className="text-uppercase d-block">certification</a>
                                </li>

                                <li>
                                    <a href="#" className="text-uppercase d-block">services</a>
                                </li>

                            </ul>
                        </nav>

                    </div>

                </div>

            </div>
        </header>


    )

}



export default Header;