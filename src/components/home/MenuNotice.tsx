import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AlertCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const MenuNotice = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 md:p-8 border-2 border-accent/50"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-accent mt-1" />
        </div>
        <div className="flex-grow">
          <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
            {t("common.notice")}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
            {t("service.menuNotice")}
          </p>
          <div className="text-xs md:text-sm text-muted-foreground mb-4">
            {t("menuPage.dailyNotice")}
          </div>
          <Button 
            variant="soul" 
            size="sm" 
            asChild
            className="gap-2"
          >
            <a
              href="https://www.facebook.com/emmettskitchen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-4 h-4" />
              Follow on Facebook
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuNotice;
