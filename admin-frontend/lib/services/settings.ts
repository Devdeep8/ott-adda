import api from "../axios";

export const settingsService = {
  getSettings: async () => {
    const res = await api.get("/settings");
    // Handle nested response structure: { success: true, data: { status: "success", data: { ... } } }
    return res.data.data || res.data;
  },
  updateSettings: async (data: { isPaymentSubscriptionOn: boolean }) => {
    const res = await api.post("/settings", data);
    return res.data.data || res.data;
  }
};
