import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function ButtonChooseLevel(props){
   const saveLevel=(e)=>{
    props.saveLevelInRedux(e.currentTarget.innerText)
    props.changeChooseLevelToTrue()
   }
    return(
        <>
       <ButtonGroup>
       <Button onClick={saveLevel}>{props.level}</Button>
       </ButtonGroup>
        </>
    )
}