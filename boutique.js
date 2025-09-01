// Partie 1 – Mise en place

var ventes = [

{ produit: "Chaussures", montant: 40000, client: "Client A" },

{ produit: "Chemises", montant: 25000, client: "Client B" },

{ produit: "Pantalons", montant: 30000, client: "Client C" },

{ produit: "Casquettes", montant: 10000, client: "Client A" },

{ produit: "Chaussures", montant: 20000, client: "Client B" },

{ produit: "Chemises", montant: 15000, client: "Client C" },

{ produit: "Chaussures", montant: 30000, client: "Client A" },




];

var depenses = [

{ type: "Salaire", montant: 30000 },

{ type: "Électricité", montant: 15000 },

{ type: "Internet", montant: 12000 },

{ type: "Loyer", montant: 25000 },

{ type: "Transport", montant: 8000 },

{ type: "Fournitures", montant: 5000 }

];

var clients = [

{ nom: "Client A", totalAchats: 0 },

{ nom: "Client B", totalAchats: 0 },

{ nom: "Client C", totalAchats: 0 }

];

var casiers = [

{ casier: "Casier 1", produit: "Chaussures", quantite: 12 },

{ casier: "Casier 2", produit: "Chemises", quantite: 8 },

{ casier: "Casier 3", produit: "Pantalons", quantite: 6 },

{ casier: "Casier 4", produit: "Casquettes", quantite: 3 }

];

var budgetMensuel = 100000;

// console.log(ventes);
// console.log(depenses);
// console.log(clients);
// console.log(casiers);


// Partie 2 – Analyse des ventes

    // Calculez le total des ventes
function totalvente(array){
    let somme=0;
    for (let i=0;i<array.length; i++){
    
    
     somme +=array[i].montant;
        
    }
   
 return  somme
}
totalvente(ventes)
 console.log(`total ventes :${totalvente(ventes)} CFA \n`)


    // Identifiez le produit le plus vendu
function produitLePlusVendue(array){
   let new_array = array.sort((a,b) => b.montant - a.montant)
console.log(`Produit le plus vendu : ${new_array[0].produit} \n`)
}
produitLePlusVendue(ventes)

    // Pour chaque client, mettez à jour son totalAchats
    // a = ventes , b= clients
  

function nombre_achat_client(){

    for(let b=0 ; b<clients.length;b++){
        for(let i= 0;i<ventes.length;i++){
            if(ventes[i].client === clients[b].nom){
                clients[b].totalAchats++
                    
                }
        }  
      console.log(`Nom :${clients[b].nom} :totalAchats :${clients[b].totalAchats}\n`)      
    }


}  
nombre_achat_client()
 
    // Déterminez le client fidèle
function client_fidel(array){
    let b = array.sort((a,b)=>b.totalAchats -a.totalAchats)

    console.log(`${b[0].nom} est le client le plus fidel avec plus de ${b[0].totalAchats} achats \n`)


}
client_fidel(clients)


// Partie 3 – Analyse des dépenses

    // Calculez le total des dépenses
function total_depense(array){
    let b=0
        for(item of array){
            
            b+=item.montant}
    
    return b
}
    
total_depense(depenses)
console.log(`total des dépenses :${total_depense(depenses)}\n`)

    // Identifiez la catégorie de dépense la plus élevée

function cathegorie_depenses_eleve(array){
    let b = array.sort((a,b)=>b.montant - a.montant )
    console.log(`catégorie de dépense la plus élevée : ${b[0].type}\n`)

}

cathegorie_depenses_eleve(depenses)

// Partie 4 – Gestion du stock / casiers

    // Décrémentez les quantités de chaque casier en fonction des ventes

 function quantite_casier(){

    for(let i =0 ; i<casiers.length;i++ ){
    
    let b =casiers[i].produit
    
    for(let b =0 ; b<ventes.length;b++){
        if(casiers[i].produit == ventes[b].produit){
            casiers[i].quantite--
            
        }
    }
    console.log(`produit :${casiers[i].produit} , quantite restant :${casiers[i].quantite}\n`)
}
    
 }   
quantite_casier()

    // Identifiez le casier le plus vide

 function casier_plus_vide(){
     let b = casiers.sort((a,b) => a.quantite - b.quantite )
        console.log(`le casier le plus vide ${b[0].produit} \n`)

    // Indiquez si un produit est en rupture de stock
    if(b[0].produit == 0){
        console.log("celui çi est en rupture de stock")

    }    
 }   

 casier_plus_vide()

//  Partie 5 – Résultats financiers

    //  Calculez le bénéfice = total ventes – total dépenses
function benefice(){

    let benefice_total = totalvente(ventes) - total_depense(depenses) 
    
    return benefice_total
}    

benefice()
console.log(`benefice de ventes : ${benefice()}\n`)

function marge(){

    let marge20= (budgetMensuel * 20) /100
   

    if(benefice() >=marge20){
        console.log("Entreprise rentable ")
    }else{console.log("Entreprise en difficulté ")}
}
marge()

