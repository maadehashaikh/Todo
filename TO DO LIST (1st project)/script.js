function displayContent(){
    let content = document.getElementById("text");
    let para = document.getElementById("showcontent");
     if(content.value == ""){                                                               
        alert("Enter your task first");                                                                    
    }   
    else{
        let newElmnt = document.createElement("li");
        console.log(newElmnt.innerText);
        newElmnt.innerHTML = `${content.value} 
        <i id="del" class="fa-solid fa-trash"></i>`;  
        para.append(newElmnt); 
        content.value ="";
        newElmnt.querySelector("#del").addEventListener("click",remove);
        function remove(){
            newElmnt.remove();
        }
    }                                                                                 
}