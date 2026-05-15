# OTT Platform - Complete Workflow Documentation

## 1. System Overview

The **OTT Platform** is a scalable video streaming service designed with modern architecture. It provides users with seamless content discovery and playback, alongside powerful administrative tools for content and category management.

### Key Applications:
- **User Application (Next.js + Express)**: Client-facing streaming app (like Netflix).
- **Admin Application (Next.js + Express)**: Content management, analytics, and billing dashboard.
- **Background Services**: Redis caching, video transcoding (future), email notifications.

---

## 2. End-to-End User Workflows

### 2.1. Authentication & Onboarding
**User Journey:**
1. **Registration**: User signs up with email/password or OAuth.
2. **Profile Creation**: User is prompted to set up their `user_profiles` (avatar, preferences, name).
3. **Authentication**: JWT token and Refresh token are issued and stored securely.
4. **Login**: User logs in. The backend validates credentials and checks for an active subscription in `user_subscriptions`.

### 2.2. Content Discovery (Homepage & Categories)
**User Journey:**
1. **Homepage Load**:
   - Backend fetches `categories` sorted by `order`.
   - For each category, backend fetches `series` linked via `series_categories`, ordered by `series_categories.order`.
   - Top Picks, Trending, and Recommendations are dynamically loaded.
2. **Search & Filter**: User searches by title, genre, or cast (utilizing the flexible JSON fields).
3. **Series Detail Page**: User clicks a series to view metadata, trailers, cast info, and a list of `episodes`.

### 2.3. Video Playback & Tracking
**User Journey:**
1. **Play Episode**: User clicks play.
2. **Subscription Check**: Backend verifies if the content `is_premium` and if the user has an active `user_subscriptions`.
3. **Streaming**: Client starts fetching the video stream (HLS/DASH).
4. **Watch History Tracking**: 
   - A `watch_history` record is created.
   - Periodic pings update the `watch_duration` so users can resume where they left off.
   - When the user finishes the video, `completed` is marked `true`.

### 2.4. Watchlist Management
**User Journey:**
1. **Add to Watchlist**: User clicks the "+" icon on a series/movie.
2. **Database Update**: A record is created in the `watch_list` table linking the `user_id` and `series_id`.
3. **My List Page**: User can view their personalized list ordered by `added_at`.

### 2.5. Subscription Workflow
**User Journey:**
1. **View Plans**: User visits the pricing page. The system fetches available `subscription_plans`.
2. **Select Plan**: User chooses a plan (e.g., Premium Monthly).
3. **Payment**: User completes checkout via a Payment Gateway (e.g., Stripe/Razorpay).
4. **Activation**: Backend updates `user_subscriptions` with `start_date`, `end_date`, and `status = active`.

---

## 3. End-to-End Admin Workflows

### 3.1. Content Ingestion (Series & Episodes)
**Admin Journey:**
1. **Create Series**: Admin enters metadata (Title, Description, Genres, Cast, Poster/Backdrop URLs).
2. **Upload Episodes**: Admin adds episodes to the series, defining season number, episode number, and video URL.
3. **Publishing**: Admin changes status from `DRAFT` to `PUBLISHED`. The content is now live.

### 3.2. Category & Ordering Management
**Admin Journey:**
1. **Manage Categories**: Admin creates categories (e.g., "Trending Now", "Action Movies").
2. **Homepage Layout**: Admin reorders categories (updating the `categories.order` field).
3. **Series Placement**: Admin assigns series to a category and sets the `series_categories.order` to dictate exactly where the series appears within that row on the homepage.

### 3.3. User & Subscription Management
**Admin Journey:**
1. **User Analytics**: Admin views active users, recently watched content, and engagement metrics.
2. **Subscription Oversight**: Admin tracks revenue, active subscriptions, and cancellations.
3. **Support Operations**: Admin can manually grant/revoke subscriptions or reset passwords for users.

---

## 4. Background & Automated Workflows

### 4.1. Auto-Renewal Processing
- A scheduled CRON job runs daily to find `user_subscriptions` expiring soon with `auto_renew = true`.
- Triggers background payment processing and extends the `end_date`.

### 4.2. Analytics & Reporting
- Nightly jobs aggregate `watch_history` to update the `series.rating_count` or determine "Trending" content automatically.

### 4.3. Cache Invalidation
- Redis caching is used for the homepage layout (Categories and Series Orders).
- When an admin updates a category order, the backend emits an event that flushes the specific Redis cache, ensuring the frontend is instantly updated without heavy database querying.

---

## 5. Next Steps for Implementation

1. **API Development**: Scaffold the Express endpoints matching the workflows above.
2. **Payment Gateway Setup**: Integrate Stripe or Razorpay webhook flows for seamless subscription handling.
3. **Video Transcoding Engine**: Set up AWS MediaConvert or similar to process uploaded videos into HLS/DASH formats for adaptive bitrate streaming.
