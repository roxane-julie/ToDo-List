function addTask() {

    //récupérer le contenu du champ
    
    // // cibler l'input 
    document.getElementById('task');
    
    // // récupérer la valeur du champ
    let task = document.getElementById('task'); 
    
    
    //afficher la nouvelle tâche 
    
    // // récupérer le parent
    let taskCard = document.getElementById('card');
    
    // // créer l'élément html li
    let newTask = document.createElement('li');

    let divTask = document.createElement('div');

    // // créer l'élément html boutton
    let deleteTask = document.createElement('button');
    // // créer l'élément html span
    let deleteTaskSpan = document.createElement('span');
    // // modif text bouton
    deleteTaskSpan.innerText = "Suppr.";


    let modifTask = document.createElement('button');

    let modifTaskSpan = document.createElement('span');

    modifTaskSpan.innerText = "Fait !";

    deleteTask.addEventListener('click', function (){
        newTask.remove();
})
  
    modifTask.addEventListener('click', function (){
        newTask.style.textDecorationLine = "line-through";
    })

    // // lui donner le contenu de la tache
    newTask.innerText = task.value ;

    // // option : donner des propriété à l'élément 
    
   
    // // insérer l'élément li dans le DOM
    taskCard.appendChild(newTask);
    
    // // insérer l'élement input dans le DOM

    divTask.appendChild(deleteTask);

    deleteTask.appendChild(deleteTaskSpan);

    divTask.appendChild(modifTask);

    modifTask.appendChild(modifTaskSpan);

    newTask.appendChild(divTask);
   
    
    // // vider l'input quand l'élément à été ajouter
    task.value = "";
    
    }