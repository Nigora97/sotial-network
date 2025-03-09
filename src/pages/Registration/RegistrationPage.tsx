import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Heading } from "../../components/UI/Heading/Heading";
import "./RegistrationPage.scss";
import { SRegistrationPage } from "./Registrationpage.style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm, SubmitHandler } from "react-hook-form";




interface IRegistrationForm{
  userName: string;
  userEmail: string;
  userPassword: string;
}

const RegistrationScheme = yup.object({
  userName: yup.string().label("ВВедите Имя и Фамилию").required(),
  userEmail: yup.string().email("Введите почту корректно").required(),
  userPassword: yup.string().min(4, "Минимум 4 цифры").required(),
}); 


export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegistrationScheme),
    mode: "onBlur",
    defaultValues: {
      userName: "",
      userEmail: "",
      userPassword: "",
    },
  });

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    const payload = {
      username: data.userName,
      useremail: data.userEmail,
      userpassword: data.userPassword,
    }
    console.log(payload)
  }



  return (
    <SRegistrationPage>
      <Heading headingText="Регистрация" headingType="h1"/>
      <form action="#" onSubmit={handleSubmit(onRegistrationSubmit)}>
        <Controller
        name="userName"
        control={control}
        render={({field})=>(
          <AppInput 
          isError={errors.userName ? true : false}
          errorMessage={errors.userName?.message}
          placeholder="Введите свое имя"
           type="name" 
           {...field}/>
          )}
        />
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

       <AppButton buttonText="Зарегистрироваться" isDisabled= {false}/>
      </form>
      
    <RegistrationInfo 
    path="/"
    registrationText="Уже есть аккаунт?"
    loginText="Войти"
    enterText="Регистрация с помощью"/>
    </SRegistrationPage>
  );
};
