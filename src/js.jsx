import React , { useState,useEffect} from "react";
import './App.css';
function Abb(){
const [newitem,setitem]=useState("");
const [items,setitmes]=useState([]);
const [theme,settheme]=useState('red');
function Add(){
    if(!newitem){
        alert( "Add text to do");
        }
        const item={
            id: Math.floor(Math.random() * 100),
            text: newitem
    }
    setitmes(oldlist=>[...oldlist,item]);
    setitem("");
    console.log(item.id)
}
function Delete(id){
    const newArray=items.filter(item => item.id!==id);
    setitmes(newArray);
}

useEffect(() => {
    settheme(theme);
},[theme] );
const changtheme=()=>{
    return theme==='green'?'red':'green';

};
return(
<div>
<div className="b1">
   < div className='b'>
   <h1 className="f1">To do list</h1>
    <div>
      <label id="1" >Enter task</label>
      <input type="text" placeholder="add task" value={newitem} onChange={(e)=>setitem(e.target.value)}/>
      
      <button id ="1" onClick={()=>Add() }className="g1">Add task</button>
      <ul>
        { items.map(item => {
            return(
                <li key={item.id} id="1"> <span >{item.text}</span> <button onClick={()=>Delete(item.id)} className="g1"> delete</button> 
                <button onClick={()=>{
                    if(!newitem){
                        alert( "Add text to do");
                    }
                    else{
                    item.text=newitem;
                    console.log(item)
                    setitem("");}
                }}className="g1"> Edit</button>
                 <button onClick={()=>settheme(changtheme)
                 } style={{background:theme
                 }} > condition </button>
                </li>
                
            )
        })} 
      </ul>
      </div>
   </div>
   </div>
 
</div>
)
}

export default Abb;