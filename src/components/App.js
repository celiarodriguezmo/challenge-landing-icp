import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [hidden, setHidden] = useState("hidden");

  const handleClickEdit = (data) => {
    let idButton = data.idButton;

    if (idButton === "editButton") {
      setHidden("section-detail");
    } else {
      setHidden("hidden");
    }
  };
  const handleClickReset = (data) => {
    let idButton = data.idButton;

    if (idButton === "resetButton") {
      setHidden("hidden");
    } else {
      setHidden("section-detail");
    }
  };

  return (
    <div className='App'>
      <Header />
      <Main
        handleClickEdit={handleClickEdit}
        hidden={hidden}
        handleClickReset={handleClickReset}
      />
    </div>
  );
}
export default App;
