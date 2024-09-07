var idx = 0
document.addEventListener('DOMContentLoaded', function() {
    GenNewInput();
    GenNewInput(); 
    GenNewInput(); 
    GenNewInput(); 
    GenNewInput(); 
    GenNewInput(); 
});


function removeInput() {
    document.getElementById(idx-1+"div").remove()
    idx--
}

function GenNewInput(){

    var subjectInput = document.createElement("input");
    subjectInput.className = "subjectInput"
    subjectInput.placeholder = "Tárgy neve"




    
    var creditInput = document.createElement("input");
    creditInput.setAttribute("type", "number");
    creditInput.value = 1
    creditInput.min = 0
    creditInput.id = idx +"credit"
    creditInput.className = "numberInput"

    var gradeInput = document.createElement("input");
    gradeInput.setAttribute("type", "number");
    gradeInput.value = 1
    gradeInput.min = 1
    gradeInput.max = 5
    gradeInput.id = idx +"grade"
    gradeInput.className = "numberInput"






    // Create container div to hold the new elements
    var containerDiv = document.createElement("div");
    containerDiv.className = "classContainer";
    containerDiv.id =idx+"div"
    containerDiv.appendChild(subjectInput)
    containerDiv.appendChild(creditInput);
    containerDiv.appendChild(gradeInput);

    document.getElementById("main").appendChild(containerDiv)
    idx += 1
}


function GetDatas(){
    inputs = []
    for (let i = 0; i < idx; i++) {
        jegy = document.getElementById(i+"grade").value
        credit = document.getElementById(i+"credit").value
        if (jegy > 0 && credit > 0) {
            inputs.push([jegy, credit])
        }        
    }

    var sa = CalculateSA(inputs)
    console.log("sa:",sa)
    document.getElementById("avg").innerHTML=sa

    var kki = CalculateKKI(inputs)
    console.log("kki:",kki)
    document.getElementById("kki").innerHTML=kki

    var ki = CalculateKI(inputs)
    console.log("ki:",ki)
    document.getElementById("ki").innerHTML=ki

    var ac = CalculateAllCredit(inputs)
    console.log("ac:",ac)
    document.getElementById("ac").innerHTML=ac

    var cc = CalculateCompletedCredit(inputs)
    console.log("cc:",cc)
    document.getElementById("cc").innerHTML=cc
}

function CalculateKKI(jegyek_kreditek){
    var summaTeljesitetKreditXerdemjegy = 0
    var teljesitettKredit = 0
    var vallaltKredit = 0


    jegyek_kreditek.forEach(element => {
        jegy = parseInt(element[0])
        kredit = parseInt(element[1])

        
        if (jegy > 1){
            summaTeljesitetKreditXerdemjegy += jegy * kredit
            teljesitettKredit += kredit
        }

        vallaltKredit += kredit


    });

    elsotag = summaTeljesitetKreditXerdemjegy / 30
    elsotag = (summaTeljesitetKreditXerdemjegy / 30)
    masodiktag = (teljesitettKredit / vallaltKredit)
    console.log(teljesitettKredit,vallaltKredit)
    console.log(elsotag,masodiktag)
    return (elsotag * masodiktag).toFixed(2);

}
function CalculateSA(jegyek_kreditek) {
    var summaTeljesitetKreditXerdemjegy = 0
    var teljesitettKredit = 0
    jegyek_kreditek.forEach(element => {
        jegy = parseInt(element[0])
        kredit = parseInt(element[1])
        if (jegy > 1){
            summaTeljesitetKreditXerdemjegy += jegy * kredit
            teljesitettKredit += kredit
        }

    });
    return (summaTeljesitetKreditXerdemjegy / teljesitettKredit).toFixed(2)
}

function CalculateAllCredit(jegyek_kreditek) {
    var allCredit = 0
    jegyek_kreditek.forEach(element => {
        kredit = parseInt(element[1])
        allCredit += kredit

    });
    return allCredit
}

function CalculateCompletedCredit(jegyek_kreditek) {
    var teljesitettKredit = 0
    jegyek_kreditek.forEach(element => {
        jegy = parseInt(element[0])
        kredit = parseInt(element[1])
        if (jegy > 1){
            teljesitettKredit += kredit
        }

    });
    return teljesitettKredit
}

function CalculateKI(jegyek_kreditek) {
    var summaTeljesitetKreditXerdemjegy = 0
    jegyek_kreditek.forEach(element => {
        jegy = parseInt(element[0])
        kredit = parseInt(element[1])
        if (jegy > 1){
            summaTeljesitetKreditXerdemjegy += jegy * kredit
        }
    });

    elsotag = summaTeljesitetKreditXerdemjegy / 30
    return (elsotag).toFixed(2);
}

//-----------------------------ICS-------------------------------
function submitICSData() {
    let inputValue = document.getElementById("icsInput").value;
    fetchICSCalendar(inputValue);
}


function fetchICSCalendar(url) {
    fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the .ics file:', error);
        });
}










