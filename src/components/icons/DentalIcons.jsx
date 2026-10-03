import React from 'react';

// Neteja Dental
export const ToothSparkleIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3C10 3 8 4 8 6C8 7 8 10 8 12C8 14 9 17 10 19C11 21 11.5 22 12 22C12.5 22 13 21 14 19C15 17 16 14 16 12C16 10 16 7 16 6C16 4 14 3 12 3Z"/>
        <circle cx="17" cy="5" r="1.2" fill="currentColor" stroke="none"/>
        <circle cx="19" cy="3" r="0.8" fill="currentColor" stroke="none"/>
        <circle cx="20" cy="7" r="0.9" fill="currentColor" stroke="none"/>
        <circle cx="18.5" cy="10" r="1" fill="currentColor" stroke="none"/>
    </svg>
);

// Blanquejament
export const ToothBrushIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="15" width="3" height="7" rx="1"/>
        <path d="M6 15L18 3"/>
    </svg>
);

// Ortodòncia
export const ToothBracesIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="5" y="9" width="3" height="3" rx="0.5" fill="currentColor"/>
        <rect x="10.5" y="9" width="3" height="3" rx="0.5" fill="currentColor"/>
        <rect x="16" y="9" width="3" height="3" rx="0.5" fill="currentColor"/>
        <path d="M6.5 10.5L11.5 10.5M13 10.5L17.5 10.5" strokeWidth="2" stroke="currentColor"/>
    </svg>
);

// Implants
export const ToothImplantIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3C10 3 8 4 8 6C8 7 8 9 8 10L16 10C16 9 16 7 16 6C16 4 14 3 12 3Z"/>
        <rect x="10" y="10" width="4" height="3" fill="currentColor" stroke="none"/>
        <line x1="9" y1="13" x2="9" y2="20" strokeWidth="2.5"/>
        <line x1="12" y1="13" x2="12" y2="20" strokeWidth="2.5"/>
        <line x1="15" y1="13" x2="15" y2="20" strokeWidth="2.5"/>
    </svg>
);

// Endodòncia
export const ToothDropIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3C10 3 8 4 8 6C8 7 8 10 8 12C8 14 9 17 10 19C11 21 11.5 22 12 22C12.5 22 13 21 14 19C15 17 16 14 16 12C16 10 16 7 16 6C16 4 14 3 12 3Z"/>
        <ellipse cx="12" cy="10" rx="3.5" ry="5" fill="currentColor" stroke="none" opacity="0.8"/>
    </svg>
);

// Prótesi removible
export const ToothProsthesisIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12C5 10 6 9 7 9L17 9C18 9 19 10 19 12L19 16C19 17 18 18 17 18L7 18C6 18 5 17 5 16Z" fill="currentColor" opacity="0.6"/>
        <rect x="7" y="9" width="2" height="9" rx="1" fill="currentColor" stroke="none"/>
        <rect x="11" y="9" width="2" height="9" rx="1" fill="currentColor" stroke="none"/>
        <rect x="15" y="9" width="2" height="9" rx="1" fill="currentColor" stroke="none"/>
    </svg>
);

// Estètica
export const ToothCrownIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 12C4 10 5 8 7 8C8 8 9 8.5 10 9C11 10 11 10 12 10C13 10 13 10 14 9C15 8.5 16 8 17 8C19 8 20 10 20 12C20 14 19 16 17 18H7C5 16 4 14 4 12Z" fill="currentColor"/>
        <path d="M6 9L7 8L8 9L9 8L10 9L11 8L12 9L13 8L14 9L15 8L16 9L17 8L18 9" strokeWidth="2"/>
    </svg>
);

// Odontopediatria
export const BabyToothIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 5C10.5 5 9 6 9 7.5C9 8 9 10 9 11.5C9 13 9.5 15 10 16.5C10.5 18 11 18.5 12 18.5C13 18.5 13.5 18 14 16.5C14.5 15 15 13 15 11.5C15 10 15 8 15 7.5C15 6 13.5 5 12 5Z"/>
        <circle cx="10.5" cy="9" r="0.5" fill="currentColor"/>
        <circle cx="13.5" cy="9" r="0.5" fill="currentColor"/>
        <path d="M10 12C10.5 13 11 13 12 13C13 13 13.5 13 14 12"/>
    </svg>
);

// Urgències
export const AlertToothIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 3C10 3 8 4 8 6C8 7 8 10 8 12C8 14 9 17 10 19C11 21 11.5 22 12 22C12.5 22 13 21 14 19C15 17 16 14 16 12C16 10 16 7 16 6C16 4 14 3 12 3Z"/>
        <line x1="12" y1="8" x2="12" y2="13"/>
        <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
    </svg>
);