// Creation d'une liste tache
var tasklist = [{titre:"titre",description:"description"}]
console.table(tasklist)

//Ajout d'une tache
tasklist.push({titre:"titre2",description:"description2"})
console.table(tasklist)

//Visualiser chaque objet
tasklist.forEach(function(task){console.log(task.titre, task.description);})
console.table(tasklist)

//Pour filtrer sur un element
tasklistfFilter=tasklist.filter(function(task){return task.titre !="titre2"})
console.table(tasklistfFilter)

//Modifier un element les ... disent qu'on garde le reste
tasklist.map(function(task){return {...task, description:""}})