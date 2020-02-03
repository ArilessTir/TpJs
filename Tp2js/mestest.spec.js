
test('retour de coordonée aléatoire comprise entre 0 et 50',() => {
    const position=coordonee();
    expect(position[0]).toBeLessThanOrEqual(50);
    expect(position[1]).toBeLessThanOrEqual(50);
});


function coordonee(x=Math.floor(Math.random()*50), y=Math.floor(Math.random()*50)){
    return [x,y];
};

test('retour de l orientation du rover',()=>{
    const orient=['N','S','E','O'];
    const orientation_rover= orientation(); 
    expect(orient).toContain(orientation_rover); // le tableau orient contiens l'orientation du rover 
});

function orientation(cardinaux=['N','S','E','O']){
    const orientation =Math.floor(Math.random() * cardinaux.length);
    return cardinaux[orientation];
}
    



test('Rover orienté initialement au N et tourne a doite vers E',()=>{
        const rover = {cordonnee : coordonee(), orientation:orientation('N')};
        const nouvelle_orientation = majOrientationRover(rover,'d');
        expect(nouvelle_orientation.orientation).toEqual('E');
});

test('Rover orienté initialement au E et tourne a droite vers S',()=>{
    const rover = {cordonnee : coordonee(), orientation:orientation('E')};
    const nouvelle_orientation = majOrientationRover(rover,'d');
    expect(nouvelle_orientation.orientation).toEqual('S');
});

test('Rover orienté initialement au S et tourne a droite vers O',()=>{
    const rover = {cordonnee : coordonee(), orientation:orientation('S')};
    const nouvelle_orientation = majOrientationRover(rover,'d');
    expect(nouvelle_orientation.orientation).toEqual('O');
});

test('Rover orienté initialement au O et tourne a droite vers N',()=>{
    const rover = {cordonnee : coordonee(), orientation:orientation('O')};
    const nouvelle_orientation = majOrientationRover(rover,'d');
    expect(nouvelle_orientation.orientation).toEqual('N');
});

test('Rover orienté initialement au N et tourne a gauche vers O',()=>{
    const rover = {cordonnee : coordonee(), orientation:orientation('N')};
    const nouvelle_orientation = majOrientationRover(rover,'g');
    expect(nouvelle_orientation.orientation).toEqual('O');
});

test('Rover orienté initialement au O et tourne a gauche vers S',()=>{
    const rover = {cordonnee : coordonee(), orientation:orientation('O')};
    const nouvelle_orientation = majOrientationRover(rover,'g');
    expect(nouvelle_orientation.orientation).toEqual('S');
});

test('Rover orienté initialement au S et tourne a gauche vers E',()=>{
    const rover = {cordonnee : coordonee(), orientation:orientation('S')};
    const nouvelle_orientation = majOrientationRover(rover,'g');
    expect(nouvelle_orientation.orientation).toEqual('E');
});

test('Rover orienté initialement au E et tourne a gauche vers N',()=>{
    const rover = {cordonnee : coordonee(), orientation:orientation('E')};
    const nouvelle_orientation = majOrientationRover(rover,'g');
    expect(nouvelle_orientation.orientation).toEqual('N');
});

function majOrientationRover(rover,commande){
    const tabOrientation=['N','E','S','O'];
    const commandeMapping = {d:+1 , g:-1};
    const indexOrientationActuelle = tabOrientation.indexOf(rover.orientation);// retourne l'index de rover.orientation dans tabOrientation
    const majOrientationIndex = ((indexOrientationActuelle+ commandeMapping[commande]+tabOrientation.length)%tabOrientation.length);
    let majOrientation = tabOrientation[majOrientationIndex];
    return {...rover,orientation:majOrientation};
    }

//- Les commandes pour changer de position sont avance/recule (a,r).
test('Rover avec x = O et y = 0 orienté E avance et obtient x=1 et y=0',()=>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('E')};
    const nouvelle_position = majPositionRover(rover, 'a');
    expect(nouvelle_position.cordonnee[0]).toEqual(1);
});

test('Rover avec x = O et y = 0 orienté E recul et obtient x=49 et y=0',()=>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('E')};
    const nouvelle_position = majPositionRover(rover, 'r');
    console.log('*******' + nouvelle_position.cordonnee[0])
    console.log('*******' + rover.cordonnee[0])
    expect(nouvelle_position.cordonnee[0]).toEqual(49);
});

test('Rover avec x = O et y = 0 orienté N avance et obtient x= et y=1',()=>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('N')};
    const nouvelle_position = majPositionRover(rover, 'a');
    expect(nouvelle_position.cordonnee[1]).toEqual(1);
});

test('Rover avec x = O et y = 0 orienté N recul et obtient x=0 et y=49',()=>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('N')};
    const nouvelle_position = majPositionRover(rover, 'r');
    expect(nouvelle_position.cordonnee[1]).toEqual(49);
});

test('Rover avec x = O et y = 0 orienté S avance et obtient x= et y=49',()=>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('S')};
    const nouvelle_position = majPositionRover(rover, 'a');
    expect(nouvelle_position.cordonnee[1]).toEqual(49);
});

test('Rover avec x = O et y = 0 orienté S recul et obtient x=0 et y=1',()=>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('S')};
    const nouvelle_position = majPositionRover(rover, 'r');
    expect(nouvelle_position.cordonnee[1]).toEqual(1);
});

test('Rover avec x = O et y = 0 orienté O avance et obtient x=49 et y=0',()=>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('O')};
    const nouvelle_position = majPositionRover(rover, 'a');
    expect(nouvelle_position.cordonnee[0]).toEqual(49);
});

test('Rover avec x = O et y = 0 orienté O recul et obtient x=1 et y=0',()=>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('O')};
    const nouvelle_position = majPositionRover(rover, 'r');
    expect(nouvelle_position.cordonnee[0]).toEqual(1);
});

function majPositionRover( rover, command){
    const map2maps = {
        a:{x:{N:0,S:0,E:1,O:-1}, y:{N:1,S:-1,E:0,O:0}},
        r:{x:{N:0,S:0,E:-1,O:1}, y:{N:-1,S:1,E:0,O:0}}
        
    };
    const cordonnee =[
        deplacer(rover.cordonnee[0], rover.orientation, 50, map2maps[command].x),
        deplacer(rover.cordonnee[1], rover.orientation, 50, map2maps[command].y)
    ];
    return {...rover, cordonnee};
}


function deplacer(coord, orientation, mapSize, orientationMap){
    return (coord + orientationMap[orientation] + mapSize)%mapSize;
}

test('Le Rover Position et Orientation, il est orienté N en [0,0] avance 4 fois tourne 2 fois a gauche et avance 1 fois', () =>{
    const rover = {cordonnee : coordonee(0,0), orientation:orientation('N')};
    const commandeList = ['a','a','a' ,'a','g','g','a' ] ;
    const MajRover = majOrientationPosition(rover,commandeList);
    expect(MajRover).toEqual({cordonnee : coordonee(0,3), orientation:orientation('S')});
  }
);

function majOrientationPosition(rover , commandeList) {
    commandeList.map(function(commande) {
        if (commande==='a' || commande==='r'){
           rover = majPositionRover(rover, commande);
        }
        else {
           rover = majOrientationRover(rover,commande);
        }

      });
        return rover ;
  }

test('Creation d obstacle', () =>{
    const position=obstacle();
    expect(position[0]).toBeLessThanOrEqual(50);
    expect(position[1]).toBeLessThanOrEqual(50);}
);

function obstacle(x=Math.floor(Math.random()*50), y=Math.floor(Math.random()*50)){
return [x,y]
}



