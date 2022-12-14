//New Code

const value={
    current:"",
    previous:"",
    operator:null
}

const display = {
    currentValue : document.querySelector("#firstNum"),
    previousValue: document.querySelector("#secondNum")
}
const buttonsNum = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const equalBtn = document.querySelector("#equal")
const deletBtn = document.querySelector(".delete")
const changingValue = document.querySelector(".posOrNeg")
const resetBtn = document.querySelector(".reset")

for (let i =0; i<buttonsNum.length; i++){
    buttonsNum[i].addEventListener("click",()=>{
        setNum(buttonsNum[i].value);
    }) 
}

for (let i=0; i<operators.length; i++){
    operators[i].addEventListener("click", ()=>{displayOp(operators[i].value)})
}

equalBtn.addEventListener("click", ()=>{
    equal(value.operator,value.current,value.previous)
})

deletBtn.addEventListener("click", ()=>{
    delet();
    displayScreen();
})

changingValue.addEventListener("click",()=>{
    value.current = inversNumber(parseFloat(value.current)).toString();
    displayScreen()
})

resetBtn.addEventListener("click", ()=>{
    value.current = "0"
    displayScreen()
})

function debugg(){
    console.log(
        `La valeur actuelle est:${value.current}, la valeur précédente est: ${value.previous} et l'opération est: ${value.operator}`
        )
}

function writeCurrentNum(num){
    if (num === "."&& (value.current.indexOf(".") === -1)){
        value.current += num;
    } else if (num !="."){
        if(value.current.indexOf("0")===0){
            value.current =""
            value.current += num;
    }   else{
            value.current += num 
    }
}
}

function displayOp(op){
    setOperator(op)
    displayScreen()
   
}

function displayScreen(){
    display.currentValue.textContent = `${value.current}`
    display.previousValue.textContent = `${value.previous} ${(value.operator)?value.operator:""}`
}
function setNum(num){
    writeCurrentNum(num)
    displayScreen()
}

function setOperator(op){
    if(!value.previous){
        value.previous=value.current
        value.current = ""
        value.operator = op
    } else if (value.previous&&value.current&&value.operator !=""){
        equal(op,value.current,value.previous)
        
        value.operator = op
    } else{
        value.operator = op
    }
  
    displayScreen()
}

function reset()
{
    value.current = "0"
    value.operator = ""
}

function equal(op,current,previous)
{
    switch (op){
        case "+":
            value.previous = add(current,previous)
            reset()
            displayScreen()
            break

        case "*":
            value.previous = multiplication(current,previous)
            reset()
            displayScreen()
            break
        
        case "-":
            value.previous = soustraction(previous,current)
            reset()
            displayScreen()
            
            break
        case "/":
            if((current==="0")) {
                value.previous= "No division 0"
                reset()
                displayScreen()
                break
            }
            value.previous = division(previous,current)
            reset()
            displayScreen()
            break

        default:
            console.log(`Opreation avec:${value.operator} n'a pas marché`)
    }
}

function delet(){
    value.previous = ""
    value.current = "0"
    value.operator = ""
}


function add(a,b){
    return parseFloat(a)+parseFloat(b)
}

function soustraction(a,b){
    console.log(a,b)
    return parseFloat(a)-parseFloat(b)
}

function multiplication(a,b){
    return parseFloat(a)*parseFloat(b)
}

function division(a,b){
    return parseFloat(a)/parseFloat(b)
}

function inversNumber(num){
    return (value.current==="")?"":-num
}

