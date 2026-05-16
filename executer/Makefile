.PHONY: help setup build up down logs clean restart migrate seed

# Colors for output
GREEN := \033[0;32m
YELLOW := \033[1;33m
BLUE := \033[0;34m
NC := \033[0m # No Color

help: ## Show this help message
	@echo "$(BLUE)OTT Platform Docker Commands$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "$(GREEN)%-20s$(NC) %s\n", $$1, $$2}'

setup: ## Initial setup - create .env files
	@echo "$(YELLOW)Setting up environment files...$(NC)"
	@bash setup.sh

build: ## Build all Docker images
	@echo "$(YELLOW)Building Docker images...$(NC)"
	docker-compose build

build-nocache: ## Build all Docker images without cache
	@echo "$(YELLOW)Building Docker images (no cache)...$(NC)"
	docker-compose build --no-cache

up: ## Start all services in background
	@echo "$(YELLOW)Starting services...$(NC)"
	docker-compose up -d
	@echo "$(GREEN)Services started!$(NC)"
	@echo ""
	@echo "Access services at:"
	@echo "  - User Frontend: http://localhost:3000"
	@echo "  - Admin Frontend: http://localhost:3001"
	@echo "  - User API: http://localhost:8002"
	@echo "  - Admin API: http://localhost:8003"
	@echo "  - PgAdmin: http://localhost:5480"
	@echo "  - Redis Insight: http://localhost:5540"

down: ## Stop all services
	@echo "$(YELLOW)Stopping services...$(NC)"
	docker-compose down
	@echo "$(GREEN)Services stopped!$(NC)"

clean: ## Remove all containers, volumes, and networks
	@echo "$(YELLOW)Removing all containers and volumes...$(NC)"
	docker-compose down -v
	@echo "$(GREEN)Cleaned!$(NC)"

restart: ## Restart all services
	@echo "$(YELLOW)Restarting services...$(NC)"
	docker-compose restart
	@echo "$(GREEN)Services restarted!$(NC)"

logs: ## Show logs from all services
	docker-compose logs -f

logs-backend: ## Show user-backend logs
	docker-compose logs -f user-backend

logs-admin-backend: ## Show admin-backend logs
	docker-compose logs -f admin-backend

logs-frontend: ## Show user-frontend logs
	docker-compose logs -f user-frontend

logs-admin-frontend: ## Show admin-frontend logs
	docker-compose logs -f admin-frontend

migrate: ## Run database migrations
	@echo "$(YELLOW)Running migrations...$(NC)"
	docker-compose exec user-backend npm run db:push
	docker-compose exec admin-backend npm run db:push
	@echo "$(GREEN)Migrations complete!$(NC)"

seed: ## Seed database with initial data
	@echo "$(YELLOW)Seeding database...$(NC)"
	docker-compose exec user-backend npm run db:seed
	@echo "$(GREEN)Seeding complete!$(NC)"

db-reset: ## Reset database (removes all data)
	@echo "$(YELLOW)WARNING: This will delete all database data!$(NC)"
	@read -p "Continue? [y/N] " -n 1 -r; \
	echo; \
	if [[ $$REPLY =~ ^[Yy]$$ ]]; then \
		docker-compose down -v; \
		docker-compose up -d database redis; \
		sleep 5; \
		docker-compose up -d user-backend admin-backend; \
		sleep 10; \
		docker-compose exec user-backend npm run db:push; \
		docker-compose exec user-backend npm run db:seed; \
		docker-compose exec admin-backend npm run db:push; \
		docker-compose up -d user-frontend admin-frontend; \
		echo "$(GREEN)Database reset complete!$(NC)"; \
	fi

db-shell: ## Open PostgreSQL shell
	@echo "$(YELLOW)Connecting to PostgreSQL...$(NC)"
	@echo "Username: postgres, Password: ott_db_pass, Database: ott_platform_db"
	docker-compose exec database psql -U postgres -d ott_platform_db

redis-cli: ## Open Redis CLI
	@echo "$(YELLOW)Connecting to Redis...$(NC)"
	docker-compose exec redis redis-cli -a ott_redis_pass

shell-backend: ## Open user-backend container shell
	docker-compose exec user-backend sh

shell-admin-backend: ## Open admin-backend container shell
	docker-compose exec admin-backend sh

shell-frontend: ## Open user-frontend container shell
	docker-compose exec user-frontend sh

shell-admin-frontend: ## Open admin-frontend container shell
	docker-compose exec admin-frontend sh

status: ## Show container status
	@docker-compose ps

ps: ## Show running containers
	@docker ps --filter "network=ott-platform-net" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

health: ## Check service health
	@echo "$(BLUE)Checking service health...$(NC)"
	@docker-compose exec database pg_isready -U postgres && echo "$(GREEN)✓ PostgreSQL$(NC)" || echo "$(YELLOW)✗ PostgreSQL$(NC)"
	@docker-compose exec redis redis-cli -a ott_redis_pass ping > /dev/null && echo "$(GREEN)✓ Redis$(NC)" || echo "$(YELLOW)✗ Redis$(NC)"
	@echo "$(BLUE)Access logs with: make logs$(NC)"

prod-up: ## Start production environment
	@echo "$(YELLOW)Starting production services...$(NC)"
	docker-compose -f docker-compose.prod.yml up -d
	@echo "$(GREEN)Production services started!$(NC)"

prod-down: ## Stop production environment
	@echo "$(YELLOW)Stopping production services...$(NC)"
	docker-compose -f docker-compose.prod.yml down
	@echo "$(GREEN)Production services stopped!$(NC)"

prod-logs: ## Show production logs
	docker-compose -f docker-compose.prod.yml logs -f

prod-build: ## Build production images
	@echo "$(YELLOW)Building production images...$(NC)"
	docker-compose -f docker-compose.prod.yml build

prune: ## Remove unused Docker images, containers, and volumes
	@echo "$(YELLOW)Pruning Docker...$(NC)"
	docker system prune -f
	@echo "$(GREEN)Pruned!$(NC)"

version: ## Show Docker and docker-compose versions
	@echo "$(BLUE)Docker version:$(NC)"
	@docker --version
	@echo "$(BLUE)Docker Compose version:$(NC)"
	@docker-compose --version

.DEFAULT_GOAL := help
