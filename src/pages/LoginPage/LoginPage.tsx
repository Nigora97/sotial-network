import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import "./LoginPage.scss";
import { SLoginPage } from "./Loginpage.style";

export const LoginPage = () => {
  return (
    <SLoginPage>
      <Heading headingText="Авторизация" headingType="h1" />
      <form action="#">
        <AppInput inputValue="" placeholder="Номер телефона" type="tel" />
        <AppInput inputValue="" placeholder="Пароль" type="password" />
        <AppButton buttonText="Войти" isDisabled={false} />
      </form>
      <a href="#">Забыли пароль?</a>

      {/* Передаем необходимые пропсы в RegistrationInfo */}
      <RegistrationInfo
        path="/registration-page"
        registrationText="У вас нет аккаунта?"
        loginText="Зарегистрироваться"
        enterText="Войти с помощью"
      />
    </SLoginPage>
  );
};
