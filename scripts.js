const inputed = document.getElementById("theLeads");
let listed = document.getElementById("listLeads");
let theLeads = [];

if (localStorage.getItem("theLeads") === null) {
    theLeads = [];
    let eachLead = "";
} else {
    let eachLead = "";
    theLeads = JSON.parse(localStorage.getItem("theLeads"));
    printLead(theLeads);
}

document.getElementById("saveLeads").onclick = saveLeades;
document.getElementById("deleteLeads").onclick = deleteLead;
document.getElementById("closePage").onclick = closedPage;
document.getElementById("saveTab").onclick = saveCurrentTab;



let x = "";


function closedPage() {
    window.close();
}

function printLead(some) {
    eachLead = "";
    for (let i = 0; i < some.length; i++) {
      
        eachLead += `<li> <a target='_blank' href='${some[i]}'>${some[i]}</a></li>`;
        console.log(eachLead);

    }
  
    listed.innerHTML = eachLead;
}



function saveLeades() {
    
    x = inputed.value;
    inputed.value = "";
    theLeads.push(x);
  
    printLead(theLeads);
    localStorage.setItem("theLeads", JSON.stringify(theLeads));
    

}

function deleteLead() {
    localStorage.clear();
    document.getElementById("listLeads").innerHTML = "";
    theLeads = [];
    printLead(theLeads);
}

function saveCurrentTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        theLeads.push(tabs[0].url);
        localStorage.setItem("theLeads", JSON.stringify(theLeads));
        printLead(theLeads);

    })

    
}

function generateSentence(desc, arr) {
    var x = arr.length;
    let froots = "";
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 2) {
            froots += arr[i] + ", ";
        } else {
            froots += arr[i];
        }
    }



    return `The ${x} ${desc} are ${froots}.`
}
