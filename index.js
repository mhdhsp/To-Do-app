



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
        p2.innerHTML=`.${value}`;


        d1.appendChild(p);
         d1.appendChild(p2);

        //button div
        b1=document.createElement("button");
       b1.innerHTML="delete";
       b1.classList.add("delete-btn");


            //function when clicking delete
       b1.addEventListener("click",function(){
         delval=this.parentElement.firstElementChild.innerHTML;
         console.log(delval);
         ind=arrayOfItems.indexOf(delval);
         arrayOfItems.splice(ind,1);
         
        this.parentElement.remove();
       redisplay();
        // alert("hello");
       });

        d1.appendChild(b1);
       document.getElementById("list-field").appendChild(d1);


    

    });
}





function clearField()
{
   document.querySelectorAll("#list-field div").forEach(div => div.remove());
}




// document.body.addEventListener("keydown",function(event){
//     if(event.key=="Enter")
//         add();
// });







// function allclear()
// {
//     document.getElementById("list-field").innerHTML="";
//     return count=0;
// }


// document.getElementById("outer").addEventListener("click",function(){
//     // alert("hello");
//     document.body.classList.toggle("dark-theme");
//     document.getElementById("list-field").classList.toggle("dark-theme");
//     document.getElementById("outer").classList.toggle("outer-dark");
//     document.getElementById("inner").classList.toggle("inner-dark");
//     them=document.getElementById("inner").textContent;
    
    
//     if(them=="Dark")
//         them="Light";
//     else
//         them="Dark";
//     document.getElementById("inner").innerHTML=them;
    
// });
