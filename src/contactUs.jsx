/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import useAnalyticsEventTracket from './useAnalyticsEventTracker'

function contactUs() {
    const gaEventTracker = useAnalyticsEventTracket('Contact Us');
    return (
        <div>
            <h3>Contact Us</h3>
            <div>
                <a href="#" onClick={() => gaEventTracker('call')}>Call Us</a>
            </div>
            <div>
                <a href="mailto:someone@example.com" onClick={() => gaEventTracker('email')}>Write to us</a>
            </div>
        </div>
    )
}

export default contactUs