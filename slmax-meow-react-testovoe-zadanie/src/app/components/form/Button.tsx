import s from '../../styles/Button.module.css'

type Props = {
    title: string,
    callBack: () => void,
    className?: string,
    disabled?: boolean,
    children?: React.ReactElement
}

const Button = ({title, callBack, disabled, className, children}: Props) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
        <div >
            <button
                className={title ? className : s.button}
                onClick={onClickHandler}
                disabled={disabled}>{title || children}</button>
        </div>
    );
};

export default Button;

