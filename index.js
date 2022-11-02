//load Event listener
document.querySelector('.myForm').addEventListener('submit', function(e){
    document.querySelector('#myForm').style.display='none';
    document.querySelector('#loading').style.display='block';
    e.preventDefault();
    setTimeout(calculateResults,3000);
});


function calculateResults(){
//UI variables
console.log('Calculating....')
const amount=document.querySelector('#amount');
const interest=document.querySelector('#interest');
const year=document.querySelector('#years');
const monthlyRepay=document.querySelector('#monthlyRepay');
const totalInterest=document.querySelector('#totalInterest');
const totalAmount=document.querySelector('#totalAmount');

//Calculation
const principal=parseFloat(amount.value);
const calculatedInterest=parseFloat(interest.value)/100/12;
const calculatedPayment=parseFloat(year.value)*12;

//compute monthly payment
const x=Math.pow(1+calculatedInterest, calculatedPayment);
const monthly=(principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
    monthlyRepay.value=monthly.toFixed(2);
    totalAmount.value=(monthly*calculatedPayment).toFixed(2);
    totalInterest.value=((monthly*calculatedPayment)-principal).toFixed(2);

    document.querySelector('#myForm').style.display='block';
    document.querySelector('#loading').style.display='none';
}else{
    showError('Please check your number!')
    
    }

    function showError(error){
        const errorDiv=document.createElement('div');
        const card=document.querySelector('.card');
        const heading=document.querySelector('.heading');
        errorDiv.className='alert';
        errorDiv.appendChild(document.createTextNode(error));

        
        document.querySelector('#loading').style.display='none';

        card.insertBefore(errorDiv,heading);
        setTimeout(clearError,3000);
     }
     function clearError(){
        document.querySelector('.alert').remove();
     }

}