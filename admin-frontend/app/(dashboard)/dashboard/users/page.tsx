"use client";

import { useState, useEffect } from "react";
import { adminService } from "@/src/services/admin.service";
import { Search, Mail, Phone, CreditCard, Shield } from "lucide-react";

export default function UserManagement() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await adminService.getUsers();
      if (response.success) {
        setUsers(response.data.items || []);
      }
    } catch (err) {
      console.error("Failed to load users:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.phone && user.phone.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRole = !filterRole || user.role === filterRole;
    const matchesStatus =
      !filterStatus ||
      (user.subscription && user.subscription.status === filterStatus) ||
      (!user.subscription && filterStatus === "NONE");
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await adminService.updateUserRole(userId, newRole);
      loadUsers();
    } catch (err: any) {
      alert("Failed to update role: " + err.message);
    }
  };

  const getSubscriptionBadge = (user: any) => {
    if (!user.subscription) {
      return <span className="bg-gray-500/10 text-gray-500 px-2 py-1 rounded-full text-xs font-medium">No Subscription</span>;
    }

    const statusColors: Record<string, string> = {
      ACTIVE: "bg-green-500/10 text-green-500",
      CANCELLED: "bg-red-500/10 text-red-500",
      EXPIRED: "bg-gray-500/10 text-gray-500",
      PENDING: "bg-yellow-500/10 text-yellow-500",
      PAUSED: "bg-blue-500/10 text-blue-500",
    };

    return (
      <span className={`${statusColors[user.subscription.status] || statusColors.PENDING} px-2 py-1 rounded-full text-xs font-medium`}>
        {user.subscription.status}
      </span>
    );
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="text-muted-foreground">Loading users...</div></div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-heading font-bold text-foreground">User Management</h1>
        <p className="text-sm text-muted-foreground">Manage platform users and their subscriptions</p>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border p-4 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary h-12 rounded-lg pl-10 pr-4 text-sm transition-all focus:outline-none"
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="bg-muted border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary h-12 rounded-lg px-4 text-sm transition-all focus:outline-none"
          >
            <option value="">All Roles</option>
            <option value="USER">Users</option>
            <option value="ADMIN">Admins</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-muted border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary h-12 rounded-lg px-4 text-sm transition-all focus:outline-none"
          >
            <option value="">All Subscriptions</option>
            <option value="NONE">No Subscription</option>
            <option value="ACTIVE">Active</option>
            <option value="CANCELLED">Cancelled</option>
            <option value="EXPIRED">Expired</option>
            <option value="PENDING">Pending</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">User</th>
                <th className="text-left px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">Contact</th>
                <th className="text-left px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">Role</th>
                <th className="text-left px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">Subscription</th>
                <th className="text-left px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                    No users found matching your criteria
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {(user.profile?.firstName || user.email)?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            {user.profile?.firstName && user.profile?.lastName
                              ? `${user.profile.firstName} ${user.profile.lastName}`
                              : "User"}
                          </div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {user.phone && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4" />
                            {user.phone}
                          </div>
                        )}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          {user.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        className="bg-muted border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary rounded px-2 py-1 text-sm transition-all focus:outline-none"
                      >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      {user.subscription ? (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-foreground">
                              {user.subscription.plan.name}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Ends: {new Date(user.subscription.endDate).toLocaleDateString()}
                          </div>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">No subscription</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {getSubscriptionBadge(user)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Shield className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                          title="Manage Subscription"
                        >
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}