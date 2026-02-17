import Image from "next/image";
import { Link } from "@/i18n/routing";

export const Footer = () => {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2" aria-hidden="true">
          <div className="w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* Product */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="#features">Features</a></li>
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="#pricing">Pricing</a></li>
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="#how-it-works">How It Works</a></li>
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="#speaking">Speaking Practice</a></li>
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/about">About Us</Link></li>
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/contact">Contact</Link></li>
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/blog">Blog</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/terms">Terms of Service</Link></li>
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
          {/* Download */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Download</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="https://apps.apple.com/uz/app/zehnly-ai/id6747878184" target="_blank" rel="noopener noreferrer">App Store</a></li>
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="https://play.google.com/store/apps/details?id=ai.zehnly&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">Google Play</a></li>
            </ul>
          </div>
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3 flex items-center gap-2 lg:justify-end">
              <div className="relative w-8 h-8">
                <Image src="/assets/zehnly-logo.png" alt="Zehnly" fill className="object-contain" />
              </div>
              <span className="font-jakarta font-bold text-gray-200">ZEHNLY</span>
            </div>
            <div className="text-sm">
              <p className="mb-3 text-purple-200/65">
                &copy; {new Date().getFullYear()} Zehnly AI
                <span className="text-gray-700"> &middot; </span>
                <Link className="text-purple-200/65 transition hover:text-purple-400" href="/terms">Terms</Link>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a className="flex items-center justify-center text-purple-500 transition hover:text-purple-400" href="#" aria-label="Instagram">
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32"><path d="M16 8.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm8.2-12.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM27 16c0-3-.1-5.8-.5-8-.4-2.3-1.7-3.6-4-4C20.3 3.5 17.5 3.4 14.5 3.4S8.7 3.5 6.5 3.9c-2.3.5-3.6 1.8-4 4.1C2.1 10.2 2 13 2 16s.1 5.8.5 8c.4 2.3 1.7 3.6 4 4 2.2.4 5 .5 8 .5s5.8-.1 8-.5c2.3-.4 3.6-1.7 4-4 .4-2.2.5-5 .5-8Zm-2.5 7.6c-.3 1.4-1.1 2.2-2.5 2.5-1.8.3-4.5.4-6 .4s-4.2-.1-6-.4c-1.4-.3-2.2-1.1-2.5-2.5-.3-1.8-.4-4.5-.4-7.6s.1-5.8.4-7.6c.3-1.4 1.1-2.2 2.5-2.5C11.8 5.6 14.5 5.5 16 5.5s4.2.1 6 .4c1.4.3 2.2 1.1 2.5 2.5.3 1.8.4 4.5.4 7.6s-.1 5.8-.4 7.6Z" /></svg>
                  </a>
                </li>
                <li>
                  <a className="flex items-center justify-center text-purple-500 transition hover:text-purple-400" href="#" aria-label="Twitter">
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32"><path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" /></svg>
                  </a>
                </li>
                <li>
                  <a className="flex items-center justify-center text-purple-500 transition hover:text-purple-400" href="#" aria-label="Facebook">
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32"><path d="M13 26V17H9v-4h4v-3.2C13 6.4 15.4 4 18.8 4c1.5 0 3.2.3 3.2.3v3.7h-1.8c-1.8 0-2.4 1.1-2.4 2.3V13h4.2l-.7 4h-3.5v9h-4.8Z" /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
