// export default App;
import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
      setMessage("Email field is empty");
    } else if (regEx.test(email)) {
      setMessage("Email is valid");
    } else {
      setMessage("Email is not valid");
    }
  };
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordValidation = () => {
    const passwordRegEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
      setPasswordMessage("Password field is empty");
    } else if (passwordRegEx.test(password)) {
      setPasswordMessage("Password is valid");
    } else {
      setPasswordMessage(
        "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character."
      );
    }
  };
  const pwOnChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="grid lg:grid-cols-3 mt-20 ml-20 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <div>
          <Label someLabel={"Email"} />
          <Input
            type="email"
            placeholder={"Enter email"}
            onChange={handleOnChange}
          />
          <p className="text-xs text-red-600">{message}</p>
          <button
            onClick={passwordValidation}
            className="mt-2 border border-blue-600 px-2 py-1 rounded-md"
          >
            Check
          </button>
        </div>

        <div>
          <Label someLabel={"Your Age"} />
          <Input type="number" placeholder={"Enter age"} />
        </div>

        <div>
          <Label someLabel={"Password"} />
          <Input
            type="password"
            placeholder={"Enter password"}
            onChange={pwOnChange}
          />
          <p className="text-xs text-red-600">{passwordMessage}</p>
          <button
            onClick={passwordValidation}
            className="mt-2 border border-blue-600 px-2 py-1 rounded-md"
          >
            Check
          </button>
        </div>

        <div>
          <Label someLabel={"Choose File"} />
          <Input type="file" />
        </div>

        <div>
          <Label someLabel={"Select Date"} />
          <Input type="date" />
        </div>

        <div>
          <Label someLabel={"Select Time"} />
          <Input type="time" />
        </div>

        <div>
          <Label someLabel={"Select Date and Time"} />
          <Input type="datetime-local" />
        </div>

        <div>
          <Label someLabel={"Search Here"} />
          <Input type="search" placeholder={"Search anything"} />
        </div>

        <div>
          <Label someLabel={"Enter URL"} />
          <Input type="url" placeholder={"Enter URL"} />
        </div>
      </div>

      <div className="flex ml-20 mt-4 items-center">
        <input type="checkbox" className="block" id="checkbox-id" />
        <label htmlFor="" className="text-md text-gray-700 ml-3">
          I agree to terms
        </label>
      </div>

      <div className="flex items-center justify-center mt-12">
        <input
          type="submit"
          value="Submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-lg cursor-pointer transition-all duration-200 hover:bg-indigo-500 hover:shadow-xl"
        />
      </div>
    </div>
  );
}

export default App;
