import React from "react";

//styles
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";

//common
import Header from "./common/Header";
import Footer from "./common/Footer";
import Modals from "./common/Modals";


//index-page components
import Banner from "./indexcomponents/Banner";
import Whatisit from "./indexcomponents/Whatisit";
import Kickstart from "./indexcomponents/Kickstart";
import Gapcrud from "./indexcomponents/Gapcrud";
import Services from "./indexcomponents/Services";

class App extends React.Component {

  constructor(){
    super();
    this.state={
      name:"CapsuleLabs",
      pathDownModal:false,
      pathDownModal1:false,
      pathRightModal1:false,
      pathRightModal2:false,
      pathRightModal3:false,
    }
  }


  closeModal = (event) => {
    event.preventDefault();
    this.setState({
      pathDownModal:false,
      pathDownModal1:false,
      pathRightModal1:false,
      pathRightModal2:false,
      pathRightModal3:false
    })
  }



  showpathDownModal = (event) => {
    event.preventDefault();
    this.setState({
      pathDownModal:true,
      pathDownModal1:false,
      pathRightModal1:false,
      pathRightModal2:false,
      pathRightModal3:false
    })
  }

  showpathDownModal1 = (event) => {
    event.preventDefault();
    this.setState({
      pathDownModal:false,
      pathDownModal1:true,
      pathRightModal1:false,
      pathRightModal2:false,
      pathRightModal3:false
    })
  }

  showpathRightModal1= (event) => {
    event.preventDefault();
    this.setState({
      pathDownModal:false,
      pathDownModal1:false,
      pathRightModal1:true,
      pathRightModal2:false,
      pathRightModal3:false
    })
  }

  showpathRightModal2= (event) => {
    event.preventDefault();
    this.setState({
      pathDownModal:false,
      pathDownModal1:false,
      pathRightModal1:false,
      pathRightModal2:true,
      pathRightModal3:false
    })
  }

  showpathRightModal3= (event) => {
    event.preventDefault();
    this.setState({
      pathDownModal:false,
      pathDownModal1:false,
      pathRightModal1:false,
      pathRightModal2:false,
      pathRightModal3:true
    })
  }

  render(){

    return (
      <React.Fragment>
  
        <Header/>
        <Banner/>
        <Whatisit 
        showpathDownModal={this.showpathDownModal}
        showpathDownModal1={this.showpathDownModal1}
        />
        <Kickstart/>
        <Gapcrud/>
        <Services 
        showpathRightModal1={this.showpathRightModal1}
        showpathRightModal2={this.showpathRightModal2}
        showpathRightModal3={this.showpathRightModal3}
        />

        <Modals 
        pathDownModal={this.state.pathDownModal} 
        pathDownModal1={this.state.pathDownModal1} 
        pathRightModal1={this.state.pathRightModal1} 
        pathRightModal2={this.state.pathRightModal2} 
        pathRightModal3={this.state.pathRightModal3}
        closeModal={this.closeModal}
        />

        <Footer/>
  
      </React.Fragment>
    )

  }

  
}


export default App;