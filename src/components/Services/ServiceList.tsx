import { Service } from "@/types";
import { Stack } from "@mui/material";
import { ServiceCard } from "./ServiceCard";

export type ServiceListProps = {
  services: Service[];
};

export const ServiceList = (props: ServiceListProps) => {
  const { services } = props;

  return (
    <Stack
      flexWrap="wrap"
      width="100%"
      gap={2}
      flexDirection="row"
      justifyContent="center"
    >
      {services.map((service) => (
        <ServiceCard key={service.serviceName} service={service} />
      ))}
    </Stack>
  );
};
