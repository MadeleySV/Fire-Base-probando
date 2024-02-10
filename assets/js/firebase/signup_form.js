import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./show_message.js";

// obtenemos el form con ese id
const signupForm = document.getElementById('signup-form'); 

// agregamos el evento al mandar el form 
signupForm.addEventListener('submit' , async (e) => {

    // para prevenir que la pagina se recargue
    e.preventDefault();

    // accedemos a los elementos con notacion de corchete
    const email = signupForm['email-signup'].value;
    const password = signupForm['password-signup'].value;

    console.log(email, password);

    // obtener las credenciales de forma asincronoma
    try {
    const credentials =  await createUserWithEmailAndPassword(auth, email, password);
    console.log(credentials);

    const signupModal = document.getElementById('signup-modal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide()
}
// manejo de errores
    catch (error) {
        console.log(error);

        if (error.code === 'auth/email-already-in-use') {

           showMessage('Email already/ in use', 'red');
        }
        
        else if (error.code === 'auth/invalid-email'){
            showMessage('Invalid email', 'red');
        }

        else if (error.code === 'auth/weak-password'){
            showMessage('Weak password', 'red');
        }

        else {
             showMessage('something went wrong', 'red')
        }
    }
});
