import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"

const googleButton = document.getElementById("google-login");

googleButton.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();


    //  forzar la seleccion de cuenta
    provider.setCustomParameters ({
        prompt: 'select_account',
    });

    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials);
    
        //ocultar el modal
        const signinModal = document.getElementById('signin-modal');
        const modal = bootstrap.Modal.getInstance(signinModal);
        // Limpiamos los campos del form
        signinForm.reset();
        modal.hide();
    }

    catch (error) {
        console.log(error);
    }
});