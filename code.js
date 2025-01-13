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
        function greeting_1(){
            var formData = new FormData(form);
            alert("Здравствуйте",formData.get('surname'),
            formData.get('name'))
            console.log("surname=",formData.get('surname'))
            console.log("name=",formData.get('name'))
        } //функция не работает
        function greeting_2(){
            const surname = document.getElementById('surname').value;
            const name = document.getElementById('name').value;
            alert("Здравствуйте"+surname+" "+name)
            console.log("surname=",surname)
            console.log("name=",name)
        } //функция работает
        greeting_1(); setTimeout(greeting_2,2000)
        
    })
})