import { useState, useEffect, useRef } from 'react';
import {
    ProgressMainWrapper,
    ProgressMainStyle,
    ProgressCounter
} from './Indicator.style';
import { gsap } from 'gsap';

const ScrollIndicator = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [percent, setPercent] = useState(0);
    const indicatorRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(indicatorRef.current, 2, { opacity: 0 }, { opacity: 1 }, "+4.2");
    }, [])

    // When scroll, calculate position
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setPercent(scrolled.toFixed(0));
        setScrollTop(scrolled);
    };

    // Listen to scrolling
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <>

            <ProgressMainWrapper ref={indicatorRef}>
                <ProgressMainStyle style={{
                    height: `${scrollTop}%`
                }}>
                    <ProgressCounter>
                        {percent}%
                    </ProgressCounter>
                </ProgressMainStyle>
            </ProgressMainWrapper>

        </>
    )
}

export default ScrollIndicator