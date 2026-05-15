import api from "../axios";

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string | null;
  price: number;
  currency: string;
  interval: string;
  messageLimit: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const subscriptionService = {
  getAllPlans: async () => {
    const res = await api.get("/subscriptions");
    return res.data;
  },
  getPlanById: async (id: string) => {
    const res = await api.get(`/subscriptions/${id}`);
    return res.data;
  },
  createPlan: async (data: Partial<SubscriptionPlan>) => {
    const res = await api.post("/subscriptions", data);
    return res.data;
  },
  updatePlan: async (id: string, data: Partial<SubscriptionPlan>) => {
    const res = await api.patch(`/subscriptions/${id}`, data);
    return res.data;
  },
  deletePlan: async (id: string) => {
    const res = await api.delete(`/subscriptions/${id}`);
    return res.data;
  }
};
