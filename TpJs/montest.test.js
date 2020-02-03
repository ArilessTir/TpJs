
function CreationTache(titre,description){
  return {titre:titre,description:description}
};

test("Creation d'une tache", () =>{
  const tache = {titre:"titre",description:"description"};
  const tacheCree = CreationTache("titre","description");
  expect(tacheCree).toEqual(tache)
});


function AjouterTache(liste,tache){
  liste.push(tache)
  return liste 
}

test('Ajout de tache',() =>{
  liste=[]
  const tacheCree =  CreationTache("titre","description");
  const ajoutetache = AjouterTache(liste,tacheCree);
  expect(ajoutetache.includes(tacheCree)).toEqual(true)
});


function AfficherListe(liste){
  chaine= "";
  liste.forEach(function(tache){
    chaine += tache.titre
    chaine += tache.description});
  return chaine 
}

test('Afficage des taches dans la liste',() =>{
  liste=[]
  const tacheCree =  CreationTache("titre","description");
  const ajoutetache = AjouterTache(liste,tacheCree);
  expect(AfficherListe(liste)).toEqual("titredescription")
});

// SupprimerTaches prend en parametre la liste à filtrer et la tache à eliminer
function SupprimerTaches(liste, tache){
    listefiltre=liste.filter(function(task){
    return task.titre != tache.titre});
  return listefiltre
}

test('Suppression de taches dans la liste',() =>{
  liste=[]
  const tacheCree =  CreationTache("titre","description");
  const tacheCree2 =  CreationTache("titre2","description2");
  var ajoutetache = AjouterTache(liste,tacheCree);
  ajoutetache = AjouterTache(liste,tacheCree2);
  const suptache = SupprimerTaches(liste,tacheCree); // (liste,tacheCree)car on sup tacheCree
  expect(suptache.includes(tacheCree)).toEqual(false)
});


// on ne supprime jamais une liste on en crée tjr une nouvelle 
function ModifierTache(liste, titre, nouveautitre){
  nouvelle_liste= liste.map(function(task){
            if (task.titre === titre){
               task.titre = nouveautitre 
              return task}  });
  return nouvelle_liste
}

test('Modification du titre de la tache ',() =>{
  liste=[]
  liste2=[{titre:"nouveautitre", description:"description"}]
  const tacheCree =  CreationTache("titre","description");
  const ajoutetache = AjouterTache(liste,tacheCree);
  const modiftache = ModifierTache(liste, "titre", "nouveautitre")
  expect(modiftache).toEqual(liste2)
});