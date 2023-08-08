import React, { useState } from "react";
import Top from "../component/Top";
import Middle from "../component/Middle";
import Frame from "../component/Frame";
import Brands from "../component/Brands";
import Features from "../component/Features";

const Main = () => {
  const [lang, setLang] = useState("");
  return (
    <div style={{ width: "100%" }}>
      <Top setLang={setLang} />
      <Middle lang={lang} />
      <Frame />
      <Brands />
      <Features/>
    </div>
  );
};

export default Main;
