interface IHeadingPops {
headingText:string;
headingType: "h1"|"h2"|"h3"|"h4"|"h5"|"h6";
}

export const Heading = ({headingType, headingText}: IHeadingPops) => {
    const renderHeading =()=>{
        switch (headingType){
            case "h1":
                return <h1>{headingText}</h1>
            case "h1":
                return <h2>{headingText}</h2>
            case "h1":
                return <h3>{headingText}</h3>
            case "h1":
                return <h4>{headingText}</h4>
            case "h1":
                return <h5>{headingText}</h5>
            case "h1":
                return <h6>{headingText}</h6>
            default:
                return <h1>{headingText}</h1>
        }
    }
    return renderHeading();
};