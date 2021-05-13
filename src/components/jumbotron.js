import React, {Component} from 'react';
import Img1 from '../imagen/img1.jpeg';
import Img2 from '../imagen/img2.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Helmet from "react-helmet";
import './style/jumbotron.css'



class jumbotron extends Component{
    state= {}
    render() {

    	//agg style a la imagen


        return(

            <div  id='nav'  className="container"  >
            	<Helmet bodyAttributes={{style: "background-color :#fed632 " }}/> 

				<ul className="nav">
				  <li className="nav-item">
				    <a className="nav-link active" aria-current="page" href="#">INICIO</a>
				  </li>
				  <li className="nav-item " >
				    <a className="nav-link" href="#">MENU</a>
				  </li>
				  <li >
				    <a className="nav-link" href="#">QUIENES SOMOS</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" href="#">CONTACTANOS</a>
				  </li>

				</ul>


		        <div id='jumbotro' className="carousel-wrapper jumbotron  jumbotron-fluid"   >
		            <Carousel  autoPlay={true} interval ={3000} infiniteLoop={true} showThumbs = {false} >
		                <div   >
		                   < img src={Img1} style={{width:'100%'}} />
		                </div>
		                <div  >
		                   < img src={Img2} style={{width:'100%'}} />
		                </div>
		              
		            </Carousel>
		        </div>

		       
            </div>
        );
    }
}


export default jumbotron;