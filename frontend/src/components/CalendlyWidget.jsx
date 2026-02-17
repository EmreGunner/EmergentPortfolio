import React, { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        // Add CSS
        const link = document.createElement('link');
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        // Add Script
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.Calendly) {
                window.Calendly.initBadgeWidget({
                    url: 'https://calendly.com/appointmenttr/30min',
                    text: 'Schedule time',
                    color: '#0069ff',
                    textColor: '#ffffff',
                    branding: false
                });
            }
        };

        return () => {
            // Cleanup if needed (though badge widgets usually stay)
            const badge = document.querySelector('.calendly-badge-widget');
            if (badge) badge.remove();
            if (document.body.contains(script)) document.body.removeChild(script);
            if (document.head.contains(link)) document.head.removeChild(link);
        };
    }, []);

    return null;
};

export default CalendlyWidget;
