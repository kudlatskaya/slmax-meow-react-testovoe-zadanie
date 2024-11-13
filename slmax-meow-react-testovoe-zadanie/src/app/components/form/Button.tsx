import s from '../../styles/Button.module.css'
import {ComponentProps} from "react";

type Props = {
    title: string,
    callBack: () => void,
    className?: string,
    disabled?: boolean,
    children?: React.ReactElement
} & ComponentProps<'button'>

const Button = ({title, callBack, disabled, className, children, ...rest}: Props) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
        <div >
            <button
                type={rest.type}
                className={title ? className : s.button}
                onClick={rest.type!='submit' ? onClickHandler : null}
                disabled={disabled}>{title || children}</button>
        </div>
    );
};

export default Button;

