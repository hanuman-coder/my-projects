
var item = document.querySelector("#item");
var toDoBox = document.querySelector("#todobox");
 
item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            // console.log(item.Value);

            var task = item.value;
            var listItem = document.createElement("li");
            listItem.innerText= task
            toDoBox.appendChild(listItem);

            item.value = "";

            // x remove krne k liye

            // listItem.classList.add("demo");
            listItem.innerHTML = 
             `${task}
            <span onclick="closeMe(this)">X</span>`;
        }
        listItem.addEventListener(
            "click",
            function (e) {
                e.target.classList.toggle("done");     
            }
            )
        }
    
    )
    function closeMe(span) {
    // console.log(span.parentNode);    
    span.parentNode.remove();
}


// done cross k liye


    
    
    
    
    // appendChild
    // prepend .... 2 function