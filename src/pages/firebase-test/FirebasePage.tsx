import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import BasicLayout from "../../layout/BasicLayout";

export const FirebasePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(auth?.currentUser.email);

  const singIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BasicLayout> 
      <div>
        <input
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={singIn}>로그인 하기</button>
      </div>
    </BasicLayout>
  );
};

export default FirebasePage;
