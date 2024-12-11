const studentArr=[{Name:"Sumit",City:"Agra",CGPA:"9.0"},{Name:"Ritika",City:"Delhi",CGPA:"8.4"},
                  {Name:"Prateek",City:"Mumbai",CGPA:"5.0"},{Name:"Rahul",City:"Ghaziabad",CGPA:"8.5"}];
console.log(studentArr);
console.log("-------------------------------");
console.table(studentArr);
console.log("-------------------------------");

for (let i = 0; i < studentArr.length; i++) {
    if (studentArr[i].CGPA >= 8.4) {
        console.log(studentArr[i]);
    }
}
console.log("-------------------------------");

for (let i = 0; i < studentArr.length; i++) {
    if (studentArr[i].City === "Delhi") {
        console.log(studentArr[i]);
        
    }
}
console.log("-------------------------------");
for (let i = 0; i < studentArr.length; i++) {
    if (studentArr[i].CGPA >= 8.5 || studentArr[i].City === "Mumbai") {
        console.log(studentArr[i]);
    }
}
console.log("-------------------------------");
for (let i = 0; i < studentArr.length; i++) {
    if (studentArr[i].CGPA >= 8.5 || studentArr[i].City === "Agra") {
        console.log(studentArr[i]);
    }
}
console.log("-------------------------------");

// include in lab file.