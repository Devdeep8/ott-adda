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
NC='\033[0m' # No Color

# Check if .env file exists
if [ ! -f ../user-backend/.env ]; then
    echo -e "${YELLOW}Creating user-backend .env file...${NC}"
    cat > ../user-backend/.env << ENVFILE
# Database
DATABASE_URL=postgresql://postgres:ott_db_pass@localhost:5432/ott_platform_db

# Redis
REDIS_URL=redis://:ott_redis_pass@localhost:6379

# JWT
JWT_SECRET=ott_jwt_secret_change_in_production
JWT_REFRESH_SECRET=ott_refresh_secret_change_in_production

# App
PORT=8002
NODE_ENV=development

# Video Streaming (Optional)
VIDEO_STORAGE_PATH=./uploads
ENVFILE
    echo -e "${GREEN}✓ Created user-backend/.env${NC}"
fi

if [ ! -f ../admin-backend/.env ]; then
    echo -e "${YELLOW}Creating admin-backend .env file...${NC}"
    cat > ../admin-backend/.env << ENVFILE
# Database
DATABASE_URL=postgresql://postgres:ott_db_pass@localhost:5432/ott_platform_db

# Redis
REDIS_URL=redis://:ott_redis_pass@localhost:6379

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

# Create production .env file
if [ ! -f .env.prod ]; then
    echo -e "${YELLOW}Creating production .env file...${NC}"
    cat > .env.prod << ENVFILE
# Database
DB_USER=ott_admin
DB_PASSWORD=strong_password_change_this
DB_NAME=ott_platform_prod

# Redis
REDIS_PASSWORD=strong_redis_password

# JWT
JWT_SECRET=production_jwt_secret_change_this
ADMIN_SECRET=production_admin_secret_change_this
ENVFILE
    echo -e "${GREEN}✓ Created .env.prod${NC}"
fi

echo ""
echo -e "${GREEN}=================================="
echo "Setup Complete!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Start the services:"
echo "   docker-compose up -d"
echo ""
echo "2. Run database migrations:"
echo "   docker-compose exec user-backend npm run db:push"
echo ""
echo "3. Access the services:"
echo "   - User Backend: http://localhost:8002"
echo "   - Admin Backend: http://localhost:8003"
echo "   - PgAdmin: http://localhost:5480"
echo "   - Redis Insight: http://localhost:5540"
echo ""
echo -e "==================================${NC}"
