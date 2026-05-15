# OTT Platform - Demo/Portfolio Project

A scalable, clean-architecture OTT (Over-The-Top) streaming platform demo built for showcasing agency capabilities.

## 🎯 Project Purpose

This project serves as a **portfolio demo** demonstrating:
- Scalable database architecture with PostgreSQL
- Clean UI design (Netflix-style)
- Efficient content management system
- Subscription and user management
- Category ordering and content organization

## 🏗️ Architecture

### Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Next.js 16 (User & Admin) |
| Backend | Express.js |
| Database | PostgreSQL 14 |
| ORM | Prisma |
| Cache | Redis |
| Authentication | JWT with Redis |

### Project Structure

```
freelance/
├── executer/              # Docker & setup files
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   └── setup.sh
├── user-backend/          # User-facing API
│   ├── src/
│   │   ├── prisma/       # Database schema
│   │   ├── controllers/  # API controllers
│   │   ├── services/    # Business logic
│   │   ├── middlewares/  # Auth & validation
│   │   └── routes/       # API routes
│   └── package.json
├── admin-backend/         # Admin panel API
├── user-frontend/         # User-facing app (Next.js)
└── admin-frontend/        # Admin panel (Next.js)
```

## 📊 Database Design

### Key Features

1. **Series & Episodes** - Hierarchical content structure
2. **Categories with Ordering** - Flexible content organization
3. **Join Tables** - Scalable relationships
4. **Subscription System** - Multiple plan tiers
5. **User Activity** - Watch history & watch list

### Category Ordering System

The database uses a smart ordering system:

```
Categories (Homepage Order):
├── Top Picks (order: 1)
├── Recommended (order: 2)
├── New Releases (order: 3)
└── Trending (order: 4)

Within each category, series have their own order:
Top Picks Category:
├── Series A (order: 1) - appears first
├── Series B (order: 2) - appears second
└── Series C (order: 3) - appears third
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+

### Setup

```bash
# Navigate to executer directory
cd executer

# Run setup script
chmod +x setup.sh
./setup.sh

# Start services
docker-compose up -d

# Run database migrations (in new terminal)
cd ../user-backend
npm run db:generate
npm run db:push
npm run db:seed

# Start backends
npm run dev  # User backend
# (In another terminal) cd ../admin-backend && npm run dev
```

### Access Points

| Service | URL | Credentials |
|---------|-----|-------------|
| User Backend API | http://localhost:8002 | - |
| Admin Backend API | http://localhost:8003 | - |
| PgAdmin (DB UI) | http://localhost:5480 | admin@ott-platform.com / ott_pg_pass |
| Redis Insight | http://localhost:5540 | - |

## 📁 Database Schema

### Main Tables

| Table | Purpose |
|-------|---------|
| `users` | User authentication |
| `user_profiles` | Extended user info |
| `series` | Main content (Series/Movies) |
| `episodes` | Individual episodes |
| `categories` | Content categories |
| `series_categories` | Category-series relationships with ordering |
| `subscription_plans` | Subscription tiers |
| `user_subscriptions` | User subscription status |
| `watch_history` | User viewing history |
| `watch_list` | User saved content |

See [DATABASE_SCHEMA.md](DATABASE_SCHEMA.md) for detailed schema diagrams.

## 🎨 UI Components

### User Frontend
- Netflix-style homepage
- Category carousels with horizontal scroll
- Series detail pages
- Episode player
- Watch list
- Subscription plans

### Admin Frontend
- Dashboard with analytics
- Series & episode management
- Category management with ordering
- User management
- Subscription plan management

## 🔐 Authentication

- JWT-based authentication
- Access token: 15 minutes
- Refresh token: 7 days
- Redis-based session management
- Token rotation for security

## 💳 Subscription System

### Available Plans

| Plan | Price | Features |
|------|-------|----------|
| Free | ₹0 | Limited content, Ads, Standard quality |
| Monthly | ₹199 | All content, No ads, HD, 4 devices |
| Yearly | ₹1,999 | All content, No ads, 4K, Offline downloads |

## 📈 Scalability Features

1. **Database Indexes** - Optimized queries for performance
2. **Redis Caching** - Fast session management
3. **Soft Deletes** - Data integrity with timestamps
4. **JSON Fields** - Flexible metadata storage
5. **Pagination Ready** - Efficient data loading
6. **CDN Ready** - Video storage architecture

## 📝 API Endpoints (Planned)

### User API
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/categories
GET    /api/v1/series
GET    /api/v1/series/:slug
GET    /api/v1/series/:slug/episodes
POST   /api/v1/subscription/subscribe
GET    /api/v1/watch-history
POST   /api/v1/watch-list
```

### Admin API
```
POST   /api/v1/admin/series
PUT    /api/v1/admin/series/:id
DELETE /api/v1/admin/series/:id
POST   /api/v1/admin/episodes
PUT    /api/v1/admin/episodes/:id
PUT    /api/v1/admin/categories/:id/order
PUT    /api/v1/admin/categories/:id/series/order
```

## 🔧 Configuration

Environment variables are managed via `.env` files:

**User Backend**:
```
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
JWT_SECRET=...
PORT=8002
```

**Admin Backend**:
```
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
ADMIN_SECRET=...
PORT=8003
```

## 📚 Documentation

- [OTT_SETUP.md](OTT_SETUP.md) - Complete setup guide
- [DATABASE_SCHEMA.md](DATABASE_SCHEMA.md) - Database diagrams and queries
- [schema.prisma](user-backend/src/prisma/schema.prisma) - Full database schema

## 🎯 Use Cases

This project demonstrates:

1. **Scalable Architecture** - Clean separation of concerns
2. **Database Design** - Complex relationships with join tables
3. **User Management** - Complete auth flow
4. **Content Organization** - Flexible category ordering
5. **Subscription System** - Multi-tier pricing
6. **Performance** - Indexed queries and caching

## 🚀 Future Enhancements

- [ ] Video streaming integration (HLS/DASH)
- [ ] Payment gateway integration (Razorpay/Stripe)
- [ ] Recommendation engine
- [ ] Multi-language support
- [ ] Social features (reviews, ratings)
- [ ] Download for offline viewing

## 📞 Support

For questions or support regarding this demo project, please refer to the setup documentation.

---

**Built with ❤️ for demonstrating scalable OTT platform architecture**
