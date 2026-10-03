import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const variants = {
    primary: 'bg-terra-600 text-white shadow-lg shadow-terra-700/20 hover:bg-terra-700 hover:shadow-xl hover:shadow-terra-700/25',
    brand: 'bg-brand-700 text-white shadow-lg shadow-brand-900/15 hover:bg-brand-800',
    outline: 'border border-brand-200 bg-white text-brand-800 hover:border-brand-400 hover:bg-brand-50',
    light: 'bg-white text-brand-900 shadow-lg shadow-brand-950/20 hover:bg-sand-100',
    outlineLight: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
    whatsapp: 'bg-[#15803d] text-white shadow-lg shadow-green-900/15 hover:bg-[#166534]',
};

const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-[15px]',
    lg: 'h-14 px-8 text-base',
};

// Enllaç amb aspecte de botó. Amb `to` navega dins la web; amb `href` obre enllaços externs, tel: o mailto:.
export default function ActionLink({ to, href, variant = 'primary', size = 'md', className, children, ...props }) {
    const classes = cn(
        'group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2',
        '[&_svg]:size-[1.15em] [&_svg]:shrink-0',
        variants[variant],
        sizes[size],
        className
    );

    if (to) {
        return <Link to={to} className={classes} {...props}>{children}</Link>;
    }

    const isExternal = href?.startsWith('http');
    return (
        <a href={href} className={classes} {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>
            {children}
        </a>
    );
}
