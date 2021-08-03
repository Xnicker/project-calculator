const calculatorbox = document.querySelector("#calcBody");
const display = document.querySelector("#calcDisplay");
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
        taste:"√",
        dataKey:87,
        info:"wurzel",
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
        dataKey:48,
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
        divButton.classList.add("operatorDiv");
        clickButton.classList.add("operatorButton");
        divButton.classList.add("calcDiv");
        clickButton.classList.add("calcButton");

    }
    else {
        divButton.classList.add("operandDiv");
        clickButton.classList.add("operandButton");
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

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", function (e){
    if (e.currentTarget.classList.contains("operatorButton")) {
        console.log(e.currentTarget.classList);
        display.value+=e.currentTarget.info;
    }
    
    
}))