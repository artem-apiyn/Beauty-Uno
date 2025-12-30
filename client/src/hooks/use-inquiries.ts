import { useMutation } from "@tanstack/react-query";

export type InquiryData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function useCreateInquiry() {
  return useMutation({
    mutationFn: async (data: InquiryData) => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      // In a real app without backend, you might want to log this or send to a third-party service
      console.log("Inquiry submitted:", data);
      // Return mock response
      return {
        id: Date.now(),
        ...data,
        createdAt: new Date().toISOString(),
      };
    },
  });
}
