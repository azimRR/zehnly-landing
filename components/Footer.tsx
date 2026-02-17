"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

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
            <h3 className="text-sm font-medium text-gray-200">{t("product")}</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="#features">{t("features")}</a></li>
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="#pricing">{t("pricing")}</a></li>
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="#how-it-works">{t("howItWorks")}</a></li>
              <li><a className="text-purple-200/65 transition hover:text-purple-400" href="#speaking">{t("speaking")}</a></li>
            </ul>
          </div>
          {/* Company */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">{t("company")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/about">{t("aboutUs")}</Link></li>
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/contact">{t("contact")}</Link></li>
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/blog">{t("blog")}</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">{t("legal")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/privacy">{t("privacy")}</Link></li>
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/terms">{t("terms")}</Link></li>
              <li><Link className="text-purple-200/65 transition hover:text-purple-400" href="/cookies">{t("cookies")}</Link></li>
            </ul>
          </div>
          {/* Download */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">{t("download")}</h3>
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
                &copy; {new Date().getFullYear()} {t("copyright")}
                <span className="text-gray-700"> &middot; </span>
                <Link className="text-purple-200/65 transition hover:text-purple-400" href="/terms">{t("termsShort")}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
