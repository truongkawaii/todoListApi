import React from 'react';
import ButtonDelete from '../buttondelete/buttonDelete';
import ButtonEdit from '../buttonedit/buttonEdit';
const listItem = (props) => {
    const {items,HandleDelete,HandleEdit}=props;

    const listItem=items.map(item=>{
        return <div className="row" key={item.id}>
        <div  className="col-1">
             <div className="item item-id">
                <a href="">{item.id}</a>
             </div>
        </div>
        <div className="col-3">
             <div className=" item item-avatar"> 
                <img src={item.avatar} alt={item.avatar} />
             </div>
        </div>
        <div className="col-3">
            <div className="item item-name">  
              <a href="">{item.name}</a>
            </div>
        </div>
        <div className="col-3">
             <div className=" item item-created">
               <a href={item.avatar}>{item.createdAt}</a>
             </div>
        </div>
        <div className="col-1">
             <div className=" item item-delete">
                <ButtonDelete itemkey={item.id} deleteHandle={HandleDelete} />
             </div>
        </div>
        <div className="col-1">
             <div className=" item item-edit">
              <ButtonEdit itemKey={item.id} editIHandle={HandleEdit} />
             </div>
        </div>
      </div>
    })
    return (
        <>
         {listItem}
        </>
    );
};

export default listItem;