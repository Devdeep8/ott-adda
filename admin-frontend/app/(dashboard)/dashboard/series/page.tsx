"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { adminSeriesService } from "@/src/services/admin.series.service";
import { Plus, Edit, Trash2, Eye, Calendar } from "lucide-react";

export default function SeriesManagement() {
  const [series, setSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadSeries();
  }, []);

  const loadSeries = async () => {
    try {
      setLoading(true);
      const response = await adminSeriesService.getAll();
      if (response.success) {
        setSeries(response.data.series || []);
      } else {
        setError("Failed to load series");
      }
    } catch (err: any) {
      setError(err.message || "Failed to load series");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this series?")) return;

    try {
      await adminSeriesService.delete(id);
      loadSeries();
    } catch (err: any) {
      alert("Failed to delete series: " + err.message);
    }
  };

  const filteredSeries = series.filter((s) => {
    const matchesFilter = filter === "ALL" || s.status === filter;
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "DRAFT": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "UPCOMING": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "ARCHIVED": return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="text-muted-foreground">Loading series...</div></div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-64"><div className="text-destructive">Error: {error}</div></div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Series Management</h1>
          <p className="text-sm text-muted-foreground">Manage your TV series and movies</p>
        </div>
        <Link
          href="/dashboard/series/new"
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Series
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border p-4 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search series..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2 text-sm transition-all focus:outline-none"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-muted border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary rounded-lg px-4 py-2 text-sm transition-all focus:outline-none"
          >
            <option value="ALL">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="DRAFT">Draft</option>
            <option value="UPCOMING">Upcoming</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>
      </div>

      {/* Series Grid */}
      {filteredSeries.length === 0 ? (
        <div className="bg-card border border-border p-12 rounded-xl text-center">
          <div className="text-6xl mb-4">📺</div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">No Series Found</h3>
          <p className="text-muted-foreground mb-4">Get started by creating your first series</p>
          <Link
            href="/dashboard/series/new"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
          >
            <Plus className="h-4 w-4" />
            Create Series
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSeries.map((series) => (
            <div key={series.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors">
              {/* Thumbnail */}
              {series.thumbnailUrl ? (
                <img
                  src={series.thumbnailUrl}
                  alt={series.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-muted flex items-center justify-center">
                  <div className="text-6xl">🎬</div>
                </div>
              )}

              {/* Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-1">{series.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(series.status)}`}>
                    {series.status}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{series.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {series.viewCount || 0}
                  </div>
                  <div className="flex items-center gap-1">
                    🎞️ {series.totalEpisodes || 0} episodes
                  </div>
                </div>

                {/* Genres */}
                {series.genres && series.genres.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {series.genres.slice(0, 3).map((genre: string, index: number) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                        {genre}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <Link
                    href={`/dashboard/series/${series.id}`}
                    className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-2 rounded-lg flex items-center justify-center gap-1 text-sm font-medium transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Link>
                  <Link
                    href={`/dashboard/series/${series.id}/episodes`}
                    className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-2 rounded-lg flex items-center justify-center gap-1 text-sm font-medium transition-colors"
                  >
                    🎞️ Episodes
                  </Link>
                  <button
                    onClick={() => handleDelete(series.id)}
                    className="bg-destructive/10 text-destructive hover:bg-destructive/20 px-3 py-2 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}