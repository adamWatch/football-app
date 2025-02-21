import { StyledNoticed } from './styleNotice'

interface NoticeProps {
    text: string;
}

export const Notice = (props:NoticeProps) => {

    const {text} = props;

    return (
        <StyledNoticed>
            <p>{text}</p>
        </StyledNoticed>
    ) 
}