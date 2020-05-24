let tag=[
    "Ica",
    "Kati",
    "Tímea",
    "Gábor"
];
let hivNev=[
    "Szilágyi Zoltánné Bankó Ilona",
    "Drávucz Katalin",
    "Szoboszlainé Kovács Tímea",
    "Balogh Gábor"]
let munkah=[
    "VSzc Petőfi Sándor Gimnáziuma, Gépészeti Szakgimnáziuma és Kollégiuma, Aszód",
    "Budapesti Műszaki SzC Neumann János Számítástechnikai Szakgimnáziuma",
    "Bocskai István Református Oktatási Központ, Halásztelek",
    "Bajai SzC Kalocsai Dózsa György Szakgimnáziuma, Szakközépiskolája és Kollégiuma",
];
let foglalk=[
    "informatika szakos tanár",
    "informatika tanár",
    "matematika-informatika szakos tanár",
    "informatika tanár"
];

function kitolt(){
    let valasz = document.getElementById("tagok");
    valasz.innerHTML = ``;
    for (i=0;i<tag.length;i++)
    {
        valasz.innerHTML += 
        `<span><a href="keszito.html" onclick="sessionStorage.setItem('ki',${i})">${tag[i]}</a></span>|`;
                            
    }
    valasz.innerHTML += `<span>Mentor: Kamilla</span>`;
}

function adatok(){
    let param=sessionStorage.getItem('ki');
    document.getElementById("nev").innerHTML = `${hivNev[param]}`;
    document.getElementById("mh").innerHTML = `${munkah[param]}`;
    document.getElementById("fogl").innerHTML = `${foglalk[param]}`;
}