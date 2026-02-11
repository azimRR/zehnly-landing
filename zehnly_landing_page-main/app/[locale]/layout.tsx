import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Rubik } from 'next/font/google'
import '../globals.css' // Adjusted import path
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Zehnly AI - Learn English with Fun Games',
  description: 'Master English through addictive mini-games. The fun way to learn!',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans antialiased text-slate-800 dark:text-dark-text bg-[#F7F7F7] dark:bg-dark-bg transition-colors duration-300`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 dark:opacity-20 bg-sandy-texture" />
            <div 
              className="fixed inset-0 z-[-2] pointer-events-none bg-linear-to-br from-zehnly-violet-light/10 via-white dark:via-dark-bg to-zehnly-green-light/10 dark:to-zehnly-violet/20"
            />
            <Navbar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
