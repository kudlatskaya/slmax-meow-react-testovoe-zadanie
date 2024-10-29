type Props = {
    title: string,
    callBack: () => void,
    disabled?: boolean,
}

const Button = ({title, callBack, disabled}: Props) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
        <div>
            <button
                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                onClick={onClickHandler}
                disabled={disabled}>{title}</button>
        </div>
    );
};

export default Button;

