import React, {Component} from 'react';
import{ Modal , Button}from 'react-bootstrap';
import MydModalWithGrid from './MydModalWithGrid';
import './style/Menu.css';


class Menu extends Component{


	constructor(props){
		super(props)
		this.state={
			show : false
			
		}

	
	}
handleModal(t){
	this.setState({show: !this.state.show})




}

	render(){
		
		
		const { imgg, title, description} =this.props
		return(
			<div className= 'primario'>
				
				<div className='segundario' className="col">
					<div  className="card">
					  <img src={imgg}  className="card-img card-img-top" alt="..."/>
					  <div className="card-body">
					    <h5 className="card-title"  >{title}</h5>
					    <p className=" card-p card-text">{description}</p>
					    

					    <Button className="card-Button" onClick={() => {this.handleModal(title)}}> Ver </Button>

					  </div>

					</div>
				</div>


				<Modal  show = { this.state.show}>

			<Button id='buttonCerrarModal'  className="btn btn-light" onClick={() => {this.handleModal()}}>X</Button>
				<MydModalWithGrid
					handleClick
					title ={ title}
					
	

				/>
			

				</Modal>
		
				
			</div>
		
	

		

		); 

	}

	
}

export default Menu
