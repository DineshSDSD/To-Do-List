var index=1;
function Add(){
    var list=document.createElement("li");
    list.setAttribute("id","item");
    var text=document.createTextNode(document.getElementById("tasks").value);
    if(document.getElementById("tasks").value === ""){
        alert("Please enter any Task!!!");
    }
    else{
        list.appendChild(text);
        var close=document.createElement("input");
        close.setAttribute("type","button");
        close.setAttribute("value","Delete");
        close.setAttribute("id","id"+index);
        close.setAttribute("onclick","Delete(id"+index+")");
        close.className="delete";
        list.appendChild(close);
        document.getElementById("ulist").appendChild(list);
        index+=1;
        document.getElementById("tasks").value="";
    }
}
function Delete(x){
    var a=document.getElementsByClassName("delete");
    for(i=0;i<a.length;i++){
        if(a[i].id==x.id){
            var a=a[i].parentElement;
            a.style.display="none";
        }
    }
}        