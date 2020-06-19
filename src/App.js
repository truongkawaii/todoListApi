import React,{useState,useEffect} from 'react';
import './App.css';
import ButtonAdd from './components/buttonadd/buttonAdd';

import ListItem from './components/listitem/listItem';
function App() {
  const [data,setData]=useState({
     listdata:[]
  });
  const [edit,setEdit]=useState(false);
  const [additem,setAdditem]=useState(false);
  const [item,setItem]=useState({
     id:"",
     name:"",
     avatar:"",
     createdAt:""
  })
  const [add,setAdd]=useState(false)

 try {
  useEffect(()=>{
    try {
      async function fetchApi(){
        const result = await fetch(
          'https://5ee88e35ffee0c0016a12f4d.mockapi.io/api/v1/employees/demo',
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
        } 
        );
        const json = await result.json();
        setData({
          listdata:json
        });
      } 
      fetchApi();
    } catch (error) {
      console.log(error);
      
    }
   
  },[]);
 } catch (error) {
   console.log(error);
   
 }
   
 
  // Handle ADD item and Save
  const saveItem=(e)=>{
    e.preventDefault();
    setAdditem(false);
    if (item.id.length==0||item.name.length==0||item.avatar.length==0||item.createdAt.length==0) return ;
    const newList = [...data.listdata];
    newList.push(item);
    try {
      async function postApi(){
        const result = await fetch(
          'https://5ee88e35ffee0c0016a12f4d.mockapi.io/api/v1/employees/demo',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        } 
        );
    
        setData({
          listdata:newList
        });
      } 
      postApi();
    } catch (error) {
      console.log(error);
      
    }
    
    
  }
  //  open input to typing add item
   const HandleAddItem=(e)=>{
     e.preventDefault();
      setAdditem(true);
   }
  // Take value to setState , ADD to API 
   const takeId=(e)=>{
    setItem({
      id:e.target.value,
      name:item.name,
      avatar:item.avatar,
      createdAt:item.createdAt
    })
   }
   const takeName=(e)=>{
    setItem({
      id:item.id,
      name:e.target.value,
      avatar:item.avatar,
      createdAt:item.createdAt
    })
   }
   const takeImg=(e)=>{
    setItem({
      id:item.id,
      name:item.name,
      avatar:e.target.value,
      createdAt:item.createdAt
    })
  }
  const takeTime=(e)=>{
    setItem({
      id:item.id,
      name:item.name,
      avatar:item.avatar,
      createdAt:e.target.value
    })
  }

  // Handle Delete
  const HandleDelete=(itemId)=>{
    try {
      async function deleteApi(){
        const result = await fetch(
          `https://5ee88e35ffee0c0016a12f4d.mockapi.io/api/v1/employees/demo/${itemId}`,
          {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
        } 
        );
       const newList= data.listdata.filter(x=>{
          return x.id!=itemId;
        })
        setData({
          listdata:newList
        });
      } 
      deleteApi();
    } catch (error) {
      console.log(error);
      
    }
    
  }
  //  handle set state when Edit
  const  HandleEdit = (key)=>{
    setEdit(true);
    const newList = [...data.listdata];
   const number= newList.findIndex(item=>item.id==key);
    const Newitem=newList[number];

    setItem({
      id:Newitem.id,
      name:Newitem.name,
      avatar:Newitem.avatar,
      createdAt:Newitem.createdAt
    })
  }
  //  Save Edit
  const SaveHanldeEdit=()=>{
    setEdit(false);
    try {
      async function putApi(){
        console.log(item,'itemEDIT');
        // Edit data api 
         fetch(
          `https://5ee88e35ffee0c0016a12f4d.mockapi.io/api/v1/employees/demo/${item.id}`,
          {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body:JSON.stringify({avatar:item.avatar,name:item.name,createdAt:item.createdAt})
        } 
        ).then(res => res.json()).then(resolve => {
          const List =[...data.listdata];
          const newList= List.map(itemm => {
            if(itemm.id===resolve.id){
               return {...resolve}     
            }
            return itemm;
          })
         setData({
          listdata:newList
         })
          
        });

       setItem({
          id:"",
          name:"",
          avatar:"",
          createdAt:""
       })
      } 
      putApi();
    } catch (error) {
      console.log(error);
      
    }

  }
  return (
    <div className="App">
      <div className="container">
       {edit?
       null
       :
       <ButtonAdd 
       saveItem={saveItem} 
       handleAdd={HandleAddItem} 
       addItem={additem}
       handleId={takeId}
       handleName={takeName}
       handleImg={takeImg}
       handleTime={takeTime}
       itemNew={item}
      />
       }

           {edit?
          <div className="list-add">
          <input type="text" 
             value={item.name} 
             onChange={(e)=>setItem({
               id:item.id,
               name:e.target.value,
               avatar:item.avatar,
               createdAt:item.createdAt
             })}
             />
          <input type="text" 
              value={item.avatar} 
              onChange={(e)=>setItem({
              id:item.id,
              name:item.name,
              avatar:e.target.value,
              createdAt:item.createdAt
          })} 
          />
          <input type="text" 
              value={item.createdAt} 
              onChange={(e)=>setItem({
              id:item.id,
              name:item.name,
              avatar:item.avatar,
              createdAt:e.target.value
          })}
          />
           <h6 href="" onClick={SaveHanldeEdit}>SAVE EDIT</h6>
          </div>
           :
           null
         }
         <ListItem 
           getId={item.id} 
           items={data.listdata} 
           HandleDelete={HandleDelete} 
           HandleEdit={HandleEdit}/>
      </div>
    </div>
  );
}

export default App;
