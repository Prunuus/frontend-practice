const radioBtn1 = document.querySelector('#radio1')
const radioBtn2 = document.querySelector('#radio2')
const elements = document.querySelectorAll('.radioBackground')


radioBtn1.addEventListener('click', () => {
    radioBtn1.style.accentColor = "hsl(169, 82%, 27%)"
    elements[0].style.backgroundColor = 'hsl(148, 38%, 91%)'
    elements[0].style.border = '1px solid hsl(169, 82%, 27%)'
    elements[1].style.backgroundColor = 'white'
    elements[1].style.border = '1px solid hsl(186, 15%, 59%)'

})

radioBtn2.addEventListener('click', () => {
    radioBtn2.style.accentColor = "hsl(169, 82%, 27%)"
    elements[1].style.backgroundColor = 'hsl(148, 38%, 91%)'
    elements[1].style.border = '1px solid hsl(169, 82%, 27%)'
    elements[0].style.backgroundColor = 'white'
    elements[0].style.border = '1px solid hsl(186, 15%, 59%)'

})

const button = document.querySelector('button')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const consent = document.querySelector('#consent-box')
const message = document.querySelector('#message-box')

button.addEventListener('click', ()=>{
    if (firstName.checkValidity() == false){
        firstName.style.border= '1px solid hsl(0, 66%, 54%)'
        document.getElementById('error-msg-fn').innerHTML = "This Field is required"
        document.getElementById('error-msg-fn').classList.add("error-msg-n")
    } else{
        firstName.style.border= '1px solid hsl(186, 15%, 59%)'
        document.getElementById('error-msg-fn').innerHTML = ""
        document.getElementById('error-msg-fn').classList.remove("error-msg-n")

    }
    
    if (lastName.checkValidity() == false){
        lastName.style.border= '1px solid hsl(0, 66%, 54%)'
        document.getElementById('error-msg-ln').innerHTML = "This Field is required"
        document.getElementById('error-msg-ln').classList.add("error-msg-n")
    } else{
        lastName.style.border= '1px solid hsl(186, 15%, 59%)'
        document.getElementById('error-msg-ln').innerHTML = ""
        document.getElementById('error-msg-ln').classList.remove("error-msg-n")

    }

    if (email.checkValidity() == false){
        email.style.border= '1px solid hsl(0, 66%, 54%)'
        document.getElementById('error-msg-e').innerHTML = "Please enter a valid email address"
        document.getElementById('error-msg-e').classList.add("error-msg-e")
    } else {
        email.style.border= '1px solid hsl(186, 15%, 59%)'
        document.getElementById('error-msg-e').innerHTML = ""
        document.getElementById('error-msg-e').classList.remove("error-msg-e")

    }

    if (consent.checkValidity() == false){
        consent.style.border= '1px solid hsl(0, 66%, 54%)'
        document.getElementById('error-msg-c').innerHTML = "To submit this form, please consent to being contacted"
        document.getElementById('error-msg-c').classList.add("error-msg-c")
    } else {
        consent.style.border= '1px solid hsl(186, 15%, 59%)'
        document.getElementById('error-msg-c').innerHTML = ""
        document.getElementById('error-msg-c').classList.remove("error-msg-c")

    }

    if (radioBtn1.checkValidity() == false || radioBtn2.checkValidity() == false) {

        document.getElementById('error-msg-q').innerHTML = "Please select a query type"
        if (window.innerWidth <= 600 ) {
            document.getElementById('error-msg-q').classList.add("error-msg-q2")
        } else {
            document.getElementById('error-msg-q').classList.add("error-msg-q1")
        }
    } else {
        document.getElementById('error-msg-q').innerHTML = ""
        document.getElementById('error-msg-q').classList.remove("error-msg-q1")
        document.getElementById('error-msg-q').classList.remove("error-msg-q2")
    }

    if (message.checkValidity() == false) {
        message.style.border= '1px solid hsl(0, 66%, 54%)'
        document.getElementById('error-msg-m').innerHTML = "This field is required"
        if (window.innerWidth <= 600 ) {
            document.getElementById('error-msg-m').classList.add("error-msg-m2")
        } else {
            document.getElementById('error-msg-m').classList.add("error-msg-m1")
        }
    } else {
        message.style.border= '1px solid hsl(186, 15%, 59%)'
        document.getElementById('error-msg-m').innerHTML = ""
        document.getElementById('error-msg-m').classList.remove("error-msg-m1")
        document.getElementById('error-msg-m').classList.remove("error-msg-m2")
    }
})