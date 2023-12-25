// const add_btn=document.getElementById("add_btn")
const todoList=document.getElementById("todoList")
const allTodosArraylocalStorage=window.localStorage
// for (var i=0;i<window.localStorage.length;i++){
//     allTodos[i]=localStorage.getItem(i)
// }
console.log(allTodosArraylocalStorage);

let allTodos=[];

const localStorageKeys=Object.keys(allTodosArraylocalStorage)
const localStoragevalues=Object.values(allTodosArraylocalStorage)

localStoragevalues.forEach((data,index)=>{
    const todo={
        id:index,
        value:data
    }
        allTodos.push(todo)
})

console.log(allTodos);

// const ul=document.createElement("ul");
// const unorderedList = todoList.appendChild(ul)
// console.log(unorderedList)

// for(var i=0;i<localStorageKeys.length;i++){
//     if(allTodos[i]==undefined || allTodos[i]==""){
//         continue
//     }
//     // const li=document.createElement("li")
//     // ulref.appendChild(li).innerHTML=`${localStorage.getItem(i)} <button>X</button>`

//     // const li=document.createElement("li")
//     // todoList.appendChild(li).id=String(i);
//     // todoList.appendChild(li).innerText=localStorage.getItem(String(i))
//     // todoList.appendChild(li).onclick=function(){localStorage.removeItem(li.id);todoList.removeChild(li)}
//     const li=document.createElement("li")
//     // todoList.appendChild(li).id=String(i)
//     // todoList.appendChild(li).innerText=localStorage.getItem(String(i))
//     todoList.appendChild(li).innerText=allTodos[i]
//     // todoList.appendChild(li).onclick=function(){todoList.removeChild(li);localStorage.removeItem(li.id);}
//     todoList.appendChild(li).onclick=function(){
//         delete allTodos[i];
//         console.log(i);
//         localStorage.removeItem(i);
//         todoList.removeChild(li)
//     }
//     console.log(todoList.appendChild(li).getAttribute("id"))
//     console.log(allTodos);
// }
allTodos.map((data)=>{
    // if(data.value==undefined || data.value=="") {
    //     continue;
    // }
    const li=document.createElement("li")
    todoList.appendChild(li).innerText=data.value
    todoList.appendChild(li).onclick=function(){
        allTodos = allTodos.filter((val)=>{
            return val.id != data.id;
        })
        console.log(data);
        localStorage.removeItem(data.id);
        todoList.removeChild(li)
    }
})
    
    // const li=document.createElement("li")
//     // ulref.appendChild(li).innerHTML=`${localStorage.getItem(i)} <button>X</button>`

//     // const li=document.createElement("li")
//     // todoList.appendChild(li).id=String(i);
//     // todoList.appendChild(li).innerText=localStorage.getItem(String(i))
//     // todoList.appendChild(li).onclick=function(){localStorage.removeItem(li.id);todoList.removeChild(li)}
    
//     }
//     console.log(todoList.appendChild(li).getAttribute("id"))
//     console.log(allTodos);
// }

// function createTodo(){
//     const inputData=document.getElementById("input_data").value;
//     let index=localStorageKeys.length;
//     if(inputData === "") return;
    
//     // localStorage.setItem(index,inputData)
//     allTodos[index]=inputData;
//     // console.log(localStorage)
    
//     const li=document.createElement("li")
//     todoList.appendChild(li).id=index
//     todoList.appendChild(li).innerText=inputData
//     // todoList.appendChild(li).onclick=function(){ todoList.removeChild(li);localStorage.removeItem(li.id);}
//     todoList.appendChild(li).onclick=function(){
//         delete allTodos[li.id]
//         localStorage.removeItem(li.id); 
//         console.log(li.id);
//         todoList.removeChild(li)
//     }
//     console.log(todoList.appendChild(li).getAttribute("id"))
    
//     console.log(li);
//     console.log(allTodos);

//     document.getElementById("input_data").value=""
//     document.getElementById("input_data").focus()
// }

function createTodo(){
    const inputData=document.getElementById("input_data").value;
    if(inputData.trim() === "") return;
    const todo = {
        id:allTodos.length,
        value:inputData
    }

    allTodos.push(todo)
    
    const li=document.createElement("li")
    todoList.appendChild(li).id=todo.id
    todoList.appendChild(li).innerText=todo.value
    // todoList.appendChild(li).onclick=function(){ todoList.removeChild(li);localStorage.removeItem(li.id);}
    todoList.appendChild(li).onclick=function(){
        allTodos = allTodos.filter((val)=>{
            return val.id != todo.id;
        })
        localStorage.removeItem(todo.id); 
        console.log(todo.id);
        console.log(li);
        todoList.removeChild(li)
    }
    console.log(todoList.appendChild(li).getAttribute("id"))
    console.log(todo);
    console.log(li);
    console.log(allTodos);

    document.getElementById("input_data").value=""
    document.getElementById("input_data").focus()
}

// function saveTodo(){
//     const key=Object.keys(allTodos)
//     const val=Object.values(allTodos)
//     document.getElementById("save-btn").addEventListener("click",()=>{
        

//         for(var ind=0;ind<key.length;ind++ ){
//             window.localStorage.setItem(key[ind],val[ind])
//         }
//         console.log("in save");
//     })

// }
function saveTodo(){
    
    document.getElementById("save-btn").addEventListener("click",()=>{
        
        localStorage.clear()
        allTodos.map((data)=>{
            
                window.localStorage.setItem(data.id,data.value)
            
        })
            
        console.log("in save");
    })
}


// function deleteTodo(id){
//     localStorage.removeItem(id);
    
   
// }