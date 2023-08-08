import i18next from "i18next";
import React from "react";
import dogsImg from "../Assets/Images/dogs.png";
import "../css/All.css";
const Middle = ({ lang }) => {
  i18next.init({
    lng: lang,
    debug: true,
    resources: {
      en: {
        translation: {
          Title: "Pet Store & Beyond",
          login: "Login",
          signup: "Signup",
          button: "Get Started",
          para: "This website is an online store that sells pet supplies and accessories. It offers a comprehensive range of pet supplies. Starting from nutritious foods to delicious treats and going far up to healthcare, grooming and training products",
        },
      },
      fr: {
        translation: {
          Title: "Animalerie et au-delà",
          login: "connexion",
          signup: "s'inscrire",
          button: "Commencer",
          para: "Ce site Web est une boutique en ligne qui vend des fournitures et des accessoires pour animaux de compagnie. Elle propose une gamme complète de fournitures pour animaux de compagnie. Des aliments nutritifs aux délicieuses gâteries, en passant par les produits de soins de santé, de soins et d'entraînement",
        },
      },
      hi: {
        translation: {
          Title: "पालतू जानवरों की दुकान और उससे आगे",
          login: "लॉग इन ",
          signup: "साइन अप",
          button: "शुरू करें",
          para: "यह वेबसाइट एक ऑनलाइन स्टोर है जो पालतू जानवरों की आपूर्ति और सहायक उपकरण बेचती है। यह पालतू जानवरों की आपूर्ति की एक विस्तृत श्रृंखला प्रदान करता है। पौष्टिक खाद्य पदार्थों से लेकर स्वादिष्ट व्यंजनों तक और स्वास्थ्य देखभाल, सौंदर्य और प्रशिक्षण उत्पादों तक आगे बढ़ते हुए !",
        },
      },
    },
  });

  return (
    <div className="middle">
      <div className="left">
        <div>
          {lang === "hi" ? (
            <h1 style={{ width: "70%", fontSize: "70px" }}>
              {i18next.t("Title")}
            </h1>
          ) : (
            <h1>{i18next.t("Title")}</h1>
          )}
          <p>{i18next.t("para")}</p>
          <button>{i18next.t("button")}</button>
        </div>
      </div>
      <div className="right1">
        <img src={dogsImg} alt="dogs image" width={600} />
      </div>
    </div>
  );
};

export default Middle;
