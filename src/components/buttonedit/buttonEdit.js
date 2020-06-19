import React from 'react';

const buttonEdit = (props) => {
    const {editIHandle,itemKey}=props
    return (
        <h2 onClick={()=>editIHandle(itemKey)}  >
          <img  src="https://image.flaticon.com/icons/png/512/61/61456.png"/>
        </h2>
    );
};

export default buttonEdit;