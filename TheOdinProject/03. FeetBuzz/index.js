function getNumber(){
    datas = document.getElementById("number")
    
    return parseInt(datas.value)+1 
}

function setAnswer(){

    test = document.getElementById("answer-content")
    test.textContent = ""
    list_item = []
    for (let i = 1; i < getNumber(); i++ ){
        if (i % 5 === 0 && i%3 === 0) {
            list_item.push("<li>FizzBuzz")
        } else if (i % 3 === 0){
            list_item.push("<li>Fizz")
        } else if (i % 5 === 0){
            list_item.push("<li>Buzz")  
        } 
          else{
            list_item.push("<li>"+i)
        }; 
    }

    for (let i = 0; i <list_item.length; i++){
        test.innerHTML += list_item[i]
    };
}

