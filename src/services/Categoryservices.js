import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Categorymodel from "../Model/Categorymodel";
import { db } from "../firebase/firebaseConfig";

class Categoryservices {
  async add(data) {
    let newCategory = new Categorymodel();
    newCategory.category = data.category;
    newCategory.description =  data.description;
    newCategory.institutionId = data.institutionId
    const docref = await addDoc(collection(db, "Category"), { ...newCategory });
    return docref;
  }

  async all() {
    // const docref = await getDocs(collection(db, 'Category'))
    const q = query(
      collection(db, "Category"),
      where("institutionId", "==", localStorage.getItem("institutionId")),
    );
    const snapshot = await getDocs(q);
    let Category = [];
    snapshot.forEach((doc) => {
      Category.push({ id: doc.id, ...doc.data() });
    });
    return Category;
  }

  async single(id) {
    const docref = doc(db, "Category", id);
    const docSnap = await getDoc(docref);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return false;
    }
  }

  async edit(payload, id) {
    const categoryRef = doc(db, "Category", id);
    return await updateDoc(categoryRef, payload);
  }

  async delete(id) {
    const docref = doc(db, "Category", id);
    return await deleteDoc(docref);
  }
}
export default new Categoryservices();
