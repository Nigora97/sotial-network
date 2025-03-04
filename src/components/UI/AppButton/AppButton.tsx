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
        <button disabled={isDisabled} onClick={buttonClick}>
            {buttonText}
        </button>
    )
}