console.log("Js is working !")

class BaseCalculator {
    
    constructor() {
        this.MaListe = []
        this.Limite = 10 //On définit arbitrairement une limite de calculs enregistrés
     }


    UseCalcul(elem){
        this.elem = elem
        console.log(this.elem)
        if(this.elem === "C"){ //L'utilisateur appuie sur clear
            document.getElementsByClassName("tape_txt")[0].innerHTML = "\n"
        }
        else if(this.elem === "B"){ //L'utilisateur souhaire retirer un seul caractère
            var txt = document.getElementsByClassName("tape_txt")[0].innerHTML
            document.getElementsByClassName("tape_txt")[0].innerHTML = txt.substring(0, txt.length - 1);
        }
        else{
            document.getElementsByClassName("tape_txt")[0].innerHTML += this.elem
        }
        
    }

    Calc(){
        var calcul =  document.getElementsByClassName("tape_txt")[0].innerHTML
        calcul = calcul.replaceAll(" ","")
        if( calcul.length !== 1 ){
            document.getElementsByClassName("text_result")[0].innerHTML = "\n"
    
            document.getElementsByClassName("previous_calc")[0].innerHTML = calcul

            if(this.MaListe.length === 0){
                this.MaListe.push(calcul) //On push le calcul dans la liste afin de pouvoir le récupérer par la suite
            }
            else{
                if (calcul !== this.MaListe[this.MaListe.length - 1]){ //On évite d'enregistrer le même calcul
                    if(this.MaListe.length >= this.Limite){ //Si le tableau est trop remplit, on clear la valeur la plus lointaine pour ne pas trop charger la variable
                        this.MaListe.shift()
                    }
                    this.MaListe.push(calcul) //On push le calcul dans la liste afin de pouvoir le récupérer par la suite

                }
            }

          


            calcul = calcul.replaceAll('×','*') //On remplace les multiplications par * pour que la fonction eval() comprenne
            calcul = calcul.replaceAll('÷','/') //On remplace les divisions par / pour que la fonction eval() comprenne
            calcul = calcul.replaceAll(',','.') //On remplace les virgule par . pour que la fonction eval() comprenne
    
            //Permet de détecter les erreurs dans le calcul.
            try {
                document.getElementsByClassName("text_result")[0].innerHTML = eval(calcul)
              } catch (err) {
              
                document.getElementsByClassName("text_result")[0].innerHTML = "Syntax Error"
              
            }
        
            document.getElementsByClassName("tape_txt")[0].innerHTML = "\n"
        }
    
    }

    Previous(){
        if(this.MaListe.length !== 0){ //On vérif que le tableau n'est pas vide
            document.getElementsByClassName("tape_txt")[0].innerHTML = this.MaListe.pop() //On met le calcul précédent
        }
        
    }

}

let baseCalculator = new BaseCalculator();





