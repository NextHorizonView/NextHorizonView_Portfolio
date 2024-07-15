// src/CustomCursor.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Cursor.styles.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(true);

    // Update cursor position
    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    // Toggle cursor visibility
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    const springProps = useSpring({
        left: position.x,
        top: position.y,
        opacity: visible ? 1 : 0,
        config: { tension: 200, friction: 20 },
    });

    return <animated.div className="custom-cursor" style={springProps} />;
};

export default Cursor;
