"use client";
import { Manrope } from "next/font/google";
import s from "../../app/[locale]/contact/page.module.scss";
import TrText from "../TrText/TrText";
import Image from "next/image";
import { useState } from "react";
import { Api } from "@/api";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const FontManrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "400"], // specify the desired weight here
});

export default function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${Api}api/v1/contact-form/`, {
        name,
        email,
        message,
        subject,
      });

      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
      setError(null);
      toast.success("Сообщение успешно отправлено!");
      return response.data;
    } catch (error) {
      toast.error("Произошла ошибка при отправке сообщения");
      setError({
        name: error.response.data.name,
        message: error.response.data.message,
        email: error.response.data.email,
        subject: error.response.data.subject,
      });
    }
  };

  return (
    <div className={s.contactForm}>
      <ToastContainer
        autoClose={3000}
        limit={1}
        hideProgressBar
        newestOnBottom={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        position="bottom-center"
        theme="dark"
      />
      <div className={s.containerForm}>
        <div className={s.formWrapper}>
          <div className={s.formTitle}>
            <Image
              src="/Contact.svg"
              alt="contact"
              width={403.859}
              height={470}
            />
            <div className={s.title}>
              <h4 className={FontManrope.className}>
                <TrText root={"contact"} name={"l1"} />
              </h4>
              <h5 className={FontManrope.className}>
                <span></span> <TrText root={"contact"} name={"l2"} />{" "}
              </h5>
            </div>
            <p className={FontManrope.className}>
              <TrText root={"contact"} name={"tt"} />
            </p>
          </div>
          <div className={s.form}>
            <div className={s.formInput}>
              <label className={FontManrope.className} htmlFor="">
                <TrText
                  root={"home"}
                  name={"section_support_form_label_name"}
                />
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={FontManrope.className}
                type="text"
                placeholder={TrText({
                  root: "home",
                  name: "section_support_form_placeholder_name",
                })}
              />
              {error && <p>{error.name}</p>}
            </div>
            <div className={s.formInput}>
              <label className={FontManrope.className} htmlFor="">
                <TrText
                  root={"home"}
                  name={"section_support_form_label_email"}
                />
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={FontManrope.className}
                type="text"
                placeholder={TrText({
                  root: "home",
                  name: "section_support_form_placeholder_email",
                })}
              />
              {error && <p>{error.email}</p>}
            </div>
            <div className={s.formInput}>
              <label className={FontManrope.className} htmlFor="">
                <TrText root={"home"} name={"section_5_form_label_theme"} />
              </label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className={FontManrope.className}
                type="text"
                placeholder={TrText({
                  root: "home",
                  name: "section_5_form_placeholder_theme",
                })}
              />
              {error && <p>{error.subject}</p>}
            </div>
            <div className={s.formInput}>
              <label className={FontManrope.className} htmlFor="">
                <TrText
                  root={"home"}
                  name={"section_support_form_label_message"}
                />
              </label>
              <input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className={FontManrope.className}
                type="text"
                placeholder={TrText({
                  root: "home",
                  name: "section_5_form_placeholder_message",
                })}
              />
              {error && <p>{error.message}</p>}
            </div>
            <button
              className={FontManrope.className}
              onClick={() => handleSubmit()}
              type="submit"
            >
              <TrText root={"home"} name={"section_5_form_button"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
