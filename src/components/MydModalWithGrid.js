import React, {Component} from 'react';
import ModalMenu from './ModalMenu';
import InfMenuModal from '../imagen/InfMenuModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/modalMenu.css';


class MydModalWithGrid extends Component {


	constructor(props){
		super(props)
		this.state={
			show : true
			
		}

	
	}
handleModal(){
	this.setState({show: !this.state.show})



}
render(){


  const { title} =this.props
  	var i=-1, j=-1;	
  return (
  		<div id= 'firstModal'>
	     <div id ='modal'>
	       
		       
		     <div >
		      	<h5 id ='menu'>Menú</h5>
		        <h1 id='title'>{title}</h1>
		      </div>
	
			{
				InfMenuModal.map((merebar)=>{
					
					i++
					return(
						
						
						
						title === InfMenuModal[i].id &&
						<div id='infmenu' className=' row row-cols-3 g-4'>

						{
							InfMenuModal[i].array.map((merebar)=>{
								j++
								return(

								<ModalMenu
									img ={ InfMenuModal[i].array[j].['imagen']}
									titleSecond = {InfMenuModal[i].array[j].['title']}
									precio = {InfMenuModal[i].array[j].['precio']}

								/>)
							})
						}
						</div>
						  
						
						
						)

						
					

				})


				
			}

	       
	       
	     </div>
	     </div>

 	 )
   }
}

export default MydModalWithGrid