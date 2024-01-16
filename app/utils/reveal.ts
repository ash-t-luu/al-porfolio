'use client'

import { useEffect } from 'react';

export default function SectionScroll() {

    useEffect(() => {

        const sections = document.querySelectorAll('.section');

        const reveal = function (entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            const [entry] = entries;
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
        }

        const sectionObserver = new IntersectionObserver(reveal, {
            root: null,
            threshold: 0.15
        });

        sections.forEach(function (section) {
            sectionObserver.observe(section);
            section.classList.add('section--hidden');
        });
    }, []);
    return null;
}