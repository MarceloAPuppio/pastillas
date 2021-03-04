import React from 'react'
import Modal from '../modal/index'
class Historial extends React.Component{
    state={
        isModalVisible:true
    }
    render(){
        let user= this.props.user;
        console.log(this.props.user.medicamentosArray)
        return(
            (this.state.isModalVisible&&<Modal datos={this.props.user}/>)||
            <React.Fragment>
            <h1>Historial de {user.name}</h1>
            {this.props.user.medicamentosArray.map((item, index)=>{
              return(<h1>Medicamento {item.nombre}</h1>) 
            })}
            <button>Add</button>    
            </React.Fragment>

        )
    }
}
export default Historial;