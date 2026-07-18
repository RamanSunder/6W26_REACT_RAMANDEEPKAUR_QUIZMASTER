import { doc, setDoc, getDoc } from "firebase/firestore";
import Registermodel from "../Model/Registermodel";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig.js";
import Authservices from "./Authservices.js";
// const dbPath = 'Register'

class Registerservices {
  async Register(data) {
    // console.log("Services Started")

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    const uid = userCredential.user.uid;

    let newRegister = new Registermodel();
    newRegister.name = data.name;
    newRegister.email = data.email;
    newRegister.uid = uid;
    newRegister.password = data.password;
    newRegister.contact = data.contact;
    newRegister.userType = data.userType;
    newRegister.institutionId = data.institutionId;

    const setDocData = await setDoc(doc(db, "Register", uid), {
      ...newRegister,
    });
    await signOut(auth);
    return setDocData;
  }

  async Login(data) {
    // console.log(data.email);
    // console.log(data.password);
    const userData = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const user = userData.user;
    // console.log("Firebase UID:", user.uid);

    //     const ref = doc(db, "Register", user.uid);
    // console.log("Document Path:", ref.path);
    // const userFirestoreData = await getDoc(ref);
    const userFirestoreData = await getDoc(doc(db, "Register", user.uid));

    // console.log("Exists:", userFirestoreData.exists());
    const userdata = userFirestoreData.data();
    if (userFirestoreData.exists()) {
      // console.log("Data:", userFirestoreData.data());
      let authData = {
        id: user.uid,
        email: userdata.email,
        name: userdata.name,
        userType: userdata.userType,
        token: user.accessToken,
        contact: userdata.contact,
        institutionId: userdata.institutionId,
      };

      // console.log("Authdata", authData);
      await Authservices.setData(authData);
      // console.log("Saved to localStorage");
      // console.log(localStorage.getItem("institutionId"));
      return authData;
    } else {
      throw new Error("User data not found in Firestore");
      // console.log("Document not found");
    }

    return userData;
  }





  
}
export default new Registerservices();
