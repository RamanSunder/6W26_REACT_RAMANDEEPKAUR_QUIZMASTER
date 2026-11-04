
import {
    doc,
    setDoc,
    getDoc,
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";

import Registermodel from "../Model/Registermodel";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import { auth, db } from "../firebase/firebaseConfig.js";
import Authservices from "./Authservices.js";

class Registerservices {

    // REGISTER USER
    async Register(data) {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );

        const uid = userCredential.user.uid;

        let newRegister = new Registermodel();

        newRegister.name = data.name;
        newRegister.email = data.email;
        newRegister.uid = uid;

        // Do not store plain-text password in Firestore
        newRegister.contact = data.contact;
        newRegister.userType = data.userType;
        newRegister.institutionId = data.institutionId;

        const setDocData = await setDoc(
            doc(db, "Register", uid),
            {
                ...newRegister
            }
        );

        await signOut(auth);

        return setDocData;
    }


    // LOGIN USER
    async Login(data) {

        const userData = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );

        const user = userData.user;

        const userFirestoreData = await getDoc(
            doc(db, "Register", user.uid)
        );

        if (userFirestoreData.exists()) {

            const userdata = userFirestoreData.data();

            let authData = {
                id: user.uid,
                email: userdata.email,
                name: userdata.name,
                userType: userdata.userType,
                token: user.accessToken,
                contact: userdata.contact,
                institutionId: userdata.institutionId
            };

            await Authservices.setData(authData);

            return authData;

        } else {

            await signOut(auth);

            throw new Error("User data not found in Firestore");
        }
    }


    // FETCH ALL USERS OF CURRENT INSTITUTION
    async all() {

        const institutionId = localStorage.getItem("institutionId");

        if (!institutionId) {
            throw new Error("Institution ID not found");
        }

        const q = query(
            collection(db, "Register"),
            where("institutionId", "==", institutionId)
        );

        const snapshot = await getDocs(q);

        const users = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));

        return users;
    }

}

export default new Registerservices();
