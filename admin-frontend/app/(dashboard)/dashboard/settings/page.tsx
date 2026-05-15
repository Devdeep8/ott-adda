"use client";

import { useEffect, useState } from "react";
import { settingsService } from "@/lib/services/settings";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [isPaymentSubscriptionOn, setIsPaymentSubscriptionOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const res = await settingsService.getSettings();
      if (res) {
        setIsPaymentSubscriptionOn(res.data.isPaymentSubscriptionOn);
      }
    } catch (error) {
      toast.error("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      await settingsService.updateSettings({ isPaymentSubscriptionOn });
      toast.success("Settings updated successfully");
    } catch (error) {
      toast.error("Failed to update settings");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">System Settings</h1>
      
      <div className="bg-white p-6 rounded-lg shadow border space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base font-semibold">Payment Subscriptions</Label>
            <p className="text-sm text-gray-500">
              Enable or disable payment subscriptions globally. When disabled, the subscription page will not be visible to users.
            </p>
          </div>
          <Switch
            checked={isPaymentSubscriptionOn}
            onCheckedChange={setIsPaymentSubscriptionOn}
          />
        </div>
        
        <div className="pt-4 border-t flex justify-end">
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </div>
  );
}
