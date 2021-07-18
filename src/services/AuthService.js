import { auth } from "../components/firebase";

class AuthService {

    signup(email, password) {
        console.log('ca1me here')
        return auth.createUserWithEmailAndPassword(email, password)
    }

    login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

}

export default new AuthService();