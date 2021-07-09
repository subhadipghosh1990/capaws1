
import React from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';


const Modals = (props) => {
    return(

        <React.Fragment>
            <div className={props.pathDownModal ? "downModal modals position-fixed showModal" : "downModal modals position-fixed"} >
                <Scrollbars style={{ width: "100%", height: "80vh" }}>
                <a href="#" className="closeModal position-absolute" onClick={(event) => props.closeModal(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
                
                    <div className="container-fluid">

                    <div className="row">

                        <div className="col-12 p-3">
                            <h4 className="brownTxt font-weight-bold h5 mb-3">Careers in IoT</h4>

                            <p>The Internet of Things can be expected to produce an impact as diverse as the Internet itself. The impact is across disciplines and is due to (a)	
                                Improving product quality and their operational health (b)	Improving the operational efficiency of brownfield process  (c)	Delivering services based 
                                on new instrumentation and (d)	Creating product based on new operational insights</p>
                            <p>Therefore, it is not surprising that existing organizations are investing in IoT to improve their product lines and efficiencies. Additionally, a 
                                number of younger organizations are creating IoT based solutions for specialized use cases. These two factors combine to create a market for IoT 
                                professionals growing at close to 30% CAGR through 2025. This market requires several specializations as listed below.</p>


                            <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Research</h4>
                            <p>Foundational research in IoT seeks to improve the quality of instrumentation, computation and communication to support new deployment architectures. 
                                Academic institutes tend to take a lead in foundational research and support an ecosystem of graduate students, postdocs and senior faculty members. 
                                Corporate IoT research tend to focus on applied results and implementation architectures and usually involves significant prototyping.  </p>
                            <p>Therefore, demonstratable project results with Capsule Labs allows candidates to make a stronger admission case and pursue an academic or corporate 
                                career in IoT research. </p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Field Engineering and Testing</h4>
                            <p>Unlike software only systems, IoT systems require inputs from multiple physical processes, which is difficult to simulate. Therefore, IoT testers are needed 
                                to test these solutions in the field or advanced multi parameter simulation tools need to be created. Moreover, IoT solutions require extensive instrumentation
                                and large workforces of field application engineers are needed during deployments. Capsule Labs projects prepare candidates for both these career paths by providing 
                                them a working understanding of the end-to-end workflow in IoT based solutions.</p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Prototyping</h4>
                            <p>Most IoT solutions undergo a phase of rapid prototyping, using different vendor combinations, before the set of vendors are finalized. Thus, IoT prototypers are 
                                expected to turnaround vendor integrations quickly and provide meaningful vendor evaluation. During project selection at Capsule Labs, candidates have the option 
                                of an ‘Explorer’ project variant which provide additional integration complexity, preparing them for prototyping career paths. </p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Product/ Solution Development  </h4>
                            <p>Once the vendor ecosystem is in place, the IoT prototypes are moved to the productization phase, where the focus shift towards building out the complete feature 
                                set and optimizing the hardware and software quality. During project selection at Capsule Labs, candidates have the option of an ‘Innovator’ project variant 
                                which focusses on optimizing a single feature set, preparing them for a career path in IoT product development.   </p>
                            
                            <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Solution Architect </h4>
                            <p>IoT solution architect is a senior role responsible for translating business requirements into multiple implementation architectures. Solution architects 
                                need a strong understanding of emerging technologies and interoperability standards in order to defend their architectural choices and recommend suitable adaptations 
                                to meet new feature requirements. Architect level certifications at Capsule Labs requires implantation of multiple IoT projects, within an industry vertical, so that 
                                the candidate is suitably equipped with a diverse experience to draw from.     </p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Product Management and Marketing  </h4>
                            <p>IoT Product managers are showrunners entrusted with the business model. They are responsible for identifying the opportunity in the market and the feature set to 
                                address that opportunity. They work in tandem with the rest of the delivery team to establish a valid business case for the solution, based on input costs and the 
                                market size. Therefore, IoT product managers are typically seasoned solution architects with a deep understanding of market dynamics. Capsule Labs offers certification 
                                programs for business graduates in order to pursue career paths in IoT product management and IoT product marketing. </p>
                        </div>

                    </div>

                </div>
                </Scrollbars>
            </div>

            <div className={props.pathDownModal1 ? "downModal modals position-fixed showModal" : "downModal modals position-fixed"} >
            <Scrollbars style={{ width: "100%", height: 370 }}>
                <a href="#" className="closeModal position-absolute" onClick={(event) => props.closeModal(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
                
                    <div className="container-fluid">

                    <div className="row filesDwnld">

                        <div className="col-sm-1 p-3 text-center">
                            <a href={require('../assets/pdf/3_Mobile App.pdf').default} download>
                                <img src={require('../assets/images/i1.png').default} alt="#" className="img-fluid"/>
                                <p className="px-3">Mobile Application</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                            <a href={require('../assets/pdf/4_IT & Web Developer.pdf').default} download>
                                <img src={require('../assets/images/i2.png').default} alt="#" className="img-fluid"/>
                                <p className="px-3">Web Application</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                            <a href={require('../assets/pdf/6_AI developer & Data scientist.pdf').default} download>
                                <img src={require('../assets/images/i3.png').default} alt="#" className="img-fluid"/>
                                <p className="px-3">AI and Data Science</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                            <a href={require('../assets/pdf/2_Cloud Developer.pdf').default} download>
                                <img src={require('../assets/images/i4.png').default} alt="#" className="img-fluid"/>
                                <p className="px-3">Cloud Services</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                            <a href={require('../assets/pdf/5_Security & blockchain.pdf').default} download>
                                <img src={require('../assets/images/i5.png').default} alt="#" className="img-fluid"/>
                                <p className="px-3">Security and Blockchain</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/1_Computer Scientist.pdf').default} download>
                            <img src={require('../assets/images/i6.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Computer Science</p>
                        </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                            <a href={require('../assets/pdf/9_Robotics & Mechatronics.pdf').default} download>
                                <img src={require('../assets/images/i7.png').default} alt="#" className="img-fluid"/>
                                <p className="px-3">Robitics and Mechatronics</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/14_MEMS & VLSI.pdf').default} download>
                            <img src={require('../assets/images/i8.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">MEMS and VLSI</p>
                        </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                            <a href={require('../assets/pdf/Instrumentation.pdf').default} download>
                                <img src={require('../assets/images/i9.png').default} alt="#" className="img-fluid"/>
                                <p className="px-3">Instrumentation</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/7_Electronics.pdf').default} download>
                            <img src={require('../assets/images/i10.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Electronics</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/8_Communication.pdf').default} download>
                            <img src={require('../assets/images/i11.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Communication</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/15_Business graduates.pdf').default} download>
                            <img src={require('../assets/images/i12.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Business</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/Food.pdf').default} download>
                            <img src={require('../assets/images/i13.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Food Technology</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/11_Electrical & Power.pdf').default} download>
                            <img src={require('../assets/images/i14.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Electrical and Power</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/12_Renewable energy.pdf').default} download>
                            <img src={require('../assets/images/i15.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Renewable Energy</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/13_Manufacturing&Production.pdf').default} download>
                            <img src={require('../assets/images/i16.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Production/ Manufacturing</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/22_Chemical&ceramic.pdf').default} download>
                            <img src={require('../assets/images/i17.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Chemical and Ceramic</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/19_Civil&Structural.pdf').default} download>
                            <img src={require('../assets/images/i18.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Civil and Structural</p>
                        </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/21_Architects&Urbanplanners.pdf').default} download>
                            <img src={require('../assets/images/i19.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Architecture & Urban planning</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/24_Foortwear,Textile&Apparal.pdf').default} download>
                            <img src={require('../assets/images/i20.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Footwear and Textile</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/23_Environmental.pdf').default} download>
                            <img src={require('../assets/images/i21.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Environment</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/18_Biomedical.pdf').default} download>
                            <img src={require('../assets/images/i22.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Biomedical</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/10_Automobile.pdf').default} download>
                            <img src={require('../assets/images/i23.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Automobile</p>
                            </a>
                        </div>

                        <div className="col-sm-1 p-3 text-center">
                        <a href={require('../assets/pdf/17_Mechanical.pdf').default} download>
                            <img src={require('../assets/images/i24.png').default} alt="#" className="img-fluid"/>
                            <p className="px-3">Mechanical</p>
                            </a>
                        </div>



                    </div>

                </div>
                </Scrollbars>
            </div>


            <div className={props.pathRightModal1 ? "rightModal modals position-fixed showModal" : "rightModal modals position-fixed"}>
            <Scrollbars  style={{ width: "100%", height: "80vh" }}>
                <a href="#" className="closeModal position-absolute" onClick={(event) => props.closeModal(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12 p-3">

                            <h4 className="brownTxt font-weight-bold h5 mb-3">Foundational  Certifictions</h4>

                            <p>Capsule Labs’ innovative provenance aware certification services are geared towards advanced engineering students, engineering graduates in their gap year 
                                and early career professionals seeking rewarding careers in the development and deployment of IoT enabled solutions for their specialized industry verticals. 
                                The certifications are also suitable for developing niche skillsets used in the IT/electronics industries. Engineering students can also take up certifications 
                                to fulfil their academic requirements or for researching advanced topics.     
                            </p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Full Stack Developer Certificate </h4>
                            <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a web application for managing IoT devices.</p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Android Developer Certificate </h4>
                            <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development or testing of a mobile application or a human machine interface on an Android device. The HMI should be used for managing an IoT device, while the mobile app may use inbuild sensors in the Android device. </p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Cloud Developer Certificate </h4>
                            <p>This certification is based on successfully executing a project where at least 100 hours has been spent towards the design, development, testing and deployment of a UI application for managing IoT devices and at least 150 hours has been spent towards SAAS integrations with third party platforms or cloud native services. </p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Embedded Developer Certificate </h4>
                            <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of an embedded application on an IoT device.</p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT Blockchain Developer Certificate </h4>
                            <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a blockchain as a backend system to manage data from IoT devices.</p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">IoT AI/ML Developer Certificate </h4>
                            <p>This certification is based on successfully executing a project where at least 250 hours has been spent towards the design, development, testing and deployment of a computational model, working with data from an IoT device.</p>
                            <p>Foundational certifications typically place a workload of 25-30 hr/ week and can take 12-16 weeks to execute. Each certification may require 7-10 project consultations. The cost of capsules can range between INR 2000 to INR 10000 for generic hardware.    For additional information and registrations email atanurc@capsulelabs.in </p>


                        </div>

                    </div>

                </div>
            </Scrollbars>
            </div>

            <div className={props.pathRightModal2 ? "rightModal modals position-fixed showModal" : "rightModal modals position-fixed"}>
            <Scrollbars  style={{ width: "100%", height: "80vh" }}>
                <a href="#" className="closeModal position-absolute" onClick={(event) => props.closeModal(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12 p-3">

                            <h4 className="brownTxt font-weight-bold h5 mb-3">Advanced  Certifictions</h4>
                            <p>Advanced certifications can take 24-32 weeks to complete and specialized imported hardware can cost INR 10k-100k.  For additional information and registrations email atanurc@capsulelabs.in </p>
                        
                            <h4 className="brownTxt font-weight-bold h5 mb-3">IoT Developer Certificate </h4>
                            <p>This certification is based on successfully executing a project where at least 500 hours has been spent towards the design, development, testing and deployment of 
                                an IoT system, comprising of IoT end devices and an IoT data and device management application. Following certifications can be upgraded to an IoT Developer 
                                certificate by fulfilling the additional scope/effort requirements. </p>
                            

                            <div className="row modalList">
                                <div className="col-sm-6">
                                    <ul>
                                        <li>IoT Full Stack certificate</li>
                                        <li>IoT Cloud Developer Certificate</li>
                                        <li>IoT Embedded Developer Certificate</li>                                   
                                    </ul>
                                </div>

                                <div className="col-sm-6">
                                    <ul>
                                        <li>IoT Android Developer Certificate</li>   
                                        <li>IoT Blockchain Developer Certificate</li>   
                                        <li>IoT AI/ML Developer Certificate</li>                                  
                                    </ul>
                                </div>
                            </div>


                            <h4 className="brownTxt font-weight-bold h5 mb-3">AIoT Developer Certificate </h4>
                            <p>This certification is based on successfully executing a project where at least 750 hours has been spent towards the design, development, testing and deployment 
                                of an AI enabled IoT system, comprising of self-learning IoT devices and an IoT data and device management application. Following certifications can be upgraded 
                                to an IoT Developer certificate by fulfilling the additional scope/effort requirements. </p>
                            

                            <div className="row modalList">
                                <div className="col-sm-6">
                                    <ul>
                                        <li>IoT Full Stack certificate</li>
                                        <li>IoT Cloud Developer Certificate</li>
                                        <li>IoT Embedded Developer Certificate</li>     
                                        <li> IoT Developer Certificate</li>                              
                                    </ul>
                                </div>

                                <div className="col-sm-6">
                                    <ul>
                                        <li>IoT Android Developer Certificate</li>   
                                        <li>IoT Blockchain Developer Certificate</li>   
                                        <li>IoT AI/ML Developer Certificate</li>                                  
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                </Scrollbars>
            </div>


            <div className={props.pathRightModal3 ? "rightModal modals position-fixed showModal" : "rightModal modals position-fixed"}>
            <Scrollbars  style={{ width: "100%", height: "80vh" }}>
                <a href="#" className="closeModal position-absolute" onClick={(event) => props.closeModal(event)}><i className="fa fa-times" aria-hidden="true"></i></a>
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12 p-3">

                            <h4 className="brownTxt font-weight-bold h5 mb-3">Advisory Services</h4>

                            <p>Capsule Labs advisory services are available towards institutional improvements and IoT evangelization. For appointments email atanurc@capsulelabs.in  
                            </p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">Webinars and motivational speaking services </h4>
                            <p>This service is available to institutions to create awareness around emerging area among their learners. Sessions are typically 1- 2 hours in duration. 
                                Our speaking topics include, but not limited to the following area:</p>

                            <ul className="pl-0">
                                <li>a)	Intelligence in IoT </li>
                                <li>b)	IoT applications and career opportunities</li>
                                <li>c)	Blockchain and its role in IoT</li>
                                <li>d)	Managing IoT systems – a device management perspective </li>
                                <li>e)	Managing IoT systems – a data management perspective </li>
                                <li>f)	Smart Cities around the world</li>
                                <li>g)	Solving the employer’s dilemma – beyond campus placements </li>
                            </ul>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">Extended webinars and workshops </h4>
                            <p>This service is available to institutions for engaging their faculty members or onboarding new teams. The sessions are spread out over multiple days and can be delivered online, on campus 
                                or at getaway locations. The session content and duration are customized for the audience. </p>

                            <h4 className="brownTxt font-weight-bold h5 mb-3 mt-5">Curriculum building services </h4>
                            <p>This service is available to institutions planning to start offering courses in IoT and require advisory services for curriculum building, content creation or lab development services. This service is available on a retainership model. </p>

                        </div>

                    </div>

                </div>
                </Scrollbars>
            </div>


        </React.Fragment>


    )
}


export default Modals;