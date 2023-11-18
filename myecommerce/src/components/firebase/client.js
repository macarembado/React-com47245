import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAoCxhA-dhS6_cSJ4IR3uIsE9LoVYYWmqg",
    authDomain: "ecommerce-com47245.firebaseapp.com",
    projectId: "ecommerce-com47245",
    storageBucket: "ecommerce-com47245.appspot.com",
    messagingSenderId: "1016886547096",
    appId: "1:1016886547096:web:148e79a982b01ec28036ed"
}; 

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)