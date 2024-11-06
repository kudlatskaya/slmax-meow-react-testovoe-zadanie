import {ComponentProps} from 'react'

type Props = {
    label: string,
    inputClassName: string,
    labelClassName: string,
} & ComponentProps<'input'>

const Input: React.FC<Props> = ({
                                    label,
                                    id,
                                    name,
                                    type,
                                    required,
                                    autoComplete,
                                    inputClassName,
                                    labelClassName
                                }: Props) => {
    return (
        <div>
            <label htmlFor={name} className={labelClassName}>
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type={type}
                    required={required}
                    autoComplete={autoComplete}
                    className={inputClassName}
                />
            </div>
        </div>
    );
};

export default Input;