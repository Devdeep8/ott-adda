"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { adminSeriesService, SeriesFormData } from "@/src/services/admin.series.service";
import { adminCategoryService } from "@/src/services/admin.category.service";
import { ArrowLeft, Upload, X } from "lucide-react";

export default function NewSeries() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [bannerPreview, setBannerPreview] = useState<string>("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const [formData, setFormData] = useState<Partial<SeriesFormData>>({
    title: "",
    description: "",
    genres: [],
    status: "DRAFT",
    releaseDate: "",
    isFeatured: false,
  });

  const AVAILABLE_GENRES = [
    "Action", "Comedy", "Drama", "Horror", "Sci-Fi",
    "Romance", "Thriller", "Animation", "Documentary", "Crime",
    "Fantasy", "Mystery", "Adventure", "Family", "Biography"
  ];

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const response = await adminCategoryService.getAll();
      if (response.success) {
        setCategories(response.data.items || []);
      }
    } catch (err) {
      console.error("Failed to load categories:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
      alert("Please enter a title");
      return;
    }

    try {
      setLoading(true);
      const data: SeriesFormData = {
        title: formData.title!,
        description: formData.description || "",
        genres: selectedGenres,
        status: formData.status || "DRAFT",
        releaseDate: formData.releaseDate || new Date().toISOString(),
        isFeatured: formData.isFeatured || false,
        thumbnail: thumbnail || undefined,
        banner: banner || undefined,
      };

      const response = await adminSeriesService.create(data);
      if (response.success) {
        router.push("/dashboard/series");
      } else {
        alert("Failed to create series: " + response.message);
      }
    } catch (err: any) {
      alert("Failed to create series: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBanner(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/series"
          className="bg-muted hover:bg-muted/80 p-2 rounded-lg transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Add New Series</h1>
          <p className="text-sm text-muted-foreground">Create a new TV series or movie</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Basic Information</h2>

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
                  placeholder="Enter series title"
                />
              </div>

              <div>
                <label className="text-muted-foreground mb-1.5 block text-xs font-bold tracking-[0.15em] uppercase">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary min-h-32 rounded-lg px-4 py-3 text-sm transition-all focus:outline-none resize-y"
                  placeholder="Enter series description"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-muted-foreground mb-1.5 block text-xs font-bold tracking-[0.15em] uppercase">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-muted border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary h-12 rounded-lg px-4 text-sm transition-all focus:outline-none"
                  >
                    <option value="DRAFT">Draft</option>
                    <option value="ACTIVE">Active</option>
                    <option value="UPCOMING">Upcoming</option>
                    <option value="ARCHIVED">Archived</option>
                  </select>
                </div>

                <div>
                  <label className="text-muted-foreground mb-1.5 block text-xs font-bold tracking-[0.15em] uppercase">
                    Release Date
                  </label>
                  <input
                    type="date"
                    value={formData.releaseDate}
                    onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                    className="w-full bg-muted border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary h-12 rounded-lg px-4 text-sm transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="w-5 h-5 rounded border-border"
                />
                <label htmlFor="featured" className="text-sm text-foreground">
                  Featured (Show on homepage)
                </label>
              </div>
            </div>

            {/* Genres */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Genres</h2>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_GENRES.map((genre) => (
                  <button
                    key={genre}
                    type="button"
                    onClick={() => toggleGenre(genre)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedGenres.includes(genre)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
              {selectedGenres.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {selectedGenres.map((genre) => (
                    <span key={genre} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                      {genre} <button type="button" onClick={() => toggleGenre(genre)} className="ml-1 hover:text-primary/80">×</button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="bg-card border border-border p-6 rounded-xl space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span key={category.id} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      {category.name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  You can assign categories after creating the series
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Images */}
          <div className="space-y-6">
            {/* Thumbnail */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Thumbnail</h2>
              <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden border-2 border-dashed border-border hover:border-primary transition-colors">
                {thumbnailPreview ? (
                  <img src={thumbnailPreview} alt="Thumbnail preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                    <Upload className="h-8 w-8 mb-2" />
                    <p className="text-sm">Drop thumbnail here</p>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-muted file:text-foreground file:cursor-pointer hover:file:bg-muted/80"
              />
            </div>

            {/* Banner */}
            <div className="bg-card border border-border p-6 rounded-xl space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Banner</h2>
              <div className="aspect-[21/9] bg-muted rounded-lg overflow-hidden border-2 border-dashed border-border hover:border-primary transition-colors">
                {bannerPreview ? (
                  <img src={bannerPreview} alt="Banner preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                    <Upload className="h-8 w-8 mb-2" />
                    <p className="text-sm">Drop banner here</p>
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleBannerChange}
                className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-muted file:text-foreground file:cursor-pointer hover:file:bg-muted/80"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/series"
            className="bg-muted hover:bg-muted/80 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Series"}
          </button>
        </div>
      </form>
    </div>
  );
}