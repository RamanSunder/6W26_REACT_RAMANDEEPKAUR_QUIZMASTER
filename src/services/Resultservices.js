import { addDoc, collection } from "firebase/firestore";
import Resultmodel from "../Model/Resultmodel"
import { db } from "../firebase/firebaseConfig";
class Resultservices{
     async add(data) {
        let newResult = new Resultmodel();
        newResult.userId = data.userId;
        newResult.categoryId =  data.categoryId;
        newResult.score = data.score
        newResult.totalQuestion = data.totalQuestion
        newResult.correctAnswer = data.correctAnswer
        newResult.wrongAnswer = data.wrongAnswer
        newResult.percentange = data.percentange
        const docref = await addDoc(collection(db, "Result"), { ...newResult });
        return docref;
      }


      
}
export default new Resultservices()