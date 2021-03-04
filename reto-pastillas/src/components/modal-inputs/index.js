import React from 'react'
let InputText=()=>{
    return(
        <input type="text"/>
    );
}
let InputCheck=()=>{
    return(
        <input type="checkbox"/>
    );
}

class ModalInput extends React.Component{
    render(){
        
           switch (this.props.type) {
            case 'text':
                   return(<InputText/>)
            case 'checkbox':
                return(<InputCheck/>)
            default:
                   break;
           }
       
        
    }
}
export default ModalInput