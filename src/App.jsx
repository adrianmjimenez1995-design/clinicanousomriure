import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { pagesConfig } from './pages.config'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import PageNotFound from './lib/PageNotFound';
import { LanguageProvider } from '@/i18n/LanguageContext';

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) => Layout ?
  <Layout currentPageName={currentPageName}>{children}</Layout>
  : <>{children}</>;

// Català sense prefix (/Servicios) i castellà amb /es (/es/Servicios)
const LANG_PREFIXES = ['', '/es'];

// Rutes i proveïdors. Es fan servir tant al navegador (BrowserRouter) com en generar l'HTML estàtic (StaticRouter).
export function AppRoutes() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      {/* Respecta la preferència del sistema de reduir animacions */}
      <MotionConfig reducedMotion="user">
        <LanguageProvider>
          <Routes>
            {LANG_PREFIXES.map((prefix) => (
              <Route key={`main${prefix}`} path={prefix || '/'} element={
                <LayoutWrapper currentPageName={mainPageKey}>
                  <MainPage />
                </LayoutWrapper>
              } />
            ))}
            {LANG_PREFIXES.flatMap((prefix) => Object.entries(Pages).map(([path, Page]) => (
              <Route
                key={`${prefix}/${path}`}
                path={`${prefix}/${path}`}
                element={
                  <LayoutWrapper currentPageName={path}>
                    <Page />
                  </LayoutWrapper>
                }
              />
            )))}
            <Route path="*" element={
              <LayoutWrapper>
                <PageNotFound />
              </LayoutWrapper>
            } />
          </Routes>
        </LanguageProvider>
        <Toaster />
      </MotionConfig>
    </QueryClientProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
