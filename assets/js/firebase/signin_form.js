import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./show_message.js";

// traemos el form necesario
const signinForm = document.getElementById("signin-form");
// para prevenir que la pagina se recargue
signinForm.addEventListener('submit', async (e) => {

    e.preventDefault();


   // accedemos a los elementos con notacion de corchete
   const email = signinForm['email-signin'].value;
   const password = signinForm['password-signin'].value;

   console.log(email, password);

     // obtener las credenciales de forma asincronoma
    try {
    const credentials =  await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    }

    catch (error) {
        console.log(error);
        
    }
});