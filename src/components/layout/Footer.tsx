import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-8 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <img src={logo} alt="Ms. Emmett's Soul Food" className="h-16 md:h-24 w-auto" />
            <p className="text-secondary-foreground/80 text-xs md:text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/emmettskitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-3 md:mb-4">{t("footer.quickLinks")}</h4>
            <nav className="space-y-2 md:space-y-3">
              <Link to="/" className="block text-secondary-foreground/80 text-xs md:text-sm hover:text-accent transition-colors">{t("home")}</Link>
              <Link to="/menu" className="block text-secondary-foreground/80 text-xs md:text-sm hover:text-accent transition-colors">{t("menu")}</Link>
              <Link to="/catering" className="block text-secondary-foreground/80 text-xs md:text-sm hover:text-accent transition-colors">{t("catering")}</Link>
              <Link to="/order" className="block text-secondary-foreground/80 text-xs md:text-sm hover:text-accent transition-colors">{t("order")}</Link>
              <Link to="/about" className="block text-secondary-foreground/80 text-xs md:text-sm hover:text-accent transition-colors">{t("about")}</Link>
              <Link to="/contact" className="block text-secondary-foreground/80 text-xs md:text-sm hover:text-accent transition-colors">{t("contact")}</Link>
            </nav>
          </div>


          {/* Contact */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-3 md:mb-4">{t("footer.contactUs")}</h4>
            <div className="space-y-3 md:space-y-4">
              <a
                href="tel:+16152308868"
                className="flex items-center gap-2 md:gap-3 text-secondary-foreground/80 text-xs md:text-sm hover:text-accent transition-colors"
              >
                <Phone className="w-4 md:w-5 h-4 md:h-5 text-accent flex-shrink-0" />
                <span>(615) 230-8868</span>
              </a>
              <button
                onClick={() => window.location.href = 'mailto:Info@emmettsoulfood.com'}
                className="flex items-center gap-2 md:gap-3 text-secondary-foreground/80 text-xs md:text-sm hover:text-accent transition-colors break-all cursor-pointer border-none bg-inherit p-0"
              >
                <Mail className="w-4 md:w-5 h-4 md:h-5 text-accent flex-shrink-0" />
                <span>Info@emmettsoulfood.com</span>
              </button>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
              <Clock className="w-4 md:w-5 h-4 md:h-5 text-accent flex-shrink-0" />
              {t("service.hours")}
            </h4>
            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex justify-between gap-2">
                <span className="font-medium text-secondary-foreground/80">{t("service.thursday")}</span>
                <span className="text-secondary-foreground/60">{t("service.thursdayHours")}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="font-medium text-secondary-foreground/80">{t("service.friday")}</span>
                <span className="text-secondary-foreground/60">{t("service.fridayHours")}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="font-medium text-secondary-foreground/80">{t("service.sunday")}</span>
                <span className="text-secondary-foreground/60">{t("service.sundayHours")}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="font-medium text-secondary-foreground/80">{t("service.monday")}</span>
                <span className="text-secondary-foreground/60">{t("service.mondayHours")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-secondary-foreground/60 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Ms. Emmett's Soul Food. {t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
