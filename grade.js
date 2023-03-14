let rubic = 0;

const grade = (rubic) => {
return (
    (rubic = 11) 
    ? console.log("Perfect") 
    : (rubic > 8) 
    ? console.log("Excellent") 
    : (rubic >= 5)
    ? console.log("ture")
    : console.log("false")    
    ) 
}
grade(10);
