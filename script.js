const calculatorbox = document.querySelector("#calculatorbox");
const btnMapping = /*Enthält alle Buttons für den Calculator */[
    {
        taste:"0",
        dataKey:96,
        info:"0",
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
        taste:"=",
        dataKey:48,
        info:"gleich",
    },
        
    {
        taste:"+",
        dataKey:107,
        info:"plus",
    },
    
    {
        taste:"-",
        dataKey:109,
        info:"minus",
    },
    {
        taste:"x",
        dataKey:106,
        info:"mal",
    },
    {
        taste:"/",
        dataKey:111,
        info:"getelt",
    },
    {
        taste:"C",
        dataKey:67,
        info:"loeschen",
    },
    {
        taste:"AC",
        dataKey:89,
        info:"zuruecksetzen",
    },
    {
        taste:"wrz",
        dataKey:87,
        info:"wurzel",
    },
    {
        taste:"prz",
        dataKey:80,
        info:"prozent",
    },
]
btnMapping.forEach(function(button){ /* Initialisieren der zugehörigen divs und buttons */
    const divButton = document.createElement("div");
    const clickButton = document.createElement("button");
    divButton.classList.add("calccontainer");
    divButton.id=`divButton${button.info}`;
    clickButton.classList.add("buttonCalc");
    clickButton.id=`button${button.info}`;
    clickButton.dataKey=button.dataKey;
    clickButton.textContent=button.taste;
    calculatorbox.appendChild(divButton);
    divButton.appendChild(clickButton);
})

