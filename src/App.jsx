import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./firebase/firebaseConfig";
import { ToastContainer } from "react-toastify";




import Dashboard from "./components/admin/Dashboard/Dashboard";
import Manageuser from "./components/admin/manageruser/Manageuser";
import Adduser from "./components/admin/manageruser/Adduser";
import Edituser from "./components/admin/manageruser/Edituser";
import Category from "./components/admin/Category/Category";
import Register from './components/Authentication/Register';
import Addcategory from "./components/admin/Category/Addcategory";
import Adminlayout from "./components/admin/layout/Adminlayout";
import Editcategory from "./components/admin/Category/Editcategory";





import Layout from "./components/user/layout/Layout";
import Home from "./components/user/Home/Home";
import Performance from "./components/user/performance/Performance";
import Categoryuser from "./components/user/category/Categoryuser";
import Login from './components/Authentication/Login';
import Question from "./components/admin/Question/Question";
import Addquestion from "./components/admin/Question/Addquestion";
import Editquestion from "./components/admin/Question/Editquestion";
import Questionuser from "./components/user/questionuser/Questionuser";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Adminlayout />}>
            <Route path="/admin" element={<Dashboard />}></Route>
            <Route path="/admin/manageuser" element={<Manageuser />}></Route>
            <Route path="/admin/category" element={<Category />}></Route>
            <Route path="/admin/category/add" element={<Addcategory />}></Route>
            <Route path="/admin/category/edit/:id" element={<Editcategory />}></Route>
            <Route path="/admin/manageuser/add" element={<Adduser />}></Route>
            <Route path='/admin/question' element={<Question/>}></Route>
            <Route path='/admin/question/add' element={<Addquestion/>}></Route>
            <Route path='/admin/question/add/:id' element={<Addquestion/>}></Route>
            <Route path="/admin/question/edit/:id" element={<Editquestion />}></Route>

            <Route
              path="/admin/manageuser/edit/:id"
              element={<Edituser />}
            ></Route>
          </Route>

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Register/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/categoryuser" element={<Categoryuser />}></Route>
            <Route path="/questionuser/:categoryId" element={<Questionuser />}></Route>
            <Route path="/performance" element={<Performance />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
