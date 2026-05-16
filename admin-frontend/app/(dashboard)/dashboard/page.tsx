"use client";

import { useState, useEffect } from "react";
import { adminService } from "@/src/services/admin.service";
import { adminAuthService } from "@/src/services/admin.auth.service";

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (adminAuthService.isAuthenticated()) {
      loadDashboardData();
    }
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const response = await adminService.getDashboard();
      if (response.success) {
        setDashboardData(response.data);
      } else {
        setError("Failed to load dashboard data");
      }
    } catch (err: any) {
      setError(err.message || "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-destructive">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card border border-border p-6 rounded-xl">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-2">
          Welcome Back, Admin
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your OTT platform content, users, and analytics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value={dashboardData?.totalUsers || 0}
          icon="👥"
          color="text-blue-500"
        />
        <StatCard
          title="Active Subscribers"
          value={dashboardData?.activeSubscribers || 0}
          icon="💳"
          color="text-green-500"
        />
        <StatCard
          title="Total Series"
          value={dashboardData?.totalSeries || 0}
          icon="🎬"
          color="text-purple-500"
        />
        <StatCard
          title="Total Episodes"
          value={dashboardData?.totalEpisodes || 0}
          icon="🎞️"
          color="text-orange-500"
        />
      </div>

      {/* Revenue */}
      <div className="bg-card border border-border p-6 rounded-xl">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Revenue Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Total Revenue</div>
            <div className="text-2xl font-bold text-green-500">
              ₹{((dashboardData?.totalRevenue || 0) / 100).toFixed(2)}
            </div>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">This Month</div>
            <div className="text-2xl font-bold text-foreground">
              ₹{((dashboardData?.monthlyRevenue?.[Object.keys(dashboardData?.monthlyRevenue || {})[Object.keys(dashboardData?.monthlyRevenue || {}).length - 1]] || 0) / 100).toFixed(2)}
            </div>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground mb-1">Active Plans</div>
            <div className="text-2xl font-bold text-purple-500">
              {dashboardData?.activeSubscribers || 0}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <QuickActionCard
          title="Add New Series"
          description="Create a new TV series or movie"
          icon="➕"
          link="/dashboard/series/new"
        />
        <QuickActionCard
          title="Manage Episodes"
          description="Upload and organize episodes"
          icon="📹"
          link="/dashboard/episodes"
        />
        <QuickActionCard
          title="Manage Categories"
          description="Organize content into categories"
          icon="🏷️"
          link="/dashboard/categories"
        />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: { title: string; value: number; icon: string; color: string }) {
  return (
    <div className="bg-card border border-border p-6 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <div className={`text-3xl ${color}`}>{icon}</div>
        <div className="text-2xl font-bold text-foreground">{value.toLocaleString()}</div>
      </div>
      <div className="text-sm text-muted-foreground">{title}</div>
    </div>
  );
}

function QuickActionCard({ title, description, icon, link }: { title: string; description: string; icon: string; link: string }) {
  return (
    <a href={link} className="block bg-card border border-border p-6 rounded-xl hover:border-primary transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </a>
  );
}