
import React from "react";


const Services = (props) => {

return(
    <section className="services py-5 position-relative">

        <div className="container py-5">

            <div className="row">

                <div className="col-12 text-center pb-5 mb-3 order-1 order-md-1">
                    <h4 className="h3 blueTxt">Capsule Labs Services</h4>
                </div>

                <div className="col-md-6 text-center text-md-left order-3 order-md-2">
                    <h4 className="brownTxt font-weight-bold pb-3">Foundational Certifications</h4>

                    <ul className="pl-0 mb-0" onClick={(event) => props.showpathRightModal1(event)}>
                        <li>IoT Full Stack Developer Certificate</li>
                        <li>IoT Android Developer Certificate</li>
                        <li> IoT Cloud Developer Certificate </li>
                        <li>IoT Embedded Developer Certificate </li>
                        <li>IoT Blockchain Developer Certificate </li>
                        <li>IoT AI/ML Developer Certificate </li>
                    </ul>
                    
                    <h4 className="brownTxt font-weight-bold py-3">Advanced Certifications</h4>


                    <ul className="pl-0 mb-0" onClick={(event) => props.showpathRightModal2(event)}>
                        <li>IoT DEVELOPER CERIFICATE</li>
                        <li>AIOT DEVELOPER CERTIFICATE</li>
                    </ul>
                    
                    <h4 className="brownTxt font-weight-bold py-3">Advisory Services</h4>

  
 
                    <ul className="pl-0 mb-0" onClick={(event) => props.showpathRightModal3(event)}>
                        <li>Extended webinars and workshops </li>
                        <li>Webinars and motivational speaking services</li>
                        <li>Curriculum building services</li>
                    </ul>

                </div>

                <div className="col-md-6 serviceBack positon-relative order-1 order-md-3 position-relative">
                </div>

            </div>

        </div>

    </section>
)

}


export default Services;