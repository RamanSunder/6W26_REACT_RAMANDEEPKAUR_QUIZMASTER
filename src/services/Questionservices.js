import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import Questionmodel from "../Model/Questionmodel"
import { db } from "../firebase/firebaseConfig"
class Questionservices{
    async add(ques){
        let newQuestion = new Questionmodel() 
        newQuestion.categoryId = ques.categoryId
        newQuestion.question = ques.question
        newQuestion.option1 = ques.option1
        newQuestion.option2 = ques.option2
        newQuestion.option3 = ques.option3
        newQuestion.option4 = ques.option4
        newQuestion.answer = ques.answer
        console.log(newQuestion)
        await addDoc(collection(db,"Question"), {...newQuestion})

    }

    async all(){
            const docref = await getDocs(collection(db, 'Question'))
            let Question =[]
            docref.forEach((doc)=>{Question.push({id:doc.id, ...doc.data()})})
            return Question;
        }

        async single(id) {
            const docref = doc(db, "Question", id);
            const docSnap = await getDoc(docref);
            if (docSnap.exists()) {
              return { id: docSnap.id, ...docSnap.data() };
            } else {
              return false;
            }
          }
        
          async edit(payload, id) {
            const categoryRef = doc(db, "Question", id);
            return await updateDoc(categoryRef, payload);
          }

          async delete(id) {
              const docref = doc(db, "Question", id);
              return await deleteDoc(docref);
            }


}
export default new Questionservices()