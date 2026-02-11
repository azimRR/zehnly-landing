
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames, skip static files and assets
  matcher: ['/', '/(en|ru|uz)/:path*', '/((?!_next|assets|.*\\..*).*)']
};
