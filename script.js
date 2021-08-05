const calculatorbox = document.querySelector("#calcBody");
const display = document.querySelector("#calcDisplay");
let input1 = undefined;
let input2 = undefined;
let aufgabe ="";
let result = undefined;
let boolClickOperator = false;
let boolMinusPlus = false;
const btnMapping = /*Enthält alle Buttons für den Calculator */[
    {
        taste:"AC",
        dataKey:89,
        info:"zuruecksetzen",
    },
    {
        taste:"C",
        dataKey:67,
        info:"loeschen",
    },
    
    {
        taste:"+/-",
        dataKey:87,
        info:"plusminus",
    },
    {
        taste:"%",
        dataKey:80,
        info:"prozent",
    },
    {
        taste:"7",
        dataKey:103,
        info:"7",
    },
        
    {
        taste:"8",
        dataKey:104,
        info:"8",
    },
        
    {
        taste:"9",
        dataKey:105,
        info:"9",
    },

    {
        taste:"/",
        dataKey:111,
        info:"geteilt",
    },

    {
        taste:"4",
        dataKey:100,
        info:"4",
    },
    
    {
        taste:"5",
        dataKey:101,
        info:"5",
    },    
    
    {
        taste:"6",
        dataKey:102,
        info:"6",
    },
    {
        taste:"x",
        dataKey:106,
        info:"mal",
    },
    {
        taste: "1",
        dataKey:97,
        info:"1", 
    },
    
    {
        taste: "2",
        dataKey:98,
        info:"2",
    },

    {
        taste:"3",
        dataKey:99,
        info:"3",
    },

    {
        taste:"-",
        dataKey:109,
        info:"minus",
    },

    {
        taste: "0",
        dataKey:96,
        info:"0", 
    },
        {
        taste: ".",
        dataKey:190,
        info:".", 
    },
    
    {
        taste:"=",
        dataKey:48,
        info:"gleich",
    },
        
    {
        taste:"+",
        dataKey:107,
        info:"plus",
    },
    
    
    
    
]
const regexZahlen = /\d/;
btnMapping.forEach(initializeButtons) /* Initialisieren der zugehörigen divs und buttons */
    

function initializeButtons(button) {
    const divButton = document.createElement("div");
    const clickButton = document.createElement("button");
    /*unelegante Lösung, Regex muss noch zum laufen gebracht werden.
     Damit die Buttons abhängig vom "Typ" die richtige Klasse kriegen  */
    if (button.taste >= 0 || button.taste ==".") {  
        divButton.classList.add("operandDiv");
        clickButton.classList.add("operandButton");
        divButton.classList.add("calcDiv");
        clickButton.classList.add("calcButton");

    }
    else {
        divButton.classList.add("operatorDiv");
        clickButton.classList.add("operatorButton");
        divButton.classList.add("calcDiv");
        clickButton.classList.add("calcButton");
    }
    divButton.id=`divButton${button.info}`; /*Zuweisen der Eigenschaften aus dem Button-Array */
    clickButton.id=`button${button.info}`;
    clickButton.dataKey=button.dataKey;
    clickButton.textContent=button.taste;
    clickButton.info=button.taste;
    calculatorbox.appendChild(divButton);
    divButton.appendChild(clickButton);
}
resetCalculator();
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", handleCalculator ))

function handleCalculator (e) {
    if (e.currentTarget.dataKey==67) { /*Wenn er C drückt */
        resetDisplay()
    }
    else if (e.currentTarget.dataKey == 89) { /*Wenn er AC drückt */
        resetCalculator();
    }
    else if (e.currentTarget.dataKey == 111 || /*Wenn er Operatoren drückt */
         e.currentTarget.dataKey == 106 || e.currentTarget.dataKey == 109 ||  e.currentTarget.dataKey == 107 ) {
        boolClickOperator = true;
        /*Überprüft ob die Inputvariablen schon geschrieben sind um zu differenzieren ob
        es sich um die erste oder zweite angegebene Zahl handelt
        Falls die erste schon beschrieben ist, soll er die zweite beschreiben und das Ergebnis ausrechnen. Notwendig da die
        Berechnung der ersten Teilaufgabe erst nach der Auswahl des zweiten Operators geschieht. Behandelt für jeden weiteren Schritt das Ergebnis als
        wäre es der erste eingegebene Value  */
        if (input1 == undefined) { 
            input1 = parseFloat(display.value);
            aufgabe = e.currentTarget.info;
        } else if (input1 != undefined) {
            input2 = parseFloat(display.value);
            result = operate(input1,input2,aufgabe);
            aufgabe = e.currentTarget.info;
            display.value = result;
            input1 = result;
            input2 = undefined;
        }
    }
    else if (e.currentTarget.dataKey == 48) { /* Wenn er = drückt */
        
       if (input1 != undefined) {
           input2 = parseInt(display.value);
       }
       if (input1 != undefined && input2 != undefined) {
           result = operate(input1,input2,aufgabe);
           display.value= result;
           input1 = undefined;
           input2 = undefined;
       }
       else if (input1 != undefined && input2 == undefined) {
           display.value = input1;
       }
        
    }
    else if (e.currentTarget.dataKey == 87) { /* Wenn er PlusMinus drückt */
        let changeString = display.value
        let regexMinus = /\-/
        if (boolMinusPlus == false) {
            boolMinusPlus = true;
            display.value=`-${changeString}`;
        }
        else {
            boolMinusPlus = false;
            display.value = changeString.replace(regexMinus,"")
        }
    }
    else if (e.currentTarget.dataKey == 80) { /*Wenn er Prozent drückt */
        let changeString = display.value / 100;
        display.value = changeString;

    }
    else { /* wenn er Zahlen drückt */
        if (boolClickOperator == true) {
            resetDisplay();
            boolClickOperator = false;
        } 
        display.value+= e.currentTarget.info 
        
    }
    
}

function operate(sum1,sum2,operator){
    if (operator == "+") {
        return sum1 + sum2;
    }
    else if (operator == "-") {
        return sum1-sum2;
    }
    else if (operator == "x") {
        return sum1 * sum2;
    }
    else if (operator == "/") {
        if (sum1 == 0 || sum2 == 0) {
            return 1337;
        }
        else {
            return sum1 / sum2;
        }
        
    }
}

function resetDisplay(){
    display.value="";
}
function resetCalculator() {
    input1= undefined;
    input2= undefined;
    aufgabe="";
    result= undefined;
    resetDisplay();
}