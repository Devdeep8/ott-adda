"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminEpisodeService, EpisodeFormData } from "@/src/services/admin.episode.service";
import { adminSeriesService } from "@/src/services/admin.series.service";
import { ArrowLeft, Upload, Plus } from "lucide-react";

export default function EpisodeManagement({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [series, setSeries] = useState<any>(null);
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  const [formData, setFormData] = useState<Partial<EpisodeFormData>>({
    seriesId: params.id,
    episodeNumber: 0,
    title: "",
    description: "",
    isFreePreview: false,
  });

  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  useEffect(() => {
    loadData();
  }, [params.id]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [seriesRes, episodesRes] = await Promise.all([
        adminSeriesService.getById(params.id),
        adminEpisodeService.getAll({ seriesId: params.id }),
      ]);

      if (seriesRes.success) {
        setSeries(seriesRes.data);
      }
      if (episodesRes.success) {
        setEpisodes(episodesRes.data.episodes || []);
      }
    } catch (err) {
      console.error("Failed to load data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.episodeNumber) {
      alert("Please fill in required fields");
      return;
    }

    try {
      const data: EpisodeFormData = {
        seriesId: params.id,
        episodeNumber: formData.episodeNumber!,
        title: formData.title!,
        description: formData.description || "",
        isFreePreview: formData.isFreePreview || false,
        thumbnail: thumbnailFile || undefined,
      };

      await adminEpisodeService.create(data);
      setShowAddForm(false);
      setFormData({
        seriesId: params.id,
        episodeNumber: 0,
        title: "",
        description: "",
        isFreePreview: false,
      });
      setVideoFile(null);
      setThumbnailFile(null);
      loadData();
    } catch (err: any) {
      alert("Failed to create episode: " + err.message);
    }
  };

  const handleDelete = async (episodeId: string) => {
    if (!confirm("Are you sure you want to delete this episode?")) return;

    try {
      await adminEpisodeService.delete(episodeId);
      loadData();
    } catch (err: any) {
      alert("Failed to delete episode: " + err.message);
    }
  };

  const getNextEpisodeNumber = () => {
    const maxNumber = Math.max(0, ...episodes.map(ep => ep.episodeNumber));
    return maxNumber + 1;
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="text-muted-foreground">Loading episodes...</div></div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="bg-muted hover:bg-muted/80 p-2 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-heading font-bold text-foreground">
            {series?.title || "Series"} - Episodes
          </h1>
          <p className="text-sm text-muted-foreground">Manage episodes for this series</p>
        </div>
        <button
          onClick={() => {
            setShowAddForm(true);
            setFormData({ ...formData, episodeNumber: getNextEpisodeNumber() });
          }}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Episode
        </button>
      </div>

      {/* Add Episode Form */}
      {showAddForm && (
        <div className="bg-card border border-border p-6 rounded-xl space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Add New Episode</h2>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-muted-foreground mb-1.5 block text-xs font-bold tracking-[0.15em] uppercase">
                  Episode Number *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  value={formData.episodeNumber || getNextEpisodeNumber()}
                  onChange={(e) => setFormData({ ...formData, episodeNumber: parseInt(e.target.value) })}
                  className="w-full bg-muted border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary h-12 rounded-lg px-4 text-sm transition-all focus:outline-none"
                />
              </div>

              <div>
                <label className="text-muted-foreground mb-1.5 block text-xs font-bold tracking-[0.15em] uppercase">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary h-12 rounded-lg px-4 text-sm transition-all focus:outline-none"
                  placeholder="Episode title"
                />
              </div>
            </div>

            <div>
              <label className="text-muted-foreground mb-1.5 block text-xs font-bold tracking-[0.15em] uppercase">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary min-h-24 rounded-lg px-4 py-3 text-sm transition-all focus:outline-none resize-y"
                placeholder="Episode description"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-muted-foreground mb-1.5 block text-xs font-bold tracking-[0.15em] uppercase">
                  Video File
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-4">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                    className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-muted file:text-foreground file:cursor-pointer hover:file:bg-muted/80"
                  />
                  {videoFile && (
                    <div className="mt-2 text-sm text-foreground">
                      Selected: {videoFile.name}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-muted-foreground mb-1.5 block text-xs font-bold tracking-[0.15em] uppercase">
                  Thumbnail
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
                    className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-muted file:text-foreground file:cursor-pointer hover:file:bg-muted/80"
                  />
                  {thumbnailFile && (
                    <div className="mt-2 text-sm text-foreground">
                      Selected: {thumbnailFile.name}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="freePreview"
                checked={formData.isFreePreview}
                onChange={(e) => setFormData({ ...formData, isFreePreview: e.target.checked })}
                className="w-5 h-5 rounded border-border"
              />
              <label htmlFor="freePreview" className="text-sm text-foreground">
                Free Preview (available to non-subscribers)
              </label>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-muted hover:bg-muted/80 py-3 rounded-lg font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-medium transition-colors"
              >
                Create Episode
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Episodes List */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {episodes.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">📹</div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">No Episodes Yet</h3>
            <p className="text-muted-foreground mb-4">Start by creating the first episode</p>
            <button
              onClick={() => {
                setShowAddForm(true);
                setFormData({ ...formData, episodeNumber: getNextEpisodeNumber() });
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add First Episode
            </button>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {episodes
              .sort((a, b) => a.episodeNumber - b.episodeNumber)
              .map((episode) => (
                <div key={episode.id} className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-primary/20">
                      {episode.episodeNumber}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{episode.title}</h3>
                          {episode.description && (
                            <p className="text-sm text-muted-foreground mt-1">{episode.description}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {episode.isFree && (
                            <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-medium">
                              Free Preview
                            </span>
                          )}
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            episode.status === 'READY' ? 'bg-green-500/10 text-green-500' :
                            episode.status === 'PROCESSING' ? 'bg-yellow-500/10 text-yellow-500' :
                            episode.status === 'FAILED' ? 'bg-red-500/10 text-red-500' :
                            'bg-gray-500/10 text-gray-500'
                          }`}>
                            {episode.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>🎞️ {episode.durationSeconds ? Math.floor(episode.durationSeconds / 60) : 0} min</span>
                        <span>👁️ {episode.viewCount || 0} views</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(episode.id)}
                        className="bg-destructive/10 text-destructive hover:bg-destructive/20 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}