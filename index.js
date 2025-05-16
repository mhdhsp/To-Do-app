

function add()
{
    let newItem=document.getElementById("task-input").value;
    if(newItem=="")
        alert("please enter an item");
    else 
    newListItem(newItem);
   
    document.getElementById("task-input").value="";
    

}


function newListItem(item)
{
     let d=document.createElement("div");
     d.classList.add("list-item");
    let p=document.createElement("p");
    makeCounter();
    p.innerHTML=count+"."+item;
    let b1=document.createElement("button");
    b1.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
                 </svg>`;
    let b2=document.createElement("button");
    b2.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
            </svg>`;


    b1. addEventListener("click",function(){

            this.parentElement.parentElement.style.display="none";
       
        });  
        
    b2.addEventListener("click",function(){
        let el=this.parentElement.parentElement.firstChild;
        el.style.color="red";
        el.style.textDecoration="line-through";
        this.parentElement.parentElement.style.backgroundColor="rgb(204, 255, 204)";

    });
    d2=document.createElement("div");
    d2.appendChild(b1);
    d2.appendChild(b2);

    b1.classList.add("btn");
    b2.classList.add("btn");
    
    
     b2.classList.add("c-btn");

    b1.classList.add("btn-primary");
    b2.classList.add("btn-primary");


    d.appendChild(p);
     d.appendChild(d2);

    document.getElementById("list-field").appendChild(d);
    



}




document.body.addEventListener("keydown",function(event){
    if(event.key=="Enter")
        add();
});


let count=0;

function makeCounter()
{
    
    
         return count++;
    
}




function allclear()
{
    document.getElementById("list-field").innerHTML="";
    return count=0;
}


