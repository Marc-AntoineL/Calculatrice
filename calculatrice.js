console.log("Js is working !")

class BaseCalculator {
    constructor() {
     // Do some stuff
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

}

let baseCalculator = new BaseCalculator();





