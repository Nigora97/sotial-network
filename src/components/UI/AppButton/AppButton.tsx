import { SAppButton } from "./AppButton.style";

interface IAppInputProps{
    buttonText: string;
    isDisabled: boolean;
    buttonClick?: () => void;
}

export const AppButton = ({
    buttonText,
    isDisabled,
    buttonClick,
}: IAppInputProps) => {
    return(
        <SAppButton disabled={isDisabled} onClick={buttonClick}>
            {buttonText}
        </SAppButton>
    )
}