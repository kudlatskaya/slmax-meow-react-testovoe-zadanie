import s from '../../styles/Button.module.css'

type Props = {
    title: string,
    callBack: () => void,
    disabled?: boolean,
    children?: React.ReactElement
}

const Button = ({title, callBack, disabled, children}: Props) => {

    const className = title
        ? "bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        : s.button

    const onClickHandler = () => {
        callBack();
    }

    return (
        <div >
            <button
                className={className}
                onClick={onClickHandler}
                disabled={disabled}>{title || children}</button>
        </div>
    );
};

export default Button;

