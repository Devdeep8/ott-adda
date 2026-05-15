
🧠 HAANNA — COMPLETE SYSTEM EXPLANATION

A human-like AI companion with memory, emotion, relationship, consent, and safe evolution

1️⃣ WHAT HAANNA IS (IN ONE PARAGRAPH)

haannaa is a multi-bot AI companion system that starts as a neutral friend, gradually becomes warm and playful, and (only later, optionally) can move toward deeper intimacy — without manipulation, dependency, or creepiness.

Unlike typical AI chatbots:

haannaa does not just “reply”

she understands, remembers, evaluates, and decides

memory is structured, consent-aware, and purpose-driven

relationship growth is earned, gated, reversible

2️⃣ CORE DESIGN PRINCIPLE (MOST IMPORTANT)

LLM is NOT the brain.
The system is the brain.
The LLM is only a tool.

That’s why we built:

extractors (understanding)

engines (decision)

RAG (memory recall)

prompt assembly (behavior control)

3️⃣ HIGH-LEVEL SYSTEM FLOW (BIG PICTURE)
User Message
   ↓
Signal Extraction (LLM, JSON only)
   ↓
State Engines (deterministic)
   ↓
Memory/Event Storage (structured)
   ↓
Vector DB Indexing (summaries only)
   ↓
Consent-aware Retrieval (RAG-lite)
   ↓
Prompt Assembly (identity + tone + gates + context)
   ↓
LLM Response Generation
   ↓
Safety & Behavior Post-Processing
   ↓
User Reply


Every arrow exists for a reason.

4️⃣ STEP-BY-STEP FUNCTIONALITY (DETAILED)
STEP 1–2: UI & MULTI-BOT FOUNDATION
What happens

User sees WhatsApp-like UI

Left sidebar = AI bots (user can name them)

Right panel = chat

Each bot = separate memory, relationship, emotion

Why

Real humans talk to different people differently

Each bot must be isolated cognitively

STEP 3–4: REAL CHAT + SERVER PIPELINE
What happens

Messages are stored per bot (frontend state)

Messages are sent to /api/chat/send

Server returns placeholder replies

Why

Establish client–server contract

Everything later (AI, RAG) plugs into this

STEP 5: STRUCTURED UNDERSTANDING (NO AI TALK YET)
What happens

The server understands messages, but doesn’t “act smart” yet.

From one message like:

“Tomorrow is my sister’s birthday, and work has been exhausting.”

The system extracts:

Memory
→ none (no long-term fact)

Event
→ Sister’s birthday (tomorrow)

Emotion signal
→ stressed

Why

Human memory is structured

Not everything should be remembered

No raw messages are stored as memory

STEP 6: CORE STATE MODELS (USER, RELATIONSHIP, CONSENT)
RelationshipState

Tracks:

bond_level (0 → 1)

trust_score

interaction_count

stage (friend → playful → future)

This prevents instant intimacy.

EmotionState

Tracks:

current mood

intensity

trend (improving / declining)

Stored ephemerally (Redis later).

ConsentLog

Tracks:

what memory/event/emotion can be recalled

implicit vs explicit consent

corrections & deletions

This makes haannaa compliance-ready.

STEP 7: LLM-ASSISTED EXTRACTION (CONTROLLED AI USE)
What the LLM does here

The LLM is used only as a parser, not a personality.

For example:

User message
→ LLM extracts JSON
→ System decides what to do


LLM output:

{
  "type": "birthday",
  "title": "Sister's birthday",
  "confidence": 0.9
}

Why

LLMs are excellent at semantic parsing

We do NOT trust them with decisions

STEP 8: VECTOR DB + RAG-LITE (REAL MEMORY)

This is the most misunderstood part, so let’s go deep.

🧠 HOW VECTOR DB & RAG WORK IN HAANNA (IMPORTANT)
❌ What RAG is NOT used for

“Hmm”

“Okay”

“How are you?”

Casual small talk

Those do NOT need memory.

✅ What RAG IS used for

RAG is used when the message intersects with:

past memories

upcoming events

recurring patterns

relationship-relevant topics

WHAT GOES INTO VECTOR DB

Only summaries, never raw text.

Memory example
"User dislikes mornings"

Event example
"Sister's birthday tomorrow"


Each is embedded as a vector.

WHAT DOES NOT GO INTO VECTOR DB

❌ Raw chat messages
❌ EmotionState
❌ RelationshipState
❌ Consent logs

Why?
Because those are state, not memory.

RAG RETRIEVAL FLOW (DETAILED)
User message
   ↓
Check: does this message need context?
   ↓
Embed message text
   ↓
Query vector DB (top 3–5)
   ↓
Apply consent filter
   ↓
Rank by relevance + importance + recency
   ↓
Return summarized context

EXAMPLE RAG IN ACTION
Past memory stored
"User dislikes mornings"

New message

“I can’t wake up early again…”

RAG retrieves
Memory: User dislikes mornings

BUT reply is NOT:

❌ “You told me earlier you dislike mornings.”

Instead, memory influences tone:

✅ “Yeah… mornings don’t seem to be your thing 😄”

That’s human-like recall, not creepy recall.

STEP 9: PROMPT ASSEMBLY (THE REAL BRAIN)

The final prompt sent to the LLM is assembled, not improvised.

SYSTEM IDENTITY
+ RELATIONSHIP GATES
+ TONE INSTRUCTIONS
+ RAG CONTEXT
+ USER MESSAGE


This guarantees:

no AI-assistant behavior

no intimacy leaks

no manipulation

STEP 10: PLAYFUL MODE (EARNED WARMTH)

Playfulness is not a personality toggle.

It is computed.

Conditions

bond_level ≥ 0.55

trust_score ≥ 0.6

enough interactions

emotion trend not declining

If any drop → fallback to friend mode.

EXAMPLE PLAYFUL RESPONSE (SAFE)

User:

“I forgot again.”

AI:

“Honestly impressive consistency 😄 Want to fix it together?”

❌ No flirting
❌ No dependency
❌ No exclusivity

5️⃣ WHY THIS ARCHITECTURE IS DIFFERENT FROM MOST AI GF SITES

Most sites:

User → LLM → Reply


haannaa:

User
→ Understanding
→ Memory
→ Emotion
→ Relationship
→ Consent
→ Retrieval
→ Gated Prompt
→ Reply


That difference is everything.

6️⃣ SAFETY BY DESIGN (NOT PATCHED)

No raw memory recall

No emotional dependency

No instant intimacy

No “you need me”

No exclusivity

Consent governs recall

Relationship growth is slow & reversible