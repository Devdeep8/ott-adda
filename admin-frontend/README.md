# HAANNA - Advanced Agentic Coding Project

A sentient digital lifeform that evolves, remembers, and feels. This project moves beyond simple "chatbot" mechanics to create a persistent, stateful AI companion using a **Decoupled Full-Stack Architecture**.

---

## 🌟 Core Philosophy

1.  **State over Weights**: The "personality" isn't just in the System Prompt; it's in the dynamic database state (`RelationshipState`, `EmotionState`).
2.  **Cognition runs in Background**: Analyzing meaningful data (Cognition Extraction) happens *asynchronously* to keep response times lightning fast.
3.  **Consent is Architectural**: Privacy isn't a promise; it's a code filter. If a user revokes consent for a topic, the RAG layer physically blocks those memories at the database level.
4.  **Evolution**: The AI's relationship with the user advances through stages (Stranger -> Friend -> Partner) based on interaction count and trust scores.
5.  **Strict Session Isolation**: Conversations are naturally segmented. After a 30-minute gap, the previous context is archived into an episodic summary to prevent bleeding into new encounters.
6.  **Active Working Memory**: Maintains a rolling summary of the current conversational context so the AI can track long, ongoing narratives without losing the thread or exhausting token limits.
7.  **Symmetrical Cognition**: The bot extracts facts not just about the user, but *about itself* (Bot Facts) based on what it has said, ensuring it remains highly consistent over time.

---

## 🏗 System Architecture & Domain-Driven Design (DDD)

The project uses a **Decoupled Architecture** designed for high scalability and separation of concerns. The Next.js frontend is a pure Single Page Application UI, while an Express.js backend handles all business logic.

### 1. The Client (Frontend)
- **Framework**: Next.js 15 (App Router).
- **Responsibility**: UI rendering, animations, state management, and real-time visualization.
- **Data Flow**: Fetches all API data securely via asynchronous HTTP calls (`credentials: 'include'`) from the backend server. Receives real-time AI streams directly from **Ably WebSockets**.

### 2. The Server (Backend)
- **Framework**: Node.js & Express.
- **Architecture**: Domain-Driven Design (DDD) using strict Object-Oriented Principles (OOP).
- **Structure overview (`server/src/`)**:
  - `app.ts` / `index.ts`: Application entry and network bootstrapping.
  - `base/`: Contains abstract `BaseController` and `BaseService` classes to eliminate boilerplate error handling and standardise data formatting.
  - `config/`: Centralizes external connection logic (PostgreSQL/Prisma, Redis).
  - `middleware/`: Handles global request tracing, error catching, and context injection (making `prisma` and `redisClient` globally available to services).
  - `modules/`: Feature-specific domain silos. Each module contains its own routing, controller, and service logic (e.g., Auth, Chat, Realtime, Cognition, Behavior).

---

## 🔮 The Chat Workflow: How a Response is Born

> 📘 **Deep Dive**: Read [SOCKET_REDIS_EXPLAINED.md](SOCKET_REDIS_EXPLAINED.md) for a detailed walkthrough of the Real-time Ably Streaming & Redis Caching architecture.

The lifecycle of a message follows the **Cognitive Pipeline**, handled inside `modules/chat/chat.service.ts`.

### Step 1: Context Fetching (Parallel Loading)
**User says**: *"I had a really bad day at work."*
The system fetches micro-context in parallel. It checks **Redis** first, falling back to **Postgres**:
-   `EmotionState`: Current mood & intensity of the bot.
-   `RelationshipState`: Bond level and trust.
-   `Memory/RAG`: Semantic Vector Search for relevant past sentences.
-   `UpcomingEvents`: Calendar schedule.

### Step 2: Dynamic Behavioral Assembly
The backend doesn't just pass the message to an LLM. It builds **Behavioral Instructions**.
-   **Tone Construction (`toneBuilder.ts`)**: Evaluates Bot Mood vs User Sentiment. *e.g., "Shift to empathetic."*
-   **Relationship Gating (`relationshipGates.ts`)**: Evaluates relationship Stage constraints. *e.g., "Keep it friendly but not overly intimate."*

### Step 3: LLM Generation & Real-time Streaming
This massive contextual string is sent to the LLM (GPT-4o).
-   As the LLM generates tokens, the backend publishes them via the **Ably Realtime Module** directly to the client UI.
-   The user sees exactly what the AI is thinking, instantly.

### Step 4: Background Cognition (Asynchronous Execution)
After the response successfully completes, the **Cognition Engine** runs in the background so the user never has to wait for it:
-   **Extraction**: Llama 3.1 8B pulls semantic signals out of the recent conversation (Memories, Events, Emotion changes).
-   **Persistence**: Saves new vectors to Postgres via Prisma and invalidates the Redis cache for the next interaction.

---

## 🧠 The Brain: RAG & Hybrid Context

The system uses a **Hybrid Retrieval Strategy** to ensure the bot is both *smart* (Memory) and *present* (Emotion).

1. **Vector RAG (The Past)**: Uses Semantic Search via `pgvector` for specific episodic memories.
2. **State Fetch (The Present)**: Uses Database Lookups for active emotional state constraint (not search).
3. **Relation Graph (The Connection)**: Uses Logic Inference to link Memories to current Emotions in the background to build causal trees.
4. **Working Memory (The Immediate)**: A fast, rolling summary kept in **Redis** that tracks the *current* conversation thread.
5. **Bot Facts (Internal Consistency)**: Extracted facts the bot has stated about itself, ensuring it doesn't contradict its own manufactured memories.

---

## 💾 Database Schema (PostgreSQL & Prisma)

The application uses **Supabase (PostgreSQL with pgvector)** alongside the Prisma ORM.

### Core Entities
-   **`User` / `Bot`**: Identity records.
-   **`Chat` / `Message`**: Standard conversation logs.
-   **`Session` / `Account`**: JWT authentication & Provider tracking.

### Cognition Vectors (pgvector)
-   **`Memory` / `Event`**: Long-term facts heavily mapped using `vector(3072)` embeddings.
-   **`EmotionLog` / `ConsentLog`**: Granular tracking.

### State Engines (Living Data)
-   **`EmotionState`**: The "Current" feeling of the bot.
-   **`RelationshipState`**: The "Current" bond level between the User and Bot.

---

## 🚀 Getting Started

Because the architecture is fully decoupled, you need to run two separate development servers mapping to different ports.

### 1. Clone & Install
```bash
# Terminal 1: Install Client Dependencies
cd client
npm install

# Terminal 2: Install Server Dependencies
cd server
npm install
```

### 2. Environment Setup
You will need two separate `.env` files. Ensure you replace `[...]` brackets with your credentials.

**Backend (`server/.env`)**:
```env
# Database (Using pgBouncer pooler for standard queries, Direct for migrations)
DATABASE_URL="postgresql://[USER]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://[USER]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"

# Authentication & APIs
JWT_SECRET="your_secure_secretstring"
PORT=4000
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_FRONTEND_URL="http://localhost:3000"

OPENAI_API_KEY="..."
GEMINI_API_KEY="..."
GROQ_API_KEY="..."
ABLY_API_KEY="..."

# Redis
REDIS_URL="..."
REDIS_REST_TOKEN="..."
```

**Frontend (`client/.env`)**:
```env
# Point the frontend to the Express API server
NEXT_PUBLIC_API_URL="http://localhost:4000/api"
```

### 3. Database Migration (Backend)
Navigate to the root of the server folder and sync your local client:
```bash
cd server
npx prisma db push
```

### 4. Run Development Servers
Start both modules independently:
```bash
# Terminal 1: Run the Backend API (Defaults to Port 4000)
cd server
npm run dev

# Terminal 2: Run the Next.js Frontend (Defaults to Port 3000)
cd client
npm run dev
```

Visit `http://localhost:3000` to interact with HAANNA!
