import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimation({ children }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        
        const { current } = domRef;
        observer.observe(current);
        
        return () => observer.unobserve(current);
    }, []);

    return (
        <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
        >
        {children}
        </div>
    );
    }