import React, {Component} from 'react';
import Menu from './menu';
import Img1 from '../imagen/menu/Screenshot_20210406-235519.png';
import Img2 from '../imagen/menu/Screenshot_20210406-235434.png';
import Img3 from '../imagen/menu/Screenshot_20210406-235345.png';
import Img4 from '../imagen/menu/Screenshot_20210406-235314.png';
import './style/Menu.css';

class MenuTitle extends Component{

	  handleClick() {
    console.log('this is:');
  }
		
	constructor(props){
		super(props)
		this.state = {
			dateMenu :[{
				'imgg' :  Img1,
				'title' : 'Merengadas',
				'description' : 'Ricos batidos de diferentes sabores'

			},{
				'imgg':Img2,
				'title' : 'Dulces',
				'description': 'Variedad en dulces'
			},{
				'imgg' : Img3,
				'title' : 'Galletas',
				'description': 'Ricas galletas para compartir'
				},{
				'imgg' : Img4,
				'title' : 'Tortas',
				'description': 'Deliciosas tortas para difrutar'
				}


			]
		}
	}


	render(){

	


		return(
			<div id ="menu"> 
				<div> 
					<h2 id = 'titleMenu'> Menú  </h2>
				</div>


				<div id ='cards' className=' row row-cols-2 g-2' >


					
	
				{
					
					  this.state.dateMenu.map((merebar)=>{

						return(
							<Menu
							
							handleClick
								imgg=  { merebar.imgg}
								title ={ merebar.title}
								description = { merebar.description}						
				


						/>
						
						)
						

					})
				}



					
				</div>



				
			</div>
			)
	}
}

export default MenuTitle