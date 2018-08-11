const todos=
[
    {
       title:'Buy Bread',
       isDone:true,
    },
    
    { 
       title:'Go to Vashi',
       isDone:true,

    },
    
    
    {
       title:'Watch YouTube Videos',
       isDone:false

    },

    {
       title:'Go For A Walk',
       isDone:true
    },

    {
       title:'Go to Gym',
       isDone:false
    },
    {
        title:'Watch IPL Match',
        isDone:false
    },
]



const thingsNotDone=todos.filter((todo)=>
{
    return todo.isDone===false
})

//Array ka hi function hai 
thingsNotDone.forEach(function(things,index)  
{
    console.log(things.title)   

})
//thingsNotDone----Is Also Became Array containing only 3 Elements of False


