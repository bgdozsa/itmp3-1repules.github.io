let listTars=[
    "Alaska Airlines Inc.",
"Allegiant Air",
"American Airlines Inc.",
"Delta Air Lines Inc.",
"Endeavor Air Inc.",
"Envoy Air",
"ExpressJet Airlines Inc.",
"ExpressJet Airlines LLC",
"Frontier Airlines Inc.",
"Hawaiian Airlines Inc.",
"JetBlue Airways",
"Mesa Airlines Inc.",
"PSA Airlines Inc.",
"Republic Airline",
"SkyWest Airlines Inc.",
"Southwest Airlines Co.",
"Spirit Air Lines",
"United Air Lines Inc."
];

let osszesJarat=[
284697,
115030,
1018437,
1073663,
281625,
351701,
24389,
119067,
149912,
90637,
321204,
244057,
313346,
360077,
909735,
1463985,
224464,
673640
];

let latogatottRepterek=[
77,
126,
117,
154,
127,
169,
111,
120,
106,
19,
70,
130,
104,
120,
277,
90,
52,
122
];

let toroltArany=[
    "1,09%",
    "0,59%",
    "1,97%",
    "0,15%",
    "1,45%",
    "3,06%",
    "3,93%",
    "3,69%",
    "1,59%",
    "0,20%",
    "0,88%",
    "2,71%",
    "2,36%",
    "1,94%",
    "1,86%",
    "2,23%",
    "1,59%",
    "0,75%"
]

let atlagosKeses=[
51,
71,
68,
68,
79,
65,
80,
86,
68,
40,
79,
81,
70,
69,
84,
52,
69,
75
]

let legforgalmasabbRepter=[
"SEA",
"SFB",
"DFW",
"ATL",
"ATL",
"ORD",
"IAH",
"IAH",
"DEN",
"HNL",
"BOS",
"DFW",
"CLT",
"LGA",
"ORD",
"MDW",
"FLL",
"ORD"
];

let logok=[
    "Alaska-Airlines_Inc_logo.png",
    "Allegiant_Air_logo.jpg",
    "American-Airlines_Inc_logo.png",
    "Delta_Airlines_Inc_logo.jpg",
    "Endeavor_Air_Inc_logo.png",
    "Envoy_Air_logo.jpg",
    "ExpressJet_Airlines_Inc_logo.jpg",
    "ExpressJet_Airlines_LLC_logo.jpg",
    "Frontier_Airlines_Inc_logo.png",
    "Hawaiian_Airlines_Inc_logo.png",
    "JetBlue_Airways_logo.png",
    "Mesa_Airlines_Inc_logo.png",
    "PSA_Airlines_Inc_logo.png",
    "Republic_Airline_logo.png",
    "SkyWest_Airlines_logo.png",
    "Southwest_Airlines_Co _logo.jpg",
    "Spirit_Airlines_logo.png",
    "United_Airlines_Inc_logo.png",
];

function kiir(){
    
    let szoveg = `<ul>`;
    for (i=1;i<listTars.length;i++)
    {
        szoveg += `<li><a href="kivalTars.html"
            onclick="sessionStorage.setItem('melyik',${i})"
            > ${listTars[i]}</a></li>`
    }
    szoveg +=`</ul>`;

    document.getElementById("tarsasag").innerHTML=szoveg;                          
}

function kivalaszt(){
    let param=sessionStorage.getItem('melyik');
    document.getElementById("cim").innerHTML = `${listTars[param]}`;
    document.getElementById("melyik").innerHTML = `${listTars[param]}`;
    document.getElementById("nagy").innerHTML = `${listTars[param]}`;
    document.getElementById("logo").innerHTML = 
                            `<img src="legitars_logo/${logok[param]}"/>`;
    document.getElementById("osszJar").innerHTML = `${osszesJarat[param]}`;
    document.getElementById("dbRep").innerHTML = `${latogatottRepterek[param]}`;
    document.getElementById("torJar").innerHTML = `${toroltArany[param]}`;
    document.getElementById("atlKeses").innerHTML = `${atlagosKeses[param]}`;
    document.getElementById("lgforg").innerHTML = `${legforgalmasabbRepter[param]}`;
}