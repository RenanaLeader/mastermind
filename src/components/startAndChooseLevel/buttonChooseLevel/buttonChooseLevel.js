import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './buttonChooseLevel.css'

export default function ButtonChooseLevel(props){
    //user choose level and save level in redux
   const saveLevel=(e)=>{
    props.saveLevelInRedux(e.currentTarget.innerText)
    props.changeChooseLevelToTrue()
   }
    return(
        <>
       <ButtonGroup >
       <Button style={{marginTop:'10px' ,backgroundColor:'cadetblue',fontSize: 'larger'}} onClick={saveLevel}>{props.level}</Button>
       </ButtonGroup>
        </>
    )
}