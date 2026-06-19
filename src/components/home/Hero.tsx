import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 opacity-40" />

      {/* Content */}
      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-20 flex justify-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl lg:max-w-3xl px-4 lg:pl-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-highlight font-semibold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 tracking-wide uppercase"
          >
            {t("hero.tagline")}
          </motion.p>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            {t("hero.title1")}{" "}
            <span className="text-highlight">{t("hero.title2")}</span>{" "}
            {t("hero.title3")}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 text-base sm:text-lg max-w-2xl mb-4 sm:mb-6 italic drop-shadow"
          >
            {t("hero.supportingStatement")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-10 drop-shadow"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-start"
          >
            <Button variant="hero" size="lg" asChild className="sm:size-xl">
              <Link to="/contact">
                {t("hero.contactBtn")}
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="sm:size-xl">
              <Link to="/menu">
                {t("hero.menuBtn")}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
