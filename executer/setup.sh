#!/bin/bash

# OTT Platform Setup Script
# This script will set up the complete OTT platform environment

set -e

echo "=================================="
echo "OTT Platform Setup Script"
echo "=================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if backend .env files exist
if [ ! -f ../user-backend/.env ]; then
    echo -e "${YELLOW}Creating user-backend .env file...${NC}"
    cat > ../user-backend/.env << 'ENVFILE'
# Database
DATABASE_URL=postgresql://postgres:ott_db_pass@database:5432/ott_platform_db

# Redis
REDIS_URL=redis://:ott_redis_pass@redis:6379

# JWT
JWT_SECRET=ott_jwt_secret_change_in_production
JWT_REFRESH_SECRET=ott_refresh_secret_change_in_production

# App
PORT=8002
NODE_ENV=development

# Video Storage
VIDEO_STORAGE_PATH=./uploads

# Razorpay (Optional)
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
ENVFILE
    echo -e "${GREEN}✓ Created user-backend/.env${NC}"
fi

if [ ! -f ../admin-backend/.env ]; then
    echo -e "${YELLOW}Creating admin-backend .env file...${NC}"
    cat > ../admin-backend/.env << 'ENVFILE'
# Database
DATABASE_URL=postgresql://postgres:ott_db_pass@database:5432/ott_platform_db

# Redis
REDIS_URL=redis://:ott_redis_pass@redis:6379

# JWT
JWT_SECRET=ott_jwt_secret_change_in_production
ADMIN_SECRET=ott_admin_secret_change_in_production

# App
PORT=8003
NODE_ENV=development

# File Upload
MAX_FILE_SIZE=104857600
ENVFILE
    echo -e "${GREEN}✓ Created admin-backend/.env${NC}"
fi

# Check if frontend .env.local files exist
if [ ! -f ../user-frontend/.env.local ]; then
    echo -e "${YELLOW}Creating user-frontend .env.local file...${NC}"
    cat > ../user-frontend/.env.local << 'ENVFILE'
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8002

# Analytics (Optional)
# NEXT_PUBLIC_ANALYTICS_ID=
ENVFILE
    echo -e "${GREEN}✓ Created user-frontend/.env.local${NC}"
fi

if [ ! -f ../admin-frontend/.env.local ]; then
    echo -e "${YELLOW}Creating admin-frontend .env.local file...${NC}"
    cat > ../admin-frontend/.env.local << 'ENVFILE'
# API Configuration
NEXT_PUBLIC_ADMIN_API_URL=http://localhost:8003

# Analytics (Optional)
# NEXT_PUBLIC_ANALYTICS_ID=
ENVFILE
    echo -e "${GREEN}✓ Created admin-frontend/.env.local${NC}"
fi

# Create production .env file
if [ ! -f .env.prod ]; then
    echo -e "${YELLOW}Creating production .env file...${NC}"
    cat > .env.prod << 'ENVFILE'
# Database
DB_USER=ott_admin
DB_PASSWORD=change_this_strong_password
DB_NAME=ott_platform_prod

# Redis
REDIS_PASSWORD=change_this_redis_password

# JWT
JWT_SECRET=change_this_jwt_secret
JWT_REFRESH_SECRET=change_this_jwt_refresh_secret
ADMIN_SECRET=change_this_admin_secret
ENVFILE
    echo -e "${GREEN}✓ Created .env.prod${NC}"
fi

echo ""
echo -e "${BLUE}=================================="
echo "Environment Setup Complete!"
echo "==================================${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo ""
echo -e "${BLUE}1. Start all services:${NC}"
echo "   docker-compose up -d"
echo ""
echo -e "${BLUE}2. Initialize database (one-time):${NC}"
echo "   docker-compose exec user-backend npm run db:push"
echo "   docker-compose exec user-backend npm run db:seed"
echo "   docker-compose exec admin-backend npm run db:push"
echo ""
echo -e "${BLUE}3. Access the services:${NC}"
echo "   - User Frontend:      http://localhost:3000"
echo "   - Admin Frontend:     http://localhost:3001"
echo "   - User Backend:       http://localhost:8002"
echo "   - Admin Backend:      http://localhost:8003"
echo "   - PgAdmin:            http://localhost:5480 (admin@ott-platform.com / ott_pg_pass)"
echo "   - Redis Insight:      http://localhost:5540"
echo ""
echo -e "${YELLOW}Credentials:${NC}"
echo "   - Database: postgres / ott_db_pass"
echo "   - Redis: (password: ott_redis_pass)"
echo ""
echo -e "${YELLOW}For production setup:${NC}"
echo "   1. Update .env.prod with your actual values"
echo "   2. Update database credentials in .env.prod"
echo "   3. Run: docker-compose -f docker-compose.prod.yml up -d"
echo ""
echo ""
echo -e "==================================${NC}"
