import React, { useState, useEffect } from 'react';
import { FiArrowUp } from "react-icons/fi";
import { Scrolls, FiArrowUps } from './toTop.style';


const ToTopBtn = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            return window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);

        } else {
            setVisible(false);
        }
    };

    return (
        <>
            {visible && (<>
                <Scrolls onClick={scrollToTop}>
                    <FiArrowUps>
                        <FiArrowUp />
                    </FiArrowUps>
                </Scrolls>
            </>
            )}
        </>
    )
}

export default ToTopBtn