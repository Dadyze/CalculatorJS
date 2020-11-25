class kalkulator{
    constructor(trenutniBrojEl,prosliBrojEl){
        this.trenutniBrojEl = trenutniBrojEl;
        this.prosliBrojEl = prosliBrojEl;
        this.brisisve();        
    }


    //funkcije 

    brisisve(){
        this.trenutniBroj ="";
        this.prosliBroj = "";
        this.operacija="0";

    }
    brisijedno(){
        this.trenutniBroj = this.trenutniBroj.toString().slice(0,-1);   
    }
    formirajBroj(num){
        if(num ==="." && this.trenutniBroj.includes(".")) return;
        this.trenutniBroj = this.trenutniBroj.toString() + num.toString();
    }
    izaberiOperaciju(op){
        this.operacija = op;
        this.prosliBroj = this.trenutniBroj;
        this.trenutniBroj="";
        this.Update();
        if(this.trenutniBroj === "") return
        if(this.operacija !==""){
            this.izracunaj(); 
        }
        
    }
    izracunaj(){
        let rezultat;
        const prviBroj = parseFloat(this.trenutniBroj);
        const drugiBroj = parseFloat(this.prosliBroj);
        switch(this.operacija){
            case "+":
                rezultat = prviBroj+drugiBroj;
                break
            case "-":
                rezultat = prviBroj-drugiBroj;
                break
            case "*":
                rezultat = prviBroj*drugiBroj;
                break
            case "/":
                rezultat = prviBroj/drugiBroj;
                break
        }
        this.trenutniBroj = rezultat;
        this.operacija ="";
        this.prosliBroj = " ";

    }
    Update(){
        this.trenutniBrojEl.innerText = this.trenutniBroj;
        this.prosliBrojEl.innerText = this.prosliBroj.toString() +" " + this.operacija;
    }
}

const operacije = document.querySelectorAll(".op");
const brojevi = document.querySelectorAll(".broj");
const jednako = document.getElementById("jednako");
const AC = document.getElementById("AC");
const DEL = document.getElementById("DEL");
const tacka = document.getElementById("tacka");

var trenutniBrojEl = document.getElementById("current");
var prosliBrojEl = document.getElementById("previous");

const mojDigitron = new kalkulator(trenutniBrojEl,prosliBrojEl);
brojevi.forEach(element => {
    element.addEventListener("click",()=>{
        mojDigitron.formirajBroj(element.innerText);
        mojDigitron.Update();
    })
});

operacije.forEach(element => {
    element.addEventListener("click",()=>{
        mojDigitron.izaberiOperaciju(element.innerText);
        mojDigitron.Update();
    })
});

jednako.addEventListener("click",(button)=>{
    mojDigitron.izracunaj();
    mojDigitron.Update();
})

AC.addEventListener("click",(button)=>{
    mojDigitron.brisisve();
    mojDigitron.Update();
})

DEL.addEventListener("click",(button) =>{
    mojDigitron.brisijedno();
    mojDigitron.Update();
})

