//sign up 
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    //get user info
    const username = signupForm['username'].value;
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const repassword = signupForm['repassword'].value;

    //sign up the user

    auth.createUserWithEmailAndPassword(email,password).then(cred =>{
        console.log(cred.user);
        const signupForm = document.querySelector('#sign-up');
        

        signupForm.request();
    })
}) 