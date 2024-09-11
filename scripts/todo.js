const todo=[];
function displaytodo(){
    const grid=document.querySelector('.js-todo-grid');
    let gridhtml=``;
   todo.forEach((todoo,i)=>{
    console.log(i);
    const {name,dateadded}=todoo;
        const html=`
         <div>${name} </div>
        <div>${dateadded}</div>
      <div> <button class="delete-button js-del-butt"> Delete </button></div> 
        `
         gridhtml+=html;
    });
    grid.innerHTML=gridhtml;
    document.querySelectorAll(`.js-del-butt`).forEach((deleteval,index)=>{
            deleteval.addEventListener('click',()=>{
                todo.splice({index},1);
                displaytodo();
            });


    });
}
function intake(){
    const inputElement=document.querySelector('.js-input');
    const inputDate=document.querySelector('.js-date');
    const dateadded=inputDate.value;
    const name=inputElement.value;
    const todoobject={
        name,
        dateadded
    };
    todo.push(todoobject);
    inputElement.value='';
    displaytodo();

}