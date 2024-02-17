import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth  } from "./firebase/firebase.js";
import { loginCheck } from "./firebase/login_check.js";

import './firebase/signup_form.js';
import './firebase/signin_form.js';
import './firebase/logout.js';
import './firebase/google_login.js';
import setupTasks from "./firebase/setup_tasks.js";



onAuthStateChanged(auth, async (user) =>
 {
    // si ha ingresado
    if (user) {
        loginCheck(user);
        console.log(user);
        import("./firebase/setup_tasks.js").then(({default: setupTasks}) => setupTasks(user));
    }
    // si he salido
    else {
      loginCheck(user);
    }
})
