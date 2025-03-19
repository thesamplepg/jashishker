"use client";
import Haeder from "@/components/Haeder/Haeder";
import s from "./page.module.scss";
import Footer from "@/components/Footer/Footer";
import { useRef, useState } from "react";
import { InputMask } from "@react-input/mask";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useLocale } from 'next-intl';

const translations = {
  ru: {
    title: "База данных молодых предпринимателей",
    addPhoto: "Добавить фото",
    fullName: "ФИО",
    fullNamePlaceholder: "Иванов Иван Иванович",
    dateOfBirth: "Дата рождения",
    phone: "Номер телефона",
    phonePlaceholder: "Номер телефона",
    email: "E-Mail",
    emailPlaceholder: "E-Mail",
    region: "Регион",
    idDocument: "Приложить удостоверение личности",
    activityType: "Вид экономической деятельности",
    activityCategory: "Категория экономической деятельности",
    activityCategoryDescription: `Например, выращивание многолетних культур является одной из категорий вида экономической деятельности сельское хозяйство, лесное хозяйство, охота и рыболовство. Таким образом, в ответе для этого вопроса можно написать выращивание многолетних культур.`,
    companyRegistration: "Юридическая регистрация компании",
    fullCompanyName: "Полное фирменное наименование компании",
    commercialName: "Коммерческое определение компании",
    submit: "Отправить",
    required: "Поле обязательно для заполнения",
    success: "Ваша заявка успешно отправлена",
    error: "Ваша заявка не была отправлена"
  },
  en: {
    title: "Young Entrepreneurs Database",
    addPhoto: "Add photo",
    fullName: "Full Name",
    fullNamePlaceholder: "John Doe",
    dateOfBirth: "Date of Birth",
    phone: "Phone Number",
    phonePlaceholder: "Phone Number",
    email: "E-Mail",
    emailPlaceholder: "E-Mail",
    region: "Region",
    idDocument: "Attach ID Document",
    activityType: "Type of Economic Activity",
    activityCategory: "Economic Activity Category",
    activityCategoryDescription: `For example, perennial crop cultivation is one of the categories of economic activity in agriculture, forestry, hunting and fishing. Thus, perennial crop cultivation can be written as an answer to this question.`,
    companyRegistration: "Company Legal Registration",
    fullCompanyName: "Full Company Name",
    commercialName: "Commercial Company Name",
    submit: "Submit",
    required: "This field is required",
    success: "Your application has been successfully sent",
    error: "Your application was not sent"
  },
  ky: {
    title: "Жаш ишкерлердин маалымат базасы",
    addPhoto: "Сүрөт кошуу",
    fullName: "Аты-жөнү",
    fullNamePlaceholder: "Асанов Асан Асанович",
    dateOfBirth: "Туулган күнү",
    phone: "Телефон номери",
    phonePlaceholder: "Телефон номери",
    email: "Электрондук почта",
    emailPlaceholder: "Электрондук почта",
    region: "Аймак",
    idDocument: "Инсандык күбөлүктү тиркөө",
    activityType: "Экономикалык иш-аракеттин түрү",
    activityCategory: "Экономикалык иш-аракеттин категориясы",
    activityCategoryDescription: `Мисалы, көп жылдык өсүмдүктөрдү өстүрүү айыл чарба, токой чарба, аңчылык жана балык уулоо экономикалык иш-аракетинин категорияларынын бири болуп саналат. Демек, бул суроого көп жылдык өсүмдүктөрдү өстүрүү деп жазса болот.`,
    companyRegistration: "Компаниянын юридикалык каттоосу",
    fullCompanyName: "Компаниянын толук аталышы",
    commercialName: "Компаниянын коммерциялык аталышы",
    submit: "Жөнөтүү",
    required: "Бул талаа милдеттүү түрдө толтурулушу керек",
    success: "Сиздин арызыңыз ийгиликтүү жөнөтүлдү",
    error: "Сиздин арызыңыз жөнөтүлгөн жок"
  }
};

const regions = {
  ru: ["Чуй", "Ош", "Иссык-Куль", "Жалал-Абад", "Нарын", "Баткен"],
  en: ["Chui", "Osh", "Issyk-Kul", "Jalal-Abad", "Naryn", "Batken"],
  ky: ["Чүй", "Ош", "Ысык-Көл", "Жалал-Абад", "Нарын", "Баткен"]
};

const activityTypes = {
  ru: [
    "Сельское хозяйство, лесное хозяйство, охота и рыболовство",
    "Обрабатывающие производства",
    "Строительство",
    "Оптовая и розничная торговля",
    "Транспортная деятельность",
    "Гостиницы и рестораны"
  ],
  en: [
    "Agriculture, forestry, hunting and fishing",
    "Manufacturing",
    "Construction",
    "Wholesale and retail trade",
    "Transportation",
    "Hotels and restaurants"
  ],
  ky: [
    "Айыл чарба, токой чарба, аңчылык жана балык уулоо",
    "Өндүрүш",
    "Курулуш",
    "Дүң жана чекене соода",
    "Транспорт",
    "Мейманканалар жана ресторандар"
  ]
};

const companyTypes = {
  ru: [
    { value: "ИП", label: "ИП" },
    { value: "ОсОО", label: "ОсОО" },
    { value: "КФХ", label: "КФХ" }
  ],
  en: [
    { value: "ИП", label: "Individual Entrepreneur" },
    { value: "ОсОО", label: "LLC" },
    { value: "КФХ", label: "Farm Enterprise" }
  ],
  ky: [
    { value: "ИП", label: "Жеке ишкер" },
    { value: "ОсОО", label: "ЖЧК" },
    { value: "КФХ", label: "Дыйкан чарба" }
  ]
};

const Page = () => {
  const locale = useLocale();
  const t = translations[locale];

  const [from, setFrom] = useState({
    photo: null,
    full_name: null,
    activity_type: null,
    email: null,
    phone: null,
    region: null,
    identification_document: null,
    date_of_birth: null,
    activity_category: null,
    company_registration: null,
    full_company_name: null,
    commercial_name: null,
  });
  const [photoUrl, setPhotoUrl] = useState(null);
  const photoRef = useRef();

  const onChangeInputFille = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);

    setFrom({ ...from, photo: file });
    setPhotoUrl(url);
  };

  const handleRegionChange = (event) => {
    setFrom({ ...from, region: event.target.value });
  };

  const handleActivityTypeChange = (event) => {
    setFrom({ ...from, activity_type: event.target.value });
  };

  const handleCompanyRegistrationChange = (event) => {
    setFrom({ ...from, company_registration: event.target.value });
  };
  const hanfleidentification_document = (event) => {
    setFrom({ ...from, identification_document: event.target.files[0] });
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    const newErrors = {};
    for (const field in from) {
      if (from[field] === null || from[field] === undefined) {
        newErrors[field] = "Поле обязательно для заполнения";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      toast.error("Поле обязательно для заполнения");
      setErrors(newErrors);
    } else {
      const From = new FormData();
      From.append("photo", from.photo);
      From.append("full_name", from.full_name);
      From.append("activity_type", from.activity_type);
      From.append("email", from.email);
      const newFormat = from.phone
        .replace(/\D+/g, "")
        .replace(/^(\d{3})(\d{3})(\d{3})(\d{3})$/, "+$1$2$3$4");

      From.append("phone", newFormat);
      From.append("region", from.region);
      From.append("identification_document", from.identification_document);
      From.append("date_of_birth", from.date_of_birth);
      From.append("activity_category", from.activity_category);
      From.append("company_registration", from.company_registration);
      From.append("full_company_name", from.full_company_name);
      From.append("commercial_name", from.commercial_name);

      try {
        const { data } = await axios.post(
          "https://api.jashishker.kg/api/v1/application-form/",
          From,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setFrom({
          photo: null,
          full_name: null,
          activity_type: null,
          email: null,
          phone: null,
          region: null,
          identification_document: null,
          date_of_birth: null,
          activity_category: null,
          company_registration: null,
          full_company_name: null,
          commercial_name: null,
        });

        setPhotoUrl(null);
        toast.success("Ваша заявка успешно отправлена");
        setErrors({});
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        console.error("Error:", error.response.data);
        toast.error("Ваша заявка не была отправлена");
        setErrors(error.response.data);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Haeder />

      <div className={s.content}>
        <div className={s.titelContent}>
          <h1>{t.title}</h1>
          <div className={s.BlockFrom}>
            <div className={s.BlockFromInputList}>
              <div className={s.imageFroom}>
                <span className={s.Profil}>
                  {photoUrl ? (
                    <img src={photoUrl} alt="" />
                  ) : (
                    <span>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.3172 21.74C24.1172 21.72 23.8772 21.72 23.6572 21.74C18.8972 21.58 15.1172 17.68 15.1172 12.88C15.1172 7.98 19.0772 4 23.9972 4C28.8972 4 32.8772 7.98 32.8772 12.88C32.8572 17.68 29.0772 21.58 24.3172 21.74Z"
                          stroke="#292D32"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.3175 29.12C9.4775 32.36 9.4775 37.64 14.3175 40.86C19.8175 44.54 28.8375 44.54 34.3375 40.86C39.1775 37.62 39.1775 32.34 34.3375 29.12C28.8575 25.46 19.8375 25.46 14.3175 29.12Z"
                          stroke="#292D32"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </span>
                <p onClick={() => photoRef.current.click()}>{t.addPhoto}</p>
                <input
                  type="file"
                  onChange={onChangeInputFille}
                  ref={photoRef}
                  style={{ display: "none" }}
                />
                {errors.photo && (
                  <span className={s.error}>{errors.photo}</span>
                )}
              </div>
              <div className={s.labelList}>
                <label>
                  <p>{t.fullName}</p>
                  <input
                    type="text"
                    placeholder={t.fullNamePlaceholder}
                    onChange={(e) => setFrom({ ...from, full_name: e.target.value })}
                  />
                </label>
                <label>
                  <p>{t.dateOfBirth}</p>
                  <input
                    type="date"
                    onChange={(e) => setFrom({ ...from, date_of_birth: e.target.value })}
                  />
                </label>
                <label>
                  <p>{t.phone}</p>
                  <InputMask
                    placeholder={t.phonePlaceholder}
                    type="text"
                    replacement={{ _: /\d/ }}
                    mask="+996 (___) ___-___"
                    value={from.phone}
                    onChange={(e) => setFrom({ ...from, phone: e.target.value })}
                  />
                  {errors.phone && <p className={s.error}>{errors.phone}</p>}
                </label>
                <label>
                  <p>{t.email}</p>
                  <input
                    type="text"
                    placeholder={t.emailPlaceholder}
                    onChange={(e) => setFrom({ ...from, email: e.target.value })}
                  />
                  {errors.email && <p className={s.error}>{errors.email}</p>}
                </label>
                <label>
                  <p>{t.region}</p>
                  <div>
                    {regions[locale].map((region, index) => (
                      <label key={index} className={s.regionLabel}>
                        <input
                          type="radio"
                          name="region"
                          value={region}
                          checked={from.region === region}
                          onChange={handleRegionChange}
                        />
                        {region}
                      </label>
                    ))}
                  </div>
                  {errors.region && <p className={s.error}>{errors.region}</p>}
                </label>
                <label>
                  <p>{t.idDocument}</p>
                  <input
                    type="file"
                    placeholder={t.idDocument}
                    onChange={(e) => hanfleidentification_document(e)}
                  />
                  {errors.identification_document && (
                    <p className={s.error}>{errors.identification_document}</p>
                  )}
                </label>
                <label>
                  <p>{t.activityType}</p>
                  <div>
                    {activityTypes[locale].map((type, index) => (
                      <label key={index} className={s.activityLabel}>
                        <input
                          type="radio"
                          name="activity_type"
                          value={type}
                          checked={from.activity_type === type}
                          onChange={handleActivityTypeChange}
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                  {errors.activity_type && (
                    <p className={s.error}>{errors.activity_type}</p>
                  )}
                </label>
                <label className={s.fromLabelTitle}>
                  <p>
                    {t.activityCategory}
                  </p>
                  <span>
                    {t.activityCategoryDescription}
                  </span>
                  <input
                    type="text"
                    placeholder={
                      locale === "ky" ? "Менин жообум" :
                        locale === "ru" ? "Мой ответ" :
                          locale === "en" ? "My answer" :
                            ""
                    }
                    onChange={(e) => setFrom({ ...from, activity_category: e.target.value })}
                  />
                  {errors.activity_category && (
                    <p className={s.error}>{errors.activity_category}</p>
                  )}
                </label>

                <label>
                  <p>{t.companyRegistration}</p>
                  <div>
                    {companyTypes[locale].map((type, index) => (
                      <label key={index} className={s.companyTypeLabel}>
                        <input
                          type="radio"
                          name="company_registration"
                          value={type.value}
                          checked={from.company_registration === type.value}
                          onChange={handleCompanyRegistrationChange}
                        />
                        {type.label}
                      </label>
                    ))}
                  </div>
                </label>
                <label>
                  <p>{t.fullCompanyName}</p>
                  <input
                    placeholder={t.fullCompanyName}
                    type="text"
                    onChange={(e) => setFrom({ ...from, full_company_name: e.target.value })}
                  />
                  {errors.full_company_name && (
                    <p className={s.error}>{errors.full_company_name}</p>
                  )}
                </label>
                <label>
                  <p>{t.commercialName}</p>
                  <input
                    placeholder={t.commercialName}
                    type="text"
                    onChange={(e) => setFrom({ ...from, commercial_name: e.target.value })}
                  />
                  {errors.company_definition && (
                    <p className={s.error}>{errors.commercial_name}</p>
                  )}
                </label>
                <button onClick={handleSubmit}>{t.submit}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
