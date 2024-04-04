import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mini-capstone-api-lvcl.onrender.com";

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  const handleFlashMessage = () => {
    if (localStorage.getItem("flashMessage")) {
      localStorage.removeItem("flashMessage");
    }
  };
  useEffect(handleFlashMessage, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <br></br>
        {flashMessage ? (
          <div onClick={() => setFlashMessage(null)} className="p-8 mt-10">
            {flashMessage}
          </div>
        ) : null}
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
