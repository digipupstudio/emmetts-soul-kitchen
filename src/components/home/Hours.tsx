import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Clock } from "lucide-react";

const Hours = () => {
  const { t } = useTranslation();

  const hours = [
    { day: t("service.thursday"), time: t("service.thursdayHours") },
    { day: t("service.friday"), time: t("service.fridayHours") },
    { day: t("service.saturday"), time: t("service.saturdayHours") },
    { day: t("service.sunday"), time: t("service.sundayHours") },
    { day: t("service.monday"), time: t("service.mondayHours") },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-2xl p-8 shadow-warm"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
          <Clock className="w-6 h-6 text-accent" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground">
          {t("service.hours")}
        </h3>
      </div>

      <div className="space-y-4">
        {hours.map((item) => (
          <div key={item.day} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-b-0">
            <span className="font-semibold text-foreground">{item.day}</span>
            <span className="text-muted-foreground font-medium">{item.time}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-6 italic">
        {t("service.servingNotice")}
      </p>
    </motion.div>
  );
};

export default Hours;
