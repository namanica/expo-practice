import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StackLayout } from "../StackLayout";

const queryClient = new QueryClient();

export const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StackLayout />
    </QueryClientProvider>
  );
};
