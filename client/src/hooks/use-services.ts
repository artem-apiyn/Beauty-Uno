import { useQuery } from "@tanstack/react-query";
import { mockServices, type Service } from "@/data/mockServices";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: async (): Promise<Service[]> => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 100));
      return mockServices;
    },
  });
}

export function useService(id: number) {
  return useQuery({
    queryKey: ["service", id],
    queryFn: async (): Promise<Service | null> => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 100));
      const service = mockServices.find(s => s.id === id);
      return service || null;
    },
  });
}
