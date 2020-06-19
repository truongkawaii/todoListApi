import React from 'react';
import './buttonDelete.css';
const buttonDelete = (props) => {
    const {deleteHandle,itemkey}=props;
    return (
        <>
           <h2  onClick={()=>deleteHandle(itemkey)}> <img src="https://www.tenforums.com/geek/gars/images/2/types/thumb_Recycle_Bin_Empty.png" alt="img"/></h2>
        </>
    );
};

export default buttonDelete;