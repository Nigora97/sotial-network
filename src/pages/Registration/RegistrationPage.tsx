import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import "./RegistrationPage.scss";

export const RegistrationPage = () => {
  return (
    <div className="RegistrationPage">
      <Heading headingText="Регистрация" headingType="h1"/>
      <form action="#">
        <AppInput inputValue="" placeholder="Имя и Фамилия" type="username" />
        <AppInput inputValue="" placeholder="Номер телефона" type="tel"/>
        <AppInput inputValue="" placeholder="Пароль" type="password"/>
       <AppButton buttonText="Зарегистрироваться" isDisabled= {false}/>
      </form>
      
    <RegistrationInfo 
    path="/"
    registrationText="Уже есть аккаунт?"
    loginText="Войти"
    enterText="Регистрация с помощью"/>
    </div>
  );
};
