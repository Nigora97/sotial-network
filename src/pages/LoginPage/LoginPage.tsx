import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import { SLoginPage } from "./Loginpage.style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";

interface IloginForm {
  userEmail: string;
  userPassword: string;
}

const loginScheme = yup.object({
  userEmail: yup.string().email("Введите почту корректно").required(),
  userPassword: yup.string().min(4, "Минимум 4 цифры").required(),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginScheme),
    mode: "onBlur",
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const onLoginSubmit: SubmitHandler<IloginForm> = (data) => {
    const payload = {
      useremail: data.userEmail,
      userpassword: data.userPassword,
    }
    console.log(payload)
  }

  return (
    <SLoginPage>
      <Heading headingText="Авторизация" headingType="h1" />
      <form action="#" onSubmit = {handleSubmit(onLoginSubmit)}>
        <Controller 
        name="userEmail"
        control={control}
        render={({field})=>(
          <AppInput 
          isError={errors.userEmail ? true : false}
          errorMessage={errors.userEmail?.message}
          placeholder="Введите свою почту"
           type="email" 
           {...field}/>
        )}
        />
        <Controller 
        name="userPassword"
        control={control}
        render={({field})=>(
          <AppInput 
          isError={errors.userPassword ? true : false}
          errorMessage={errors.userPassword?.message}
          placeholder="Пароль"
           type="password" 
           {...field}
           />
        )}
        />
       
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
