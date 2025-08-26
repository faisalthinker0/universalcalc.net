import { QueryClient } from "@tanstack/react-query";

// Frontend-only QueryClient for potential future external API integrations
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});
