import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Globe, Check, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("menu"), path: "/menu" },
    { name: t("catering"), path: "/catering" },
    { name: t("about"), path: "/about" },
    { name: t("gallery"), path: "/gallery" },
    { name: t("reviews"), path: "/reviews" },
    { name: t("contact"), path: "/contact" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇲🇽" },
  ];

  const currentLanguage = languages.find((lang) => i18n.language.startsWith(lang.code)) || languages[1];

  const toggleLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile Banner */}
      <div className="2xl:hidden fixed top-0 left-0 right-0 z-50 bg-background px-4 py-3 border-b border-border/50">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="px-4 py-2 bg-[#002868] border-2 border-[#bf0a30] rounded-full text-center shadow-md"
        >
          <p className="text-[10px] sm:text-xs font-black text-white uppercase tracking-wider flex items-center justify-center gap-1.5">
            <span className="text-[#ffd700]">★</span> {i18n.language.startsWith('es') ? 'Propiedad y Operado por Veterano' : 'Veteran Owned & Operated'} <span className="text-[#ffd700]">★</span>
          </p>
        </motion.div>
      </div>

      <header className="fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-md shadow-sm 2xl:top-0 2xl:z-50">
        <div className="container-custom 2xl:max-w-screen-2xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group translate-z-0">
              <img
                src={logo}
                alt="Ms. Emmett's Soul Food"
                className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden xl:flex items-center gap-4">
              {/* Language Toggle */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 font-semibold">
                    <span className="text-lg">{currentLanguage.flag}</span>
                    <span className="uppercase">{currentLanguage.code}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => toggleLanguage(lang.code)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      {i18n.language.startsWith(lang.code) && <Check className="w-4 h-4 text-primary" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden 2xl:flex px-4 py-2 bg-[#002868] border-2 border-[#bf0a30] rounded-full shadow-md"
              >
                <p className="text-[10px] font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="text-[#ffd700]">★</span> {i18n.language.startsWith('es') ? 'Propiedad de Veterano' : 'Veteran Owned'}
                </p>
              </motion.div>

              <div className="hidden 2xl:flex flex-col">
                <a href="tel:+16152308868" className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  (615) 230-8868
                </a>
              </div>

              <Button variant="soul" size="sm" asChild>
                <Link to="/contact">{t("contact")}</Link>
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="xl:hidden flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <span className="text-xl">{currentLanguage.flag}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => toggleLanguage(lang.code)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </div>
                      {i18n.language.startsWith(lang.code) && <Check className="w-4 h-4 text-primary" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-foreground hover:bg-accent rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-background border-t border-border overflow-hidden shadow-xl"
            >
              <nav className="container-custom py-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-bold p-3 rounded-lg transition-colors ${location.pathname === link.path
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:bg-accent"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-4 pt-6 border-t border-border flex flex-col gap-4">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {t("service.hours")}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs bg-background p-2 rounded">
                      <div>
                        <p className="font-semibold text-foreground">{t("service.thursday")}</p>
                        <p className="text-muted-foreground">{t("service.thursdayHours")}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t("service.friday")}</p>
                        <p className="text-muted-foreground">{t("service.fridayHours")}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t("service.sunday")}</p>
                        <p className="text-muted-foreground">{t("service.sundayHours")}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t("service.monday")}</p>
                        <p className="text-muted-foreground">{t("service.mondayHours")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-3">
                    <span className="text-sm font-semibold text-muted-foreground">{t("common.language")}</span>
                    <div className="flex gap-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={i18n.language.startsWith(lang.code) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleLanguage(lang.code)}
                          className="gap-2 h-9"
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="uppercase text-xs">{lang.code}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <a href="tel:+16152308868" className="flex items-center gap-3 p-3 text-primary font-bold bg-primary/5 rounded-lg">
                    <Phone className="w-5 h-5" />
                    (615) 230-8868
                  </a>

                  <Button variant="soul" size="lg" asChild className="w-full h-14 text-lg">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      {t("common.contactUsNow")}
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
