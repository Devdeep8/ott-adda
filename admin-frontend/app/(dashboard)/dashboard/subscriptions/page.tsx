"use client";

import { useEffect, useState } from "react";
import { subscriptionService, SubscriptionPlan } from "@/lib/services/subscriptions";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SubscriptionsPage() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<SubscriptionPlan | null>(null);
  
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    currency: "USD",
    interval: "month",
    messageLimit: 100,
    isActive: true,
  });

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const res = await subscriptionService.getAllPlans();
      setPlans(res.data);
    } catch (error) {
      toast.error("Failed to load subscription plans");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = (plan: SubscriptionPlan) => {
    setEditingPlan(plan);
    setForm({
      name: plan.name,
      description: plan.description || "",
      price: plan.price,
      currency: plan.currency,
      interval: plan.interval,
      messageLimit: plan.messageLimit,
      isActive: plan.isActive,
    });
    setIsOpen(true);
  };

  const handleOpenCreate = () => {
    setEditingPlan(null);
    setForm({
      name: "",
      description: "",
      price: 0,
      currency: "USD",
      interval: "month",
      messageLimit: 100,
      isActive: true,
    });
    setIsOpen(true);
  };

  const handleSubmit = async () => {
    try {
      if (editingPlan) {
        await subscriptionService.updatePlan(editingPlan.id, form);
        toast.success("Plan updated successfully");
      } else {
        await subscriptionService.createPlan(form);
        toast.success("Plan created successfully");
      }
      setIsOpen(false);
      fetchPlans();
    } catch (error) {
      toast.error("Failed to save plan");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this plan?")) return;
    try {
      await subscriptionService.deletePlan(id);
      toast.success("Plan deleted successfully");
      fetchPlans();
    } catch (error) {
      toast.error("Failed to delete plan");
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Subscription Plans</h1>
        <Button onClick={handleOpenCreate} className="gap-2">
          <Plus className="w-4 h-4" /> Create Plan
        </Button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white p-6 rounded-lg shadow border space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className={`px-2 py-1 rounded text-xs font-medium ${plan.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {plan.isActive ? 'Active' : 'Inactive'}
                </div>
              </div>
              
              <div className="text-2xl font-bold">
                {plan.price === 0 ? 'Free' : `${plan.price} ${plan.currency} / ${plan.interval}`}
              </div>
              
              {plan.description && <p className="text-gray-500 text-sm">{plan.description}</p>}
              
              <div className="bg-gray-50 p-3 rounded text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Message Limit</span>
                  <span className="font-medium">{plan.messageLimit} msgs</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1 gap-2" onClick={() => handleOpenEdit(plan)}>
                  <Edit className="w-4 h-4" /> Edit
                </Button>
                <Button variant="destructive" size="sm" className="flex-1 gap-2" onClick={() => handleDelete(plan.id)}>
                  <Trash2 className="w-4 h-4" /> Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingPlan ? "Edit Plan" : "Create Plan"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Pro Plan"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Price</Label>
                <Input
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
                />
              </div>
              <div className="space-y-2">
                <Label>Currency</Label>
                <Input
                  value={form.currency}
                  onChange={(e) => setForm({ ...form, currency: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Interval</Label>
                <Input
                  value={form.interval}
                  onChange={(e) => setForm({ ...form, interval: e.target.value })}
                  placeholder="e.g. month, year"
                />
              </div>
              <div className="space-y-2">
                <Label>Message Limit</Label>
                <Input
                  type="number"
                  value={form.messageLimit}
                  onChange={(e) => setForm({ ...form, messageLimit: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isActive"
                checked={form.isActive}
                onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
