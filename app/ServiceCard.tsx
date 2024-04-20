import clsx from "clsx";
import React from "react";

type ServiceCardProps = {
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
  className: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  children,
  className,
}) => {
  return (
    <div className={clsx("rounded-[10px] p-[40px]", className)}>
      <div>
        <div className="text-2xl font-semibold mb-3">{title}</div>
        <p className="text-[#6F6F6F]">{description}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ServiceCard;
