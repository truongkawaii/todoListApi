import React, { useState } from 'react';
import './buttonAdd.css';
const buttonAdd = (props) => {
   const {handleAdd,
          addItem,
          saveItem,
          handleId,
          handleName,
          handleImg,
          handleTime,
          edit,
          saveEdit, 
          itemNew}=props

     
    
    return (
        <div>
         <div className="btn-add"> <a onClick={handleAdd} href="">ADD A item</a></div>
         {/* {edit?
          <div className="list-add">
          <input type="text"
            value={val.id} 
            onChange={(e)=>setValue({
              id:e.target.value,
              name:val.name,
              avatar:val.avatar,
              createdAt:val.createAt
            })}/>
          <input type="text" 
             value={val.name} 
             onChange={(e)=>setValue({
               id:val.id,
               name:e.target.value,
               avatar:val.avatar,
               createdAt:val.createAt
             })}
             />
          <input type="text" 
              value={val.avatar} 
              onChange={(e)=>setValue({
              id:val.id,
              name:val.name,
              avatar:e.target.value,
              createdAt:val.createAt
          })}
          />
          <input type="text" 
              value={val.createAt} 
              onChange={(e)=>setValue({
              id:val.id,
              name:val.name,
              avatar:val.avatar,
              createdAt:e.target.value
          })}
          />
           <h6 href="" onClick={saveEdit}>SAVE EDIT</h6>
          </div>
           :
           null
         } */}
         {addItem?
            <div className="list-add">
            <input type="text"  onChange={handleId}  placeholder="id"/>
            <input type="text" onChange={handleName} placeholder="name" />
            <input type="text" onChange={handleImg} placeholder="img src"/>
            <input type="text" onChange={handleTime} placeholder="create_at"/>
             <a href="" onClick={saveItem}>SAVE ADD</a>
            </div>
             :
             null
         }
        </div>
    );
};

export default buttonAdd;