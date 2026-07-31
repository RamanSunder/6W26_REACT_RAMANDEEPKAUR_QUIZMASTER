import { addDoc, collection, getDocs } from "firebase/firestore";
import Resultmodel from "../Model/Resultmodel"
import { db } from "../firebase/firebaseConfig";
class Resultservices{
    //  async add(data) {
    //     let newResult = new Resultmodel();
    //     newResult.userId = data.userId;
    //     newResult.categoryId =  data.categoryId;
    //     newResult.category =  data.category;
    //     newResult.score = data.score
    //     newResult.totalQuestion = data.totalQuestion
    //     newResult.correctAnswer = data.correctAnswer
    //     newResult.wrongAnswer = data.wrongAnswer
    //     newResult.percentage = data.percentage
    //     const docref = await addDoc(collection(db, "Result"), { ...newResult });
    //     return docref;
    //   }

    async add(data) {
  console.log("Inside Resultservices.add()", data);

  let newResult = new Resultmodel();

  newResult.userId = data.userId;
  newResult.categoryId = data.categoryId;
  newResult.category = data.category;
  newResult.score = data.score;
  newResult.totalQuestion = data.totalQuestion;
  newResult.correctAnswer = data.correctAnswer;
  newResult.wrongAnswer = data.wrongAnswer;
  newResult.percentage = data.percentage;

  console.log("Saving to Firestore:", newResult);

  const docRef = await addDoc(collection(db, "Result"), { ...newResult });

  console.log("Document ID:", docRef.id);

  return docRef;
}
      async all() {
  const snapshot = await getDocs(collection(db, "Result"));

  let result = [];

  snapshot.forEach((doc) => {
    result.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return result;
}
      
}
export default new Resultservices()