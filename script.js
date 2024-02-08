var idx = 0
document.addEventListener('DOMContentLoaded', function() {
    GenNewInput();
    GenNewInput(); 
    GenNewInput(); 
    GenNewInput(); 
});




function GenNewInput(){

    var gradeText = document.createTextNode("Grade: ");
    var gradeInput = document.createElement("input");
    gradeInput.setAttribute("type", "number");
    gradeInput.value = 1
    gradeInput.min = 1
    gradeInput.max = 5
    gradeInput.id = idx +"grade"


    var creditText = document.createTextNode(" Credit: ");
    var creditInput = document.createElement("input");
    creditInput.value = 1
    creditInput.min = 1
    creditInput.setAttribute("type", "number");
    creditInput.id = idx +"credit"



    var addNewInput = document.createElement("button");
    addNewInput.innerHTML = "+";
    addNewInput.id = "addnew"
    addNewInput.onclick = GenNewInput;

    // Create container div to hold the new elements
    var containerDiv = document.createElement("div");
    containerDiv.appendChild(gradeText);
    containerDiv.appendChild(gradeInput);
    containerDiv.appendChild(creditText);
    containerDiv.appendChild(creditInput);
    containerDiv.appendChild(addNewInput);

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
    var kki = Calculate(inputs)
    console.log("kki:",kki)
    document.getElementById("kki").innerHTML=kki
}

function Calculate(jegyek_kreditek){
    summaTeljesitetKreditXerdemjegy = 0
    teljesitettKredit = 0
    vallaltKredit = 0


    jegyek_kreditek.forEach(element => {
        jegy = element[0]
        kredit = element[1]

        summaTeljesitetKreditXerdemjegy += jegy * kredit

        if (jegy > 1){
            teljesitettKredit += kredit
        }

        vallaltKredit += kredit


    });

    elsotag = summaTeljesitetKreditXerdemjegy / 30
    masodiktag = teljesitettKredit / vallaltKredit

    return (elsotag * masodiktag).toFixed(2);

}