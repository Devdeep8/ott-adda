import api from "../axios";

export interface CmsPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  pageType: "system" | "custom";
  status: "draft" | "published";
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CmsSeo {
  id: string;
  pageIdentifier: string;
  pageType: "static" | "cms";
  metaTitle: string | null;
  metaDescription: string | null;
  canonicalUrl: string | null;
  robots: string | null;
  faviconUrl: string | null;
  ogImageUrl: string | null;
  twitterImageUrl: string | null;
}

export const cmsService = {
  // Pages
  getAllPages: async (params?: any) => {
    const res = await api.get("/cms/pages", { params });
    return res.data;
  },
  getPageById: async (id: string) => {
    const res = await api.get(`/cms/pages/${id}`);
    return res.data;
  },
  createPage: async (data: any) => {
    const res = await api.post("/cms/pages", data);
    return res.data;
  },
  updatePage: async (id: string, data: any) => {
    const res = await api.put(`/cms/pages/${id}`, data);
    return res.data;
  },
  deletePage: async (id: string) => {
    const res = await api.delete(`/cms/pages/${id}`);
    return res.data;
  },
  togglePublish: async (id: string) => {
    const res = await api.patch(`/cms/pages/${id}/publish`);
    return res.data;
  },

  // SEO
  getAllSeo: async (params?: any) => {
    const res = await api.get("/cms/seo", { params });
    return res.data;
  },
  getSeoById: async (id: string) => {
    const res = await api.get(`/cms/seo/${id}`);
    return res.data;
  },
  createSeo: async (data: any) => {
    const res = await api.post("/cms/seo", data);
    return res.data;
  },
  updateSeo: async (id: string, data: any) => {
    const res = await api.put(`/cms/seo/${id}`, data);
    return res.data;
  },
  deleteSeo: async (id: string) => {
    const res = await api.delete(`/cms/seo/${id}`);
    return res.data;
  }
};
