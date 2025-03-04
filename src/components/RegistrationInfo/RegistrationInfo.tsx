import { Link } from "react-router-dom";

interface IRegistrationProps { 
    path: string;
    registrationText?: string; // новый пропс для текста
    loginText?: string; // новый пропс для текста
    enterText?: string;
}

export const RegistrationInfo = ({path,
                                registrationText,
                                loginText,
                                enterText,
}: IRegistrationProps) => {
  return (
    <div className="registration">
      <span>
      {registrationText} <Link to = {path}>{loginText}</Link>
      </span>
      <p>{enterText}</p>
      <div className="icons-wrapper">
        <a className="reg__link google-link" href="#">
          <img src="./img/icons/google.svg" alt="Google" />
        </a>
        <a className="reg__link google-plus-link" href="#">
          <img src="./img/icons/google-plus.svg" alt="Google Plus" />
        </a>
        <a className="reg__link yandex-link" href="#">
          <img src="./img/icons/yandex.svg" alt="Yandex" />
        </a>
        <a className="reg__link mail-ru-link" href="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </a>
      </div>
    </div>
  );
};
