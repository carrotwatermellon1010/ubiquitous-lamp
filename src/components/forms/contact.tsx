import React, { FC, useRef, useState } from "react";
// import { useRouter } from "next/router";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputField from "../../components/input";
import TextArea from "../../components/input/textarea";
import Button from "../../components/button";

const ContactForm: FC = () => {
  // const router = useRouter();

  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const formRef = useRef<string | HTMLFormElement>("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (email && name && message) {
      setLoading(true);

      setTimeout(() => {
        toast("Thanks for reaching out, I'll get back to you soon", {
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
        setMessage("");
        setEmail("");
        setName("");
        setLoading(false);
      }, 3000);
    } else {
      setLoading(false);
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
  };
  return (
    <ContactFormStyled id="contact">
      <div className="tag" />
      {/* @ts-ignore-next-line */}
      <form className="form" onSubmit={sendEmail} ref={formRef}>
        <div className="form-title">
          <h3>Contact Us</h3>
          <p>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            Reach out to us for any inquiries or assistance.
            <br />
            <span>Contact us today!</span>
          </p>
        </div>
        <InputField
          placeholder="Full Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          name="message"
        />
        <Button title="Submit" type="submit" isLoading={loading} />
        <ToastContainer pauseOnHover />
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;

const ContactFormStyled = styled.section`
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

  .form {
    width: 400px;
    margin: auto;
  }

  .form-title {
    text-align: center;
    margin-bottom: 2rem;

    p {
      font-size: ${({ theme }) => theme.fonts.sizes.small};
      width: 80%;
      margin: auto;
      margin-top: 10px;

      span {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
      }
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
