console.log("Hello world!")
function odd_even(number){
    if(number%2==0) return(number+" это чётное число")
    else return(number+" это нечётное число")
}
console.log(odd_even(4))
document.addEventListener('DOMContentLoaded',function(){
    var form = document.querySelector('#idForm');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        var actionUrl = form.getAttribute('action')
        var formData = new FormData(form);
        alert("Здравствуйте",formData.get('surname'),
        formData.get('name'))
    })
})