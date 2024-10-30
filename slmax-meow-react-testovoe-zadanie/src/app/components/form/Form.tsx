import React from 'react';

const Form = ({active, setActive}) => {

    const onClickHandler = () => {
        setActive(false)
    }
    return (
        <>
            {
                active &&
                <div>
                    {'tyty'}
                    <button onClick={onClickHandler}>close</button>
                </div>
            }
        </>


    )
        ;
};

export default Form;