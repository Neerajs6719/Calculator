let digit=document.querySelectorAll('.digit');
let result=document.querySelector('.result');
let Allclear=document.querySelector('.allClear')
let DEL=document.querySelector('.del');
let operator=document.querySelectorAll(".operator")
let dot=document.querySelector('#dot');
let equal=document.querySelector("#equal");
let string="";
let operators=Array.from(operator);
let digitbtn=Array.from(digit);
console.log(operators);
digitbtn.forEach((btn)=> {
    btn.addEventListener('click',()=>{
        showDisplay(btn.innerText);

    })

})

let showDisplay=(numbers)=>{
    
    if(numbers==="." && string.includes("."))
    {
        return;
    }
    else if(numbers=="AC")
    {
        string=" ";
        result.innerText=string;
    }
    else if(numbers==="DEL")
    {
        string=string.substring(0,string.length-1);
        result.innerText=string;
    }
    else if(numbers==='=')
    {   
        try{
            if(result.innerText=="" )
    {
        return;
    }else{
        string=eval(string);
        result.innerText=string;
        }
    }
    catch(e)
    {
        console.log(error);
    }
    }
    else if(numbers==="+" ||numbers==="-"||numbers==="*"||numbers==="/")
    {

        if(result.innerText==='' )
        {
            return;
        }
        
        else{
            string+=numbers;
            result.innerText=string;
        }
    }

    else{
        string+=numbers;
        result.innerText=string;
    }

}
dot.addEventListener("click",()=>{
    showDisplay(dot.innerText);
})
operators.forEach((totaloperators)=>{
    totaloperators.addEventListener("click",()=>{
        showDisplay(totaloperators.innerText)
    })
})
Allclear.addEventListener("click",()=>{
    showDisplay(Allclear.innerText)
})
DEL.addEventListener("click",()=>{
    showDisplay(DEL.innerText)
})
equal.addEventListener("click",()=>{
    showDisplay(equal.innerText);
})
