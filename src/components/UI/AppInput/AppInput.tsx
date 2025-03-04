interface IAppInputProps {
type: "tel"|"password"|"username",
placeholder: string;
inputValue: string;
inputChange?: () => void;
}

export const AppInput = ({
    inputValue, 
    inputChange, 
    placeholder,
    type,
}: IAppInputProps) => {
    return  ( <input 
            type= {type} 
            placeholder= {placeholder} 
            onChange= {inputChange}
            value= {inputValue}/>
    );
};