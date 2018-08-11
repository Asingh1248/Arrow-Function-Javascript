const todos=
[
    {
       title:'Buy Bread',
       isDone:true,
    },
    
    { 
       title:'Go to Gym',
       isDone:true,

    },
    
    
    {
       title:'Record YouTube Videos',
       isDone:false

    },
]

//Filter Moves to Every Single Element of the Array like For Each and
//Return the Only Which Meets the Certain Condition in the fundef{}

//Condition is isDone==true Return Those Element
const thingsDone=todos.filter((todo)=>todo.isDone===true)

console.log(thingsDone) 
//Return those todos which are done

