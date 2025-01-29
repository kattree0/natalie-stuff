//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {

    return `<li>${step}</li>`;

  //the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");

const grade = ['A','B','A'];


//I was sitting here wondering if switch would have been better lol
//switch(grade){case'A':return 4.0; case 'B' return 3.0.....}
function conversionGPA(letter){
    letter = letter.toUpperCase();
    let gpa =0;
    if (letter === 'A'){
        gpa = 4;
    }
    else if (letter === 'B'){
        gpa = 3;
    }
    else if (letter === 'C'){
        gpa = 2;
    }
    else if (letter === 'D'){
        gpa = 1;
    }
    else if (letter === 'F'){
        gpa = 0;
    }

    return gpa;
        
}


const gpapoints = grade.map(conversionGPA);
console.log(gpapoints);


function sum(total,current){
    return total+current;
}
const gpaTotal = gpapoints.reduce(sum,0);
console.log(gpaTotal);


