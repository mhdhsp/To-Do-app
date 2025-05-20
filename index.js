



let arrayOfItems=[];

function getItem()
{
    let newItem=document.getElementById("task-input").value;
    if(newItem=="")
        alert("please enter an item");
    else 
    addItem(newItem);
   
    document.getElementById("task-input").value="";
    

}


function addItem(item)
{
    arrayOfItems.push(item);
    redisplay();

}

function redisplay()
{
    clearField();
    
   arrayOfItems.forEach(function(value,index)
    {
        let d1=document.createElement("div");
        let p=document.createElement("p");
        p.innerHTML=`${index+1}`;

         let p2=document.createElement("p");
        p2.innerHTML=` ${value}`;


        d1.appendChild(p);
         d1.appendChild(p2);

        //button div
        d2=document.createElement("div");

        b1=document.createElement("button");
       b1.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"/>
                 </svg>`;
       b1.classList.add("delete-btn");

        b2=document.createElement("button");
        b2.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
            </svg>`
            d2.appendChild(b1);
            d2.appendChild(b2);
            


            //function when clicking delete
       b1.addEventListener("click",function(){
         delval=this.parentElement.firstElementChild.innerHTML;
         console.log(delval);
         ind=arrayOfItems.indexOf(delval);
         arrayOfItems.splice(ind,1);
         
        this.parentElement.remove();
       redisplay();
        
       });


       b2.addEventListener("click",function(){
        
         this.parentElement.parentElement.classList.toggle("completed");

       });



        d1.appendChild(d2);
        d1.classList.add("container-fluid");
       document.getElementById("list-field").appendChild(d1);


    

    });
}





function clearField()
{
   document.querySelectorAll("#list-field div").forEach(div => div.remove());
}


document.body.addEventListener("keydown",function(event){
    if(event.key=="Enter")
        getItem();
});











function allclear()
{
   arrayOfItems=[];
   redisplay();
}


document.getElementById("outer").addEventListener("click",function(){
    // alert("hello");
    document.body.classList.toggle("dark-theme");
    document.getElementById("list-field").classList.toggle("dark-theme");
    document.getElementById("outer").classList.toggle("outer-dark");
    document.getElementById("inner").classList.toggle("inner-dark");
    them=document.getElementById("inner").textContent;
    
    
    if(them=="Dark")
        them="Light";
    else
        them="Dark";
    document.getElementById("inner").innerHTML=them;
    
});
