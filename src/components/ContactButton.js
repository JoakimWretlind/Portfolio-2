import React, { useRef } from 'react'
import { Button } from './sharedStyling';

/** I'm forwarding ref here, because the button is
 * placed in another components than the component
 * where it will work.
 */

const ContactBtn = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        window.scrollTo({
            /** Here the inputRef is applied, and since
             * contact is at the bottom, I use offsetTop
             * *100 -> 100% from the top = the bottom, 
             * to scroll all the way down.
             * Scroll-behaviiour is set to smooth.
             */
            top: inputRef.current.offsetTop * 100
        })
    }



    /** Use the styling for Button and then the imputRef.
     * The button is exported to Home.js where it is used
     * as ContactBtn.
     */
    return (
        <>
            <Button ref={inputRef} onClick={handleClick}>
                contact
            </Button>
        </>
    )
}

export default ContactBtn
