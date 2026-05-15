# OTT Platform Setup Guide

This document provides a comprehensive guide for setting up the OTT Platform demo/portfolio project.

## Project Overview

A scalable OTT (Over-The-Top) platform built with:
- **Frontend**: Next.js (User & Admin)
- **Backend**: Express.js (User & Admin)
- **Database**: PostgreSQL
- **Cache**: Redis
- **ORM**: Prisma

## Architecture

### Database Schema

The database is designed with scalability and flexibility in mind:

#### Core Tables

1. **Users & Authentication**
   - `users` - User accounts with authentication
   - `user_profiles` - Extended user information

2. **Content Management**
   - `series` - Main content (Series, Movies, Documentaries)
   - `episodes` - Individual episodes within series

3. **Categories & Ordering**
   - `categories` - Content categories (Top Picks, Recommended, etc.)
   - `series_categories` - Join table with ordering (series in category, category order)

4. **Subscriptions**
   - `subscription_plans` - Available subscription tiers
   - `user_subscriptions` - User subscription status

5. **User Activity**
   - `watch_history` - Track what users watch
   - `watch_list` - User's saved content

### Key Design Decisions

1. **Join Tables for Ordering**
   - `series_categories` table allows flexible ordering of series within categories
   - Each category has an `order` field for positioning on homepage
   - Each series-category relationship has an `order` field for ordering within that category

2. **Scalable Structure**
   - JSON fields for flexible data (genres, tags, cast, crew)
   - Separate episodes table for series
   - Soft deletes with `deletedAt` timestamps
   - Indexed fields for performance

3. **Subscription System**
   - Multiple plan types (Free, Monthly, Yearly)
   - Active status tracking
   - Auto-renew functionality

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 18+ (for local development)
- PostgreSQL 14+ (if not using Docker)

### Setup Steps

1. **Clone and Setup**
   ```bash
   cd /home/dev/projects/freelance
   cd executer
   chmod +x setup.sh
   ./setup.sh
   ```

2. **Start Services**
   ```bash
   docker-compose up -d
   ```

3. **Run Database Migrations**
   ```bash
   cd ../user-backend
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

4. **Start Backend Services**
   ```bash
   # User Backend
   cd user-backend
   npm install
   npm run dev

   # Admin Backend (in another terminal)
   cd admin-backend
   npm install
   npm run dev
   ```

## Access Points

After starting the services:

| Service | URL | Description |
|---------|-----|-------------|
| User Backend API | http://localhost:8002 | User-facing API |
| Admin Backend API | http://localhost:8003 | Admin panel API |
| PgAdmin | http://localhost:5480 | Database management UI |
| Redis Insight | http://localhost:5540 | Redis management UI |

## Database Schema Details

### Users Table
```sql
users (
  id, email, password, phone, role, 
  is_active, email_verified, last_login_at,
  created_at, updated_at, deleted_at
)
```

### Series Table
```sql
series (
  id, title, slug, description, poster_url, backdrop_url,
  trailer_url, release_date, status, type, language,
  duration, rating, rating_count, genres, tags, cast, crew,
  metadata, age_rating, is_premium, is_featured,
  created_at, updated_at, deleted_at
)
```

### Categories & Ordering
```sql
categories (
  id, name, slug, type, description, 
  is_active, order, icon_url, metadata,
  created_at, updated_at
)

series_categories (
  id, series_id, category_id, order, added_at
)
```

This design allows:
1. **Category Ordering**: Categories display in a specific order on homepage
2. **Series-in-Category Ordering**: Series display in a specific order within each category
3. **Flexible Assignment**: Series can belong to multiple categories with different orders

## Environment Variables

### User Backend (.env)
```env
DATABASE_URL=postgresql://postgres:ott_db_pass@localhost:5432/ott_platform_db
REDIS_URL=redis://:ott_redis_pass@localhost:6379
JWT_SECRET=ott_jwt_secret_change_in_production
JWT_REFRESH_SECRET=ott_refresh_secret_change_in_production
PORT=8002
NODE_ENV=development
```

### Admin Backend (.env)
```env
DATABASE_URL=postgresql://postgres:ott_db_pass@localhost:5432/ott_platform_db
REDIS_URL=redis://:ott_redis_pass@localhost:6379
JWT_SECRET=ott_jwt_secret_change_in_production
ADMIN_SECRET=ott_admin_secret_change_in_production
PORT=8003
NODE_ENV=development
```

## Admin Panel Features

The admin panel will allow:
- Upload and manage content (Series, Episodes)
- Manage categories and their ordering
- Manage series positioning within categories
- Create and edit subscription plans
- View user analytics and activity
- Manage user subscriptions

## User Frontend Features

- Browse content by categories
- Search and filter content
- View series and episodes
- Add to watch list
- Track watch history
- Subscribe to premium plans
- Profile management

## Next Steps

1. **Implement Admin Backend API** - CRUD operations for content, categories
2. **Implement User Backend API** - Authentication, content browsing, watch history
3. **Build Admin Frontend** - Content management UI
4. **Build User Frontend** - Netflix-style UI with content browsing
5. **Video Integration** - Add video streaming capabilities
6. **Payment Integration** - Add subscription payment flow

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL container is running: `docker ps`
- Check database credentials in .env file
- Verify network connectivity between containers

### Redis Connection Issues
- Ensure Redis container is running: `docker ps`
- Check Redis password in .env file

### Port Conflicts
- Change port mappings in docker-compose.yml if needed
- Update .env files accordingly

## Production Deployment

1. Update `.env.prod` with production values
2. Use `docker-compose.prod.yml` for production deployment
3. Ensure all secrets are properly set
4. Configure SSL/TLS certificates
5. Set up proper backups and monitoring

## Contact & Support

For questions or issues, please refer to the project documentation or contact the development team.
