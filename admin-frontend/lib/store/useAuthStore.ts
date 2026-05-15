// store/useAuthStore.ts
import { create } from 'zustand';
import { User } from '@/lib/types';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true, // Start true to prevent UI flash
  setUser: (user) => set({ user, isLoading: false }),
  setLoading: (isLoading) => set({ isLoading }),
  logout: () => {
    set({ user: null, isLoading: false });
    // You can also clear cookies here via an API call if needed
  },
}));