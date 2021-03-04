import React from 'react'
import ModalInput from '../modal-inputs/index'
class Modal extends React.Component{
render(){
    console.log(this.props.datos)
    return (
     <React.Fragment>
    <h1>Soy un fuccking modal</h1>
    {this.props.datos.gleucemia&&<h1>gleucemia</h1>}
    {this.props.datos.presion&&<h1>presion</h1>}
    {this.props.datos.medicamentos&&<h1>medicamentos</h1>}
    <ModalInput type='checkbox'/>
    <ModalInput type='text'/>
    </React.Fragment>
    ) 
}

}
export default Modal