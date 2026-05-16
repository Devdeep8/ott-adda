# OTT Platform Docker Setup

Complete Docker configuration for the OTT (Over-The-Top) streaming platform.

## 📋 Overview

The docker setup includes:
- **PostgreSQL 14** - Database
- **Redis 6.2** - Session/cache storage
- **User Backend** (Node.js) - User-facing API
- **Admin Backend** (Node.js) - Admin API
- **User Frontend** (Next.js) - Streaming UI
- **Admin Frontend** (Next.js) - Admin dashboard
- **Nginx** (Production) - Reverse proxy & load balancer
- **Development Tools** - pgAdmin, Redis Insight

## 🚀 Quick Start (Development)

### 1. Initial Setup

From the `executer` folder, run the setup script:

```bash
cd executer
bash setup.sh
```

This creates all necessary `.env` files for both backends and frontends.

### 2. Start Services

```bash
docker-compose up -d
```

This starts all services in development mode with:
- Hot reloading for backends (npm run dev)
- Hot reloading for frontends (npm run dev)
- Volume mounts for live code editing

### 3. Initialize Database (One-Time)

```bash
# Generate Prisma client and migrate database
docker-compose exec user-backend npm run db:push
docker-compose exec user-backend npm run db:seed

docker-compose exec admin-backend npm run db:push
```

### 4. Access Services

| Service | URL | Credentials |
|---------|-----|-------------|
| **User Frontend** | http://localhost:3000 | — |
| **Admin Frontend** | http://localhost:3001 | Admin user |
| **User API** | http://localhost:8002 | — |
| **Admin API** | http://localhost:8003 | Admin token |
| **PgAdmin** | http://localhost:5480 | admin@ott-platform.com / ott_pg_pass |
| **Redis Insight** | http://localhost:5540 | — |

### 5. Database Access

```
Host: localhost:5432
User: postgres
Password: ott_db_pass
Database: ott_platform_db
```

## 📦 Docker Files Overview

### Development Compose File

**File:** `docker-compose.yml`

Services:
- `database` - PostgreSQL with health checks
- `redis` - Redis with authentication
- `redis-insight` - Redis monitoring UI
- `pg-admin` - PostgreSQL management UI
- `user-backend` - Node.js dev server
- `admin-backend` - Node.js dev server
- `user-frontend` - Next.js dev server (port 3000)
- `admin-frontend` - Next.js dev server (port 3001)

Features:
- Volume mounts for live code changes
- Health checks for database dependencies
- Environment variables from .env files
- Proper service ordering

### Production Compose File

**File:** `docker-compose.prod.yml`

Services:
- `database` - PostgreSQL (no external port)
- `redis` - Redis (no external port)
- `user-backend` - Production build
- `admin-backend` - Production build
- `user-frontend` - Production build
- `admin-frontend` - Production build
- `nginx` - Reverse proxy & SSL termination

Features:
- No external database/cache ports
- Production-optimized builds
- Nginx reverse proxy
- SSL/TLS support (configure certificates)
- No development tools

### Dockerfiles

1. **user-backend/Dockerfile**
   - Multi-stage: builder → production
   - Prisma schema generation
   - Environment: Node.js 22-alpine
   - Entry: tini (PID 1 handling)

2. **admin-backend/Dockerfile**
   - Same structure as user-backend
   - Port 8003
   - Prisma client generation

3. **admin-frontend/Dockerfile**
   - Multi-stage: base → deps → build → final
   - Next.js build optimization
   - Port 4001
   - Standalone server

4. **user-frontend/Dockerfile**
   - Multi-stage: base → deps → builder → runner
   - Next.js 14+ standalone
   - Port 3000
   - NextJS user (non-root)

## 🔧 Environment Variables

### Backend Services

**user-backend/.env:**
```
DATABASE_URL=postgresql://postgres:ott_db_pass@database:5432/ott_platform_db
REDIS_URL=redis://:ott_redis_pass@redis:6379
JWT_SECRET=ott_jwt_secret_change_in_production
JWT_REFRESH_SECRET=ott_refresh_secret_change_in_production
PORT=8002
NODE_ENV=development
VIDEO_STORAGE_PATH=./uploads
```

**admin-backend/.env:**
```
DATABASE_URL=postgresql://postgres:ott_db_pass@database:5432/ott_platform_db
REDIS_URL=redis://:ott_redis_pass@redis:6379
JWT_SECRET=ott_jwt_secret_change_in_production
ADMIN_SECRET=ott_admin_secret_change_in_production
PORT=8003
NODE_ENV=development
MAX_FILE_SIZE=104857600
```

### Frontend Services

**user-frontend/.env.local:**
```
NEXT_PUBLIC_API_URL=http://localhost:8002
```

**admin-frontend/.env.local:**
```
NEXT_PUBLIC_ADMIN_API_URL=http://localhost:8003
```

### Production

**executer/.env.prod:**
```
DB_USER=ott_admin
DB_PASSWORD=change_this_strong_password
DB_NAME=ott_platform_prod
REDIS_PASSWORD=change_this_redis_password
JWT_SECRET=change_this_jwt_secret
JWT_REFRESH_SECRET=change_this_jwt_refresh_secret
ADMIN_SECRET=change_this_admin_secret
```

## 📊 Network Architecture

```
Development Setup:
┌─────────────────────────────────────────────────────┐
│              ott-platform-net (bridge)              │
├─────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │
│  │  PostgreSQL  │  │    Redis     │  │  Redis UI  │ │
│  │   :5432      │  │   :6379      │  │   :5540    │ │
│  └──────────────┘  └──────────────┘  └────────────┘ │
│  ┌──────────────┐  ┌──────────────┐                  │
│  │ User Backend │  │Admin Backend │                  │
│  │    :8002     │  │    :8003     │                  │
│  └──────────────┘  └──────────────┘                  │
│  ┌──────────────┐  ┌──────────────┐                  │
│  │User Frontend │  │Admin Frontend│                  │
│  │    :3000     │  │    :3001     │                  │
│  └──────────────┘  └──────────────┘                  │
│  ┌──────────────┐                                     │
│  │   PgAdmin    │                                     │
│  │    :5480     │                                     │
│  └──────────────┘                                     │
└─────────────────────────────────────────────────────┘

Production Setup (with Nginx):
┌─────────────────────────────────────────────────────┐
│              ott-platform-net (bridge)              │
├─────────────────────────────────────────────────────┤
│                    ┌──────────┐                       │
│                    │  Nginx   │ (80/443)              │
│                    └────┬─────┘                       │
│        ┌───────────────┼───────────────┐              │
│        │               │               │              │
│   ┌────▼──────┐ ┌─────▼─────┐ ┌──────▼────┐         │
│   │ PostgreSQL│ │   Redis   │ │ Backends  │         │
│   └───────────┘ └───────────┘ │ Frontends │         │
│                                └──────────┘         │
└─────────────────────────────────────────────────────┘
```

## 🛠️ Common Commands

### View logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f user-backend
docker-compose logs -f admin-frontend
```

### Access containers
```bash
# Backend shell
docker-compose exec user-backend sh

# Database psql
docker-compose exec database psql -U postgres -d ott_platform_db

# Redis CLI
docker-compose exec redis redis-cli -a ott_redis_pass
```

### Database operations
```bash
# Push schema changes
docker-compose exec user-backend npm run db:push

# Seed database
docker-compose exec user-backend npm run db:seed

# Generate Prisma client
docker-compose exec user-backend npx prisma generate
```

### Build images
```bash
# Rebuild all
docker-compose build

# Rebuild specific service
docker-compose build user-backend
docker-compose build admin-frontend
```

### Stop services
```bash
# Stop all (preserve volumes)
docker-compose down

# Remove everything (clear data)
docker-compose down -v
```

## 🔐 Production Deployment

### Prerequisites
- Update `.env.prod` with production credentials
- Generate SSL certificates (let's encrypt recommended)
- Configure domain DNS records

### SSL Certificate Setup
```bash
# Place certificates in executer/ssl/
mkdir -p executer/ssl
# Copy your cert and key files
cp /path/to/cert.pem executer/ssl/cert.pem
cp /path/to/key.pem executer/ssl/key.pem
```

### Update Nginx Configuration
Uncomment and configure the SSL sections in `nginx.conf`:
- Replace domain names
- Update SSL certificate paths
- Configure API rate limiting as needed

### Deploy
```bash
cd executer
docker-compose -f docker-compose.prod.yml up -d
```

## 📈 Monitoring

### Database
- **pgAdmin:** http://localhost:5480
- User: admin@ott-platform.com
- Password: ott_pg_pass

### Redis
- **Redis Insight:** http://localhost:5540
- URL: redis://redis:6379
- Password: ott_redis_pass

### Logs
```bash
docker-compose logs -f --tail=100
```

## 🐛 Troubleshooting

### Services won't start
```bash
# Check logs
docker-compose logs user-backend

# Rebuild without cache
docker-compose build --no-cache user-backend
docker-compose up -d user-backend
```

### Database connection errors
```bash
# Wait for PostgreSQL to be healthy
docker-compose logs database

# Manually run migrations
docker-compose exec user-backend npm run db:push
```

### Port conflicts
```bash
# Find process using port
lsof -i :3000  # Check if port 3000 is in use

# Stop conflicting services
docker-compose down
```

### Redis connection issues
```bash
# Test Redis connection
docker-compose exec redis redis-cli -a ott_redis_pass ping

# Monitor Redis commands
docker-compose exec redis redis-cli -a ott_redis_pass monitor
```

## 📝 Notes

- Development uses hot reload (changes reflected immediately)
- Production uses optimized builds with no external debugging ports
- All services communicate via internal Docker network
- Volumes persist data between restarts
- Health checks ensure proper service startup order
- SSL/TLS recommended for production

## 🔗 Related Documentation

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment/docker)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [PostgreSQL Docker Documentation](https://hub.docker.com/_/postgres)
- [Nginx Docker Documentation](https://hub.docker.com/_/nginx)
- [Prisma Deployment Documentation](https://www.prisma.io/docs/reference/database-reference/connection-urls)
