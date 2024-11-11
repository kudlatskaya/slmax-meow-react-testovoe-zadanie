import {ComponentProps, forwardRef} from 'react'

type Props = {
    label: string,
    inputClassName: string,
    labelClassName: string,
} & ComponentProps<'input'>


const Input: React.FC<Props> = /* @__PURE__ */ forwardRef<HTMLInputElement, Props> ((
    {
        label,
        inputClassName,
        labelClassName,
        ...rest
    },
    ref
) => {

    return (
        <div>
            <label className={labelClassName}>
                {label}
            </label>
            <div className="mt-2">
                <input
                    className={inputClassName}
                    ref={ref}
                    {...rest}
                />
            </div>
        </div>
    );
})

export default Input;