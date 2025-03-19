"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import s from "./page.module.scss";
import { Api } from "@/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslations } from "next-intl";
import TrText from "@/components/TrText/TrText";

const MainFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmitPOst = async (data) => {
    try {
      await axios.post(`${Api}api/v1/contact-form/`, data);
      toast.success("Сообщение успешно отправлено!");
    } catch (error) {
      console.error(error);
      toast.error("Произошла ошибка при отправке сообщения");
    }
  };

  const t = useTranslations("home");

  const onSubmit = (data) => {
    handleSubmitPOst(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
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
      <div className={s.inputFroms}>
        <p>{t("section_support_form_label_name")} </p>
        <input
          className={s.inputFrom}
          defaultValue={initialData?.name || ""}
          {...register("name", { required: true })}
          placeholder={t("section_support_form_placeholder_name")}
        />
        {errors.name && (
          <span className={s.error}>
            <TrText root={"home"} name={"section_5_form_erorr"} />
          </span>
        )}
      </div>
      <div className={s.inputFroms}>
        <p>{t("section_support_form_label_email")} </p>
        <input
          className={s.inputFrom}
          defaultValue={initialData?.email || ""}
          {...register("email", { required: true })}
          placeholder={t("section_support_form_placeholder_email")}
          type="email"
        />
        {errors.email && (
          <span className={s.error}>
            <TrText root={"home"} name={"section_5_form_erorr"} />
          </span>
        )}
      </div>
      <div className={s.inputFroms}>
        <p>{t("section_5_form_label_theme")}</p>
        <input
          className={s.inputFrom}
          defaultValue={initialData?.subject || ""}
          {...register("subject", { required: true })}
          placeholder={t("section_5_form_placeholder_theme")}
        />
        {errors.subject && (
          <span className={s.error}>
            <TrText root={"home"} name={"section_5_form_erorr"} />
          </span>
        )}
      </div>
      <div className={s.inputFroms}>
        <p>{t("section_support_form_label_message")}</p>
        <input
          className={s.inputFrom}
          defaultValue={initialData?.message || ""}
          {...register("message", { required: true })}
          placeholder={t("section_5_form_placeholder_message")}
        />
        {errors.message && (
          <span className={s.error}>
            <TrText root={"home"} name={"section_5_form_erorr"} />
          </span>
        )}
      </div>
      <button className={s.button}>{t("section_5_form_button")}</button>
    </form>
  );
};

export default MainFrom;
