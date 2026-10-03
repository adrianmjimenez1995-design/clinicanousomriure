import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LANGUAGES, localizePath, stripLangPrefix, useLang } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

// Selector d'idioma CA | ES: porta a la mateixa pàgina en l'altre idioma, sense moure la posició de la pàgina
export default function LanguageSwitcher({ className, tone = 'light' }) {
    const { pathname, search } = useLocation();
    const { lang, t } = useLang();
    const basePath = stripLangPrefix(pathname);

    return (
        <nav
            aria-label={t({ ca: 'Idioma', es: 'Idioma' })}
            className={cn(
                'flex items-center rounded-full p-0.5 text-[13px] font-semibold',
                tone === 'dark' ? 'bg-white/10' : 'border border-sand-200 bg-white',
                className
            )}
        >
            {LANGUAGES.map(({ code, label, name }) => {
                const active = code === lang;
                return (
                    <Link
                        key={code}
                        to={localizePath(basePath, code) + search}
                        state={{ keepScroll: true }}
                        hrefLang={code}
                        lang={code}
                        title={name}
                        aria-label={name}
                        aria-current={active ? 'true' : undefined}
                        className={cn(
                            'flex h-8 min-w-[2.25rem] items-center justify-center rounded-full px-2 transition-colors sm:min-w-[2.5rem] sm:px-2.5',
                            active
                                ? tone === 'dark'
                                    ? 'bg-white text-brand-950'
                                    : 'bg-brand-700 text-white'
                                : tone === 'dark'
                                    ? 'text-white/75 hover:text-white'
                                    : 'text-slate-600 hover:text-brand-800'
                        )}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}
