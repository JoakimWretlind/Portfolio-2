import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import useWindowSize from './hooks/useWindowSize';

const ParentWrapper = styled.div`
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

const SmoothScroll = ({ children }) => {
    // Hook to grab window size
    const windowSize = useWindowSize();

    /** Ref for parent div is used to apply translateY property on the div, on the fly. */
    const scrollContainer = useRef();

    /** Configs. Is not a state because we don't want our react component
     * re-rendering each time we scroll */
    const data = {
        ease: 0.08, // how smooth/fast the scroll will be
        current: 0,
        previous: 0,
        rounded: 0,
    };

    // This useEffect runs only if the windowSize changes.
    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height]);

    const setBodyHeight = () => {
        document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
            }px`;
    };

    // This useEffect runs only once and calls the smoothScrolling function
    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
        // eslint-disable-next-line
    }, []);

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;

        scrollContainer.current.style.transform = `translateY(-${data.previous}px)`;

        // Recursive call
        requestAnimationFrame(() => smoothScrollingHandler());
    };
    return (
        <ParentWrapper>
            <div ref={scrollContainer}>{children}</div>
        </ParentWrapper>
    );
}

export default SmoothScroll
