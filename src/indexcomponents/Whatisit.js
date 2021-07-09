import React from "react";

const Whatisit = (props) => {


    return(
        <section className="whatIsIt py-5">

            <div className="container">

                <div className="row">
                    <div className="col-12 py-3">
                        <h4 className="text-center h3 blueTxt">IoT is a career path.</h4>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/c1.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Feild Engineering</p>
                        </div>

                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/c2.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Prototyping</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/c3.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Research</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/c4.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Product Development</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/c5.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Solution Architecting</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/c6.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">IoT Product Management</p>
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-12 pt-5 pb-3">
                        <h4 className="text-center h3 blueTxt">IoT is a career path.</h4>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/g1.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Mobile App Development</p>
                        </div>

                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/g2.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Enterprise Web Applications</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/g3.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">AI/ML Development</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/g4.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Cloud Service Integration</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/g5.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Embedded Engineering</p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-4 text-center">
                        <div className="credBlock" onClick={(event) => props.showpathDownModal(event)}>
                            <img src={require("../assets/images/g6.png").default}  alt="#" className="img-fluid pb-3 w-100"/>
                            <p className="mb-0">Blockchain Development</p>
                        </div>
                    </div>

                </div>


                <div className="row">

                    <div className="col-12 text-center py-5">

                        <h4 className="h3">Capsule Labs IoT certification is for you.</h4>
                        <a onClick={(event) => props.showpathDownModal1(event)} href="#" className="btn chckltBg mt-3 px-5">Download</a>

                    </div>

                </div>

            </div>

        </section>
    )


}


export default Whatisit;