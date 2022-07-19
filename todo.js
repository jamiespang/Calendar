//to do list//
const todoObjectList = []

class Todo_Class{
constructor(item){
this.ulElement=item; 
}
add() {""
}
done_undone(x) {""
}
deleteElement(z) {""
}

display() {""
}

}

const listSection= document.querySelector("#myUL"); 

myTodoList = new Todo_Class(listSection); 

document.querySelector(".addBtn").addEventListener("click", function() {
myTodoList.add()
})

add() {
const todoInput=document.querySelector("#myInput").ariaValueMax; 
if (todoInput == "") {
alert("You did not enter an item!)
}else {
const todoObject = {
id: todoObjectList.length, 
todoText: todoInput, 
isDone: false, 
}
todoObjectList.unshift(todoObject); 
this.display(); 
document.querySelector("#myInput").value=''; 

	}

}