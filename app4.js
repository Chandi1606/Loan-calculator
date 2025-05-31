let calculateLoan=()=>{
    let loanAmountBox=document.querySelector('#amount');
    let interestBox=document.querySelector('#interest');
    let emiBox=document.querySelector('#emi');

    loanAmountBox.value=rangeBox.value;
    interestBox.value=rangeBox.value*0.15;

    let a=Number(rangeBox.value);
    let b=Number(rangeBox.value);
    emiBox.value=Math.round((a+b)/24);
}

//rangeBox
let rangeBox=document.querySelector('#loan');
rangeBox.addEventListener('input' , function(){
    calculateLoan();
});
