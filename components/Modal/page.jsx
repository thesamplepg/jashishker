import React, { useState } from "react";
import styles from "./page.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const PersonalDataForm = ({ setData }) => {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    region: "",
    idDocument: "",
    ip: "",
    activityType: "",
  });

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSubmit = {
      ...formData,
      photo,
    };

    try {
      const response = await fetch(
        "http://141.8.195.214:8081/api/v1/application-form/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSubmit),
        }
      );

      if (response.ok) {
        const result = await response.json();
      } else {
        console.error("Failed to submit:", response.statusText);
      }
    } catch (error) {}
  };

  return (
    <>
      <div className={styles.modal}></div>
      <div className={styles.formWrap}>
        <div className={styles.formContainer}>
          <div className={styles.titleFlex}>
            <IoIosArrowBack size={22} onClick={() => setData(false)} />
            <h1>Личные данные</h1>
          </div>
          <div className={styles.iconClose}>
            <CgClose
              className={styles.backArrow}
              size={24}
              onClick={() => setData(false)}
            />
          </div>
          <h2 className={styles.title}>Личные данные</h2>
          <div className={styles.photo}>
            <div className={styles.photoBorder}>
              {photo ? (
                <img className={styles.img} src={photo} alt="Uploaded" />
              ) : (
                <img src="/profile.svg" alt="Default" />
              )}
            </div>
            <h4>
              <label htmlFor="photoUpload" style={{ cursor: "pointer" }}>
                Добавить фото
              </label>
              <input
                id="photoUpload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
            </h4>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.blockGrid}>
                <h4>ФИО</h4>
                <input
                  type="text"
                  placeholder="Введите ФИО"
                  className={styles.input}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.blockGrid}>
                <h4>DD/MM/YY</h4>
                <input
                  type="date"
                  className={styles.input}
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.blockGrid}>
                <h4>Номер телефона</h4>
                <input
                  type="tel"
                  placeholder="Введите номер телефона"
                  className={styles.input}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.blockGrid}>
                <h4>E-Mail</h4>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className={styles.input}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.blockGrid}>
                <h4>Регион</h4>
                <select
                  style={{ width: "100%" }}
                  className={styles.input}
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                >
                  <option>Местоположение</option>
                </select>
              </div>
              <div className={styles.blockGrid}>
                <h4>Приложить удостоверение личности</h4>
                <input
                  type="text"
                  placeholder="Приложить документ"
                  className={styles.input}
                  name="idDocument"
                  value={formData.idDocument}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.blockGrid}>
                <h4>ИП</h4>
                <input
                  type="text"
                  placeholder="Вид деятельности"
                  className={styles.input}
                  name="ip"
                  value={formData.ip}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.blockGrid}>
                <h4>Вид деятельности</h4>
                <input
                  type="text"
                  placeholder="Вид деятельности"
                  className={styles.input}
                  name="activityType"
                  value={formData.activityType}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className={styles.submitButton}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalDataForm;
