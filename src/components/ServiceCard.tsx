import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-8 rounded-2xl bg-surface-elevated border border-surface-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
        <span className="text-primary group-hover:text-white transition-colors text-2xl">
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-secondary">{title}</h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
