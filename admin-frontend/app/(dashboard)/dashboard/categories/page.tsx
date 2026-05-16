"use client";

import { useState, useEffect } from "react";
import { adminCategoryService } from "@/src/services/admin.category.service";
import { adminSeriesService } from "@/src/services/admin.series.service";
import { Plus, Edit, Trash2, ArrowUp, ArrowDown, Star } from "lucide-react";

export default function CategoryManagement() {
  const [categories, setCategories] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [assignedSeries, setAssignedSeries] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [categoriesRes, seriesRes] = await Promise.all([
        adminCategoryService.getAll(),
        adminSeriesService.getAll(),
      ]);

      if (categoriesRes.success) {
        setCategories(categoriesRes.data.items || []);
      }
      if (seriesRes.success) {
        setSeries(seriesRes.data.series || []);
      }
    } catch (err) {
      console.error("Failed to load data:", err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (slug: string) => {
    const icons: Record<string, string> = {
      "top-picks": "⭐",
      "recommended": "💡",
      "new-releases": "🆕",
      "upcoming": "🗓️",
      "trending": "🔥",
    };
    return icons[slug] || "📁";
  };

  const handleOrderChange = async (categoryId: string, direction: "up" | "down") => {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;

    const currentOrder = category.displayOrder;
    const newOrder = direction === "up" ? currentOrder - 1 : currentOrder + 1;

    if (newOrder < 1) return;

    try {
      await adminCategoryService.updateOrder(categoryId, newOrder);
      loadData();
    } catch (err: any) {
      alert("Failed to update order: " + err.message);
    }
  };

  const toggleSeriesAssignment = (seriesId: string) => {
    setAssignedSeries(prev =>
      prev.includes(seriesId)
        ? prev.filter(id => id !== seriesId)
        : [...prev, seriesId]
    );
  };

  const saveAssignments = async () => {
    if (!selectedCategory) return;

    try {
      const seriesData = assignedSeries.map((id, index) => ({ id, displayOrder: index + 1 }));
      await adminCategoryService.updateSeriesOrder(selectedCategory, seriesData);
      alert("Series assignments saved successfully!");
      setSelectedCategory(null);
      setAssignedSeries([]);
    } catch (err: any) {
      alert("Failed to save assignments: " + err.message);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="text-muted-foreground">Loading categories...</div></div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Category Management</h1>
          <p className="text-sm text-muted-foreground">Organize content into categories for better user experience</p>
        </div>
      </div>

      {/* Category Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Categories List */}
        <div className="bg-card border border-border p-6 rounded-xl space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Categories</h2>
          <div className="space-y-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center gap-3 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className="text-3xl">{getCategoryIcon(category.slug)}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    Order: {category.displayOrder}
                  </span>
                  <button
                    onClick={() => handleOrderChange(category.id, "up")}
                    disabled={category.displayOrder <= 1}
                    className="p-1 hover:bg-background rounded transition-colors disabled:opacity-50"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleOrderChange(category.id, "down")}
                    disabled={category.displayOrder >= categories.length}
                    className="p-1 hover:bg-background rounded transition-colors disabled:opacity-50"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 rounded text-sm font-medium transition-colors"
                  >
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Series Assignment */}
        {selectedCategory && (
          <div className="bg-card border border-border p-6 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">
                Manage {categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto space-y-2">
              {series.map((s) => (
                <label
                  key={s.id}
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={assignedSeries.includes(s.id)}
                    onChange={() => toggleSeriesAssignment(s.id)}
                    className="w-5 h-5 rounded border-border"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{s.title}</div>
                    <div className="text-sm text-muted-foreground">{s.totalEpisodes} episodes</div>
                  </div>
                  {s.isFeatured && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                </label>
              ))}
            </div>

            <button
              onClick={saveAssignments}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition-colors"
            >
              Save Assignments
            </button>
          </div>
        )}
      </div>
    </div>
  );
}