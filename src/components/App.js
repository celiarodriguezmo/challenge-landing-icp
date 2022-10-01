import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [hidden, setHidden] = useState("hidden");

  const handleClickButton = (data) => {
    let idButton = data.idButton;

    if (idButton === "editButton") {
      setHidden("section-detail");
    } else {
      setHidden("hidden");
    }
  };

  return (
    <div className='App'>
      <Header />
      <Main handleClickButton={handleClickButton} hidden={hidden} />
    </div>
  );
}
export default App;
