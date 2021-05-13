import React,  {Component} from 'react';
import{ ModalBody}from 'react-bootstrap';
import './style/modalMenu.css';

class ModalMenu extends Component {
	render(){
		const {img, titleSecond, precio} =this.props
		return(
			<>
				<ModalBody>
					<div>
					<div className=" cardMenuModal" >
						<div className='cont-img'>
							<img className='img ' src={img}   alt="..."/>
						</div>
						<h5  className="titleSecond "  >{titleSecond} </h5>
						<h6 className='precio'>{precio} </h6>
					
					</div>
					</div>
				</ModalBody>


			</>



			)
	}
}

export default ModalMenu