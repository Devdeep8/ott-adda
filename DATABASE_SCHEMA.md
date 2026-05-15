# OTT Platform Database Schema

## Entity Relationship Diagram

```
┌─────────────────────┐       ┌─────────────────────┐
│      Users          │       │  SubscriptionPlans  │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)            │       │ id (PK)            │
│ email              │       │ name               │
│ password           │       │ type               │
│ phone              │       │ price              │
│ role               │       │ duration_days      │
│ is_active          │       │ features (JSON)    │
│ email_verified     │       └─────────────────────┘
│ last_login_at      │                │
│ created_at         │                │
│ updated_at         │                │
└─────────────────────┘                │
          │                          │
          │ 1                        │ 1
          │                          │
          │                          │
┌─────────────────────┐       ┌─────────────────────┐
│   UserProfile       │       │ UserSubscriptions   │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)            │◄──────│ id (PK)            │
│ user_id (FK)       │       │ user_id (FK)       │
│ first_name         │       │ plan_id (FK)       │
│ last_name          │       │ status             │
│ display_name       │       │ start_date         │
│ avatar_url         │       │ end_date           │
│ date_of_birth      │       │ amount             │
│ gender             │       │ auto_renew         │
│ language           │       └─────────────────────┘
│ country            │
│ preferences (JSON) │
└─────────────────────┘


┌─────────────────────┐
│      Series         │
├─────────────────────┤
│ id (PK)            │
│ title              │
│ slug               │
│ description        │
│ poster_url         │
│ backdrop_url       │
│ trailer_url        │
│ release_date       │
│ status             │
│ type               │
│ language           │
│ duration           │
│ rating             │
│ rating_count       │
│ genres (JSON)      │
│ tags (JSON)        │
│ cast (JSON)        │
│ crew (JSON)        │
│ metadata (JSON)    │
│ age_rating         │
│ is_premium         │
│ is_featured        │
│ created_at         │
│ updated_at         │
└─────────────────────┘
          │
          │ 1
          │
          │ N
┌─────────────────────┐       ┌─────────────────────┐
│     Episodes        │       │   SeriesCategories  │◄─────────────┐
├─────────────────────┤       ├─────────────────────┤              │
│ id (PK)            │       │ id (PK)            │              │
│ series_id (FK)     │◄──────│ series_id (FK)     │              │
│ season             │       │ category_id (FK)   │              │
│ episode_number     │       │ order              │              │
│ title              │       │ added_at           │              │
│ description        │       └─────────────────────┘              │
│ duration           │                │                            │
│ thumbnail_url      │                │ N                          │
│ video_url          │                │                            │
│ video_type         │                │ 1                          │
│ status             │                │                            │
│ release_date       │                │                            │
└─────────────────────┘       ┌─────────────────────┐              │
                             │     Categories      │              │
                             ├─────────────────────┤              │
                             │ id (PK)            │              │
                             │ name               │              │
                             │ slug               │              │
                             │ type               │              │
                             │ description        │              │
                             │ is_active          │              │
                             │ order              │              │
                             │ icon_url           │              │
                             │ metadata (JSON)    │              │
                             └─────────────────────┘              │
                                                                 │
                                                                 │ N
┌─────────────────────┐       ┌─────────────────────┐              │
│   WatchHistory      │       │   WatchListItem     │              │
├─────────────────────┤       ├─────────────────────┤              │
│ id (PK)            │       │ id (PK)            │              │
│ user_id (FK)       │       │ user_id (FK)       │              │
│ series_id (FK)     │       │ series_id (FK)     │              │
│ episode_id (FK)    │       │ added_at           │              │
│ watched_at         │       └─────────────────────┘              │
│ watch_duration     │                │                            │
│ completed          │                │ N                          │
└─────────────────────┘                │                            │
          │ N                          │                            │
          │                            │ 1                          │
          │                            │                            │
          └────────────────────────────┴────────────────────────────┘
                                    │
                                    │
                              ┌─────────────────────┐
                              │      Users          │
                              └─────────────────────┘
```

## Key Relationships

1. **User ↔ UserProfile**: One-to-one
2. **User ↔ UserSubscription**: One-to-one (active subscription)
3. **UserSubscription ↔ SubscriptionPlan**: Many-to-one
4. **Series ↔ Episodes**: One-to-many
5. **Series ↔ SeriesCategory ↔ Category**: Many-to-many with ordering
6. **User ↔ WatchHistory**: One-to-many
7. **User ↔ WatchListItem**: One-to-many

## Ordering System

### Category Ordering (Homepage Order)
```
categories.order
├── 1: Top Picks (appears first on homepage)
├── 2: Recommended (appears second)
├── 3: New Releases (appears third)
└── ...
```

### Series-in-Category Ordering
```
series_categories (for category_id = 1 "Top Picks")
├── series_id = 1, order = 1 (appears first in Top Picks)
├── series_id = 5, order = 2 (appears second in Top Picks)
├── series_id = 2, order = 3 (appears third in Top Picks)
└── ...
```

This allows:
1. Admin to set category order for homepage layout
2. Admin to set series order within each category
3. Series can appear in multiple categories with different positions

## Indexes for Performance

```sql
-- Users
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_is_active ON users(is_active);

-- Series
CREATE INDEX idx_series_slug ON series(slug);
CREATE INDEX idx_series_status ON series(status);
CREATE INDEX idx_series_is_premium ON series(is_premium);
CREATE INDEX idx_series_is_featured ON series(is_featured);
CREATE INDEX idx_series_release_date ON series(release_date);

-- Episodes
CREATE INDEX idx_episodes_series_id ON episodes(series_id);
CREATE INDEX idx_episodes_status ON episodes(status);
CREATE UNIQUE INDEX idx_episodes_series_episode ON episodes(series_id, episode_number);

-- Categories
CREATE INDEX idx_categories_is_active ON categories(is_active);
CREATE INDEX idx_categories_order ON categories(order);

-- SeriesCategories (Join Table)
CREATE INDEX idx_series_categories_category_id ON series_categories(category_id);
CREATE INDEX idx_series_categories_series_id ON series_categories(series_id);
CREATE UNIQUE INDEX idx_series_categories_unique ON series_categories(series_id, category_id);

-- WatchHistory
CREATE INDEX idx_watch_history_user_id ON watch_history(user_id);
CREATE INDEX idx_watch_history_series_id ON watch_history(series_id);
CREATE INDEX idx_watch_history_watched_at ON watch_history(watched_at);
```

## Sample Query: Get Content for Category

```sql
SELECT 
  s.id, s.title, s.slug, s.description, s.poster_url, s.rating,
  sc.order as position_in_category
FROM series s
INNER JOIN series_categories sc ON s.id = sc.series_id
INNER JOIN categories c ON sc.category_id = c.id
WHERE 
  c.slug = 'top-picks' 
  AND c.is_active = true 
  AND s.status = 'PUBLISHED'
ORDER BY sc.order ASC
LIMIT 10;
```

## Sample Query: Get Series with Episodes

```sql
SELECT 
  s.id, s.title, s.slug, s.description, s.poster_url,
  e.id as episode_id, e.episode_number, e.title, e.duration
FROM series s
LEFT JOIN episodes e ON s.id = e.series_id AND e.status = 'PUBLISHED'
WHERE s.slug = 'the-last-frontier' AND s.status = 'PUBLISHED'
ORDER BY e.episode_number ASC;
```

## Sample Query: Get User's Watch History

```sql
SELECT 
  wh.id, wh.watched_at, wh.watch_duration, wh.completed,
  s.title, s.slug, s.poster_url, s.rating,
  e.episode_number, e.title as episode_title
FROM watch_history wh
INNER JOIN series s ON wh.series_id = s.id
LEFT JOIN episodes e ON wh.episode_id = e.id
WHERE wh.user_id = 123
ORDER BY wh.watched_at DESC
LIMIT 20;
```
