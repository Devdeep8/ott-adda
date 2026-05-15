/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import api from "@/lib/axios"
import { MdArrowBack } from "react-icons/md"

const Badge = ({ children, color = "gray", className = "" }: { children: React.ReactNode, color?: "blue" | "green" | "amber" | "coral" | "purple" | "gray", className?: string }) => {
  const colors = {
    blue: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    green: "bg-green-500/10 text-green-500 border border-green-500/20",
    amber: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
    coral: "bg-orange-500/10 text-orange-500 border border-orange-500/20",
    purple: "bg-purple-500/10 text-purple-500 border border-purple-500/20",
    gray: "bg-muted text-muted-foreground border border-border",
  }
  return <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full m-0.5 ${colors[color]} ${className}`}>{children}</span>
}

const KV = ({ k, v }: { k: string, v: React.ReactNode }) => (
  <div className="flex items-start py-2 border-b border-border/50 last:border-0 gap-3">
    <div className="text-xs font-medium text-muted-foreground w-36 shrink-0 pt-0.5">{k}</div>
    <div className="text-[13px] text-foreground flex-1 wrap-break-word">{v || "—"}</div>
  </div>
)

const Metric = ({ label, value, sub }: { label: string, value: string | number, sub?: string }) => (
  <div className="bg-muted rounded-lg p-3">
    <div className="text-xs text-muted-foreground mb-1">{label}</div>
    <div className="text-xl font-medium text-foreground">{value}</div>
    {sub && <div className="text-[11px] text-muted-foreground/70 mt-0.5">{sub}</div>}
  </div>
)

// Safe date formatter — never shows "Invalid Date"
const fmt = (value: string | Date | null | undefined, opts?: Intl.DateTimeFormatOptions) => {
  if (!value) return "—"
  const d = new Date(value)
  if (isNaN(d.getTime())) return "—"
  return d.toLocaleString(undefined, opts)
}

const fmtDate = (value: string | Date | null | undefined) =>
  fmt(value, { year: "numeric", month: "short", day: "numeric" })

const RELATIONSHIP_STAGE_LABELS = [
  "Stranger",
  "Acquaintance",
  "Friend",
  "Close Friend",
  "Intimate",
  "Bonded",
] as const

const normalizeRelationshipStage = (stage: number) =>
  Math.max(0, Math.min(5, Math.round(stage)))

const getRelationshipStageLabel = (stage: number | null | undefined) =>
  RELATIONSHIP_STAGE_LABELS[normalizeRelationshipStage(stage ?? 0)]

const OverviewTab = ({ account, stats, relationship }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <Metric label="Total messages" value={stats.totalMessages || 0} sub="across all chats" />
      <Metric label="Chat sessions" value={stats.totalSessions || 0} sub="since onboarding" />
      <Metric label="Memories stored" value={stats.totalMemories || 0} sub={`avg importance ${stats.avgMemoryImportance || 0}`} />
      <Metric label="Bond level" value={relationship?.bondLevel || 0} sub={`${getRelationshipStageLabel(relationship?.stage)} · Stage ${normalizeRelationshipStage(relationship?.stage)} / 5`} />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="bg-card border border-border rounded-xl p-4 md:p-5">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Account info</h3>
        <KV k="Name" v={account.name} />
        <KV k="Email" v={account.email} />
        <KV k="Custom ID" v={account.customId} />
        <KV k="Location" v={account.currentLocation} />
        <KV k="Email verified" v={account.emailVerified ? <Badge color="green">Verified</Badge> : <Badge color="gray">No</Badge>} />
        <KV k="Onboarded" v={account.isOnboarded ? <Badge color="green">Yes</Badge> : <Badge color="gray">No</Badge>} />
      </div>
      <div className="bg-card border border-border rounded-xl p-4 md:p-5">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Activity snapshot</h3>
        <KV k="Created at" v={fmtDate(account.createdAt)} />
        <KV k="Last active" v={fmt(account.lastActiveAt)} />
        <KV k="Last proactive" v={fmt(account.lastProactiveAt)} />
        <KV k="Avg session msgs" v={stats.avgMessagesPerSession || 0} />
      </div>
    </div>
  </div>
)

const PersonalityTab = ({ personality }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="bg-card border border-border rounded-xl p-4 md:p-5">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Core traits</h3>
        <KV k="Occupation" v={personality.occupation} />
        <KV k="Location" v={personality.location} />
        <KV k="Gender" v={personality.gender} />
        <KV k="Religion" v={personality.religion} />
        <KV k="Temperament" v={personality.temperament} />
        <KV k="Humor style" v={personality.humorStyle} />
        <KV k="Love language" v={personality.loveLanguage} />
        <KV k="Intent" v={personality.intent} />
        <KV k="Free time" v={personality.freeTime} />
      </div>
      <div className="bg-card border border-border rounded-xl p-4 md:p-5">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Likes & Dislikes</h3>
        <p className="text-xs font-medium text-muted-foreground mb-2 mt-1">Likes</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {personality.likes?.length ? personality.likes.map((l: string, i: number) => <Badge key={i} color="green">{l}</Badge>) : <span className="text-sm text-muted-foreground">None listed</span>}
        </div>
        <p className="text-xs font-medium text-muted-foreground mb-2">Dislikes</p>
        <div className="flex flex-wrap gap-1">
          {personality.dislikes?.length ? personality.dislikes.map((d: string, i: number) => <Badge key={i} color="coral">{d}</Badge>) : <span className="text-sm text-muted-foreground">None listed</span>}
        </div>
      </div>
    </div>
    {personality.onboardingAnswers && (
      <div className="bg-card border border-border rounded-xl p-4 md:p-5">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Onboarding answers</h3>
        {Object.entries(personality.onboardingAnswers).map(([k, v]) => (
          <KV key={k} k={k} v={typeof v === 'string' ? `"${v}"` : Array.isArray(v) ? (v.length ? v.join(", ") : "—") : JSON.stringify(v)} />
        ))}
      </div>
    )}
  </div>
)

const CompanionTab = ({ companion }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="bg-card border border-border rounded-xl p-4 md:p-5">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Luna personalization</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div>
          <KV k="Bot name" v={companion.botName} />
          <KV k="Bot age" v={companion.botAge} />
          <KV k="Bot occupation" v={companion.botOccupation} />
          <KV k="Greeting style" v={companion.greetingStyle} />
          <KV k="Care style" v={companion.careStyle} />
          <KV k="Texting pattern" v={companion.textingPattern} />
          <KV k="Communication style" v={companion.communicationStyle} />
          <KV k="Version" v={`v${companion.version || 1}`} />
        </div>
        <div>
          <KV k="Humor style" v={companion.humorStyle} />
          <KV k="Affection style" v={companion.affectionStyle} />
          <KV k="Conflict style" v={companion.conflictStyle} />
          <KV k="Attachment pacing" v={companion.attachmentPacing} />
          <KV k="Response length" v={companion.responseLengthTendency} />
          <KV k="Progression style" v={companion.progressionStyle} />
          <KV k="Boundary style" v={companion.relationalBoundaryStyle} />
          <KV k="Emotional range" v={companion.emotionalRangeProfile} />
        </div>
      </div>
    </div>
    {companion.botSchedule && (
      <div className="bg-card border border-border rounded-xl p-4 md:p-5">
        <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Bot schedule</h3>
        {Object.entries(companion.botSchedule).map(([time, desc]) => (
          <KV key={time} k={time} v={desc as string} />
        ))}
      </div>
    )}
    <div className="bg-card border border-border rounded-xl p-4 md:p-5">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Bot interests & hooks</h3>
      <KV k="Interests" v={
        companion.botInterests?.length
          ? <div className="flex flex-wrap gap-1">{companion.botInterests.map((item: string, i: number) => <Badge key={i} color="purple">{item}</Badge>)}</div>
          : "—"
      } />
      <KV k="Topic hooks" v={
        companion.topicHooks?.length
          ? <div className="flex flex-wrap gap-1">{companion.topicHooks.map((item: string, i: number) => <Badge key={i} color="blue">{item}</Badge>)}</div>
          : "—"
      } />
      <KV k="Inside joke seed" v={companion.insideJokeSeedStyle} />
      <KV k="Generated overlay" v={companion.generatedOverlay} />
    </div>
  </div>
)

const RelationshipTab = ({ relationship }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <Metric label="Bond level" value={Number(relationship?.bondLevel ?? 0).toFixed(2)} />
      <Metric label="Trust score" value={`${(relationship?.trustScore ?? 0).toFixed(2)} / 100`} />
      <Metric label="Stage" value={`${normalizeRelationshipStage(relationship?.stage)} / 5`} sub={getRelationshipStageLabel(relationship?.stage)} />
      <Metric label="Interactions" value={relationship?.interactionCount ?? 0} sub="total exchanges" />
    </div>
    <div className="bg-card border border-border rounded-xl p-4 md:p-5">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Relationship progression</h3>
      <div className="flex items-center gap-0 mt-2 mb-1">
        {[0, 1, 2, 3, 4, 5].map(step => (
          <div key={step} className={`flex-1 h-1.5 rounded mx-0.5 ${normalizeRelationshipStage(relationship?.stage) >= step ? "bg-green-500" : "bg-muted"}`} />
        ))}
      </div>
      <div className="grid grid-cols-6 text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-2 mb-4 gap-1">
        {RELATIONSHIP_STAGE_LABELS.map((label) => (
          <span key={label} className="text-center truncate">{label}</span>
        ))}
      </div>
      <div className="w-full h-px bg-border my-4" />
      <KV k="Current stage" v={<Badge color="blue">Stage {normalizeRelationshipStage(relationship?.stage)} • {getRelationshipStageLabel(relationship?.stage)}</Badge>} />
      <KV k="Last interaction" v={fmt(relationship?.lastInteractionAt)} />
      <KV k="Stage changed" v={fmt(relationship?.lastStageChangeAt)} />
      <KV k="Bot ID" v={relationship?.botId} />
    </div>
  </div>
)

const EmotionsTab = ({ emotionState, recentEmotionLogs }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <Metric label="Current mood" value={emotionState?.currentMood || "Unknown"} sub={`intensity ${emotionState?.intensity ?? 0}`} />
      <Metric label="Mood trend" value={emotionState?.trend || "Stable"} />
      <Metric label="Confidence" value={emotionState?.confidence ?? 0} />
      <Metric label="Log entries" value={recentEmotionLogs?.length || 0} />
    </div>
    <div className="bg-card border border-border rounded-xl p-4 md:p-5">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Recent emotion logs</h3>
      {recentEmotionLogs?.length > 0 ? (
        <div className="space-y-2">
          {recentEmotionLogs.map((log: any, i: number) => (
            <div key={i} className="flex gap-4 py-3 border-b border-border/50 last:border-0">
              <div className="w-3 h-3 rounded-full mt-1.5 bg-primary/80 shrink-0" />
              <div>
                <p className="text-[13px] text-foreground font-medium capitalize">
                  {log.mood || "Neutral"} <span className="text-muted-foreground font-normal">· intensity {log.intensity ?? 0}</span>
                </p>
                <span className="text-[11px] text-muted-foreground">{fmt(log.createdAt)} · confidence {log.confidence ?? 0}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-sm text-muted-foreground">No recent logs</div>
      )}
    </div>
  </div>
)

const MemoryTab = ({ topMemories, stats }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <Metric label="Total memories" value={stats.totalMemories || 0} />
      <Metric label="Avg importance" value={stats.avgMemoryImportance || 0} />
      <Metric label="Shown here" value={topMemories?.length || 0} sub="top by importance" />
    </div>
    <div className="bg-card border border-border rounded-xl p-4 md:p-5">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Memory entries</h3>
      {topMemories?.length > 0 ? (
        <div className="space-y-1">
          {topMemories.map((mem: any) => (
            <div key={mem.id} className="flex items-start gap-4 py-3.5 border-b border-border/50 last:border-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 bg-primary/10 text-primary border border-primary/20">
                {mem.category?.charAt(0).toUpperCase() || "M"}
              </div>
              <div className="flex-1">
                <p className="text-[13px] text-foreground leading-relaxed">{mem.summary}</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge color={mem.category === "bot_fact" ? "purple" : "blue"}>{mem.category?.replace(/_/g, " ")}</Badge>
                  <span className="text-[11px] text-muted-foreground">importance {mem.importance ?? 0} · confidence {mem.confidence ?? 0}</span>
                  <span className="text-[11px] text-muted-foreground">{fmtDate(mem.createdAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-sm text-muted-foreground">No memories recorded</div>
      )}
    </div>
  </div>
)

const EventsTab = ({ events, stats }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <Metric label="Total events" value={stats.totalEvents || 0} />
    </div>
    <div className="bg-card border border-border rounded-xl p-4 md:p-5">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Tracked events</h3>
      {events?.length > 0 ? (
        <div className="space-y-1">
          {events.map((ev: any) => (
            <div key={ev.id} className="flex items-start gap-3 py-2.5 border-b border-border/50 last:border-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 bg-muted text-muted-foreground border border-border">
                {ev.type?.charAt(0).toUpperCase() || "E"}
              </div>
              <div className="flex-1">
                <p className="text-[13px] text-foreground">{ev.title || "Event"}</p>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {/* scheduledDate is the correct field from the service */}
                  <span className="text-[11px] text-muted-foreground">{fmtDate(ev.scheduledDate ?? ev.createdAt)}</span>
                  <Badge color={ev.proactiveSent ? "green" : "gray"}>{ev.proactiveSent ? "Proactive sent" : "Pending"}</Badge>
                  {ev.status && <Badge color="blue">{ev.status}</Badge>}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-sm text-muted-foreground">No events tracked</div>
      )}
    </div>
  </div>
)

const SessionsTab = ({ recentSessions, stats }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <Metric label="Total sessions" value={stats.totalSessions || 0} />
      <Metric label="Avg messages" value={stats.avgMessagesPerSession || 0} />
    </div>
    <div className="bg-card border border-border rounded-xl p-4 md:p-5">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Recent sessions</h3>
      {recentSessions?.length > 0 ? (
        <div className="space-y-1">
          {recentSessions.map((s: any) => (
            <div key={s.id} className="flex items-start gap-3 py-2.5 border-b border-border/50 last:border-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 bg-muted text-muted-foreground border border-border">
                {s.messageCount || 0}
              </div>
              <div className="flex-1">
                <p className="text-[13px] text-foreground">{s.summary || s.topic || "Session"}</p>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {/* startTime is the correct field from the service */}
                  <span className="text-[11px] text-muted-foreground">{fmt(s.startTime)}</span>
                  {s.lastUserMood && <Badge color="blue">{s.lastUserMood}</Badge>}
                  {s.sessionType && <Badge color="gray">{s.sessionType}</Badge>}
                  <span className="text-[11px] text-muted-foreground">{s.messageCount ?? 0} msgs</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-sm text-muted-foreground">No recent sessions</div>
      )}
    </div>
  </div>
)

const UserDetailsSkeleton = () => (
  <div className="space-y-6 max-w-5xl mx-auto pb-10 animate-pulse mt-4">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-muted rounded-lg" />
      <div className="w-32 h-4 bg-muted rounded" />
    </div>
    <div className="bg-card border border-border rounded-xl p-4 md:p-5 flex items-center gap-4">
      <div className="w-14 h-14 bg-muted rounded-full shrink-0" />
      <div className="flex-1 space-y-2">
        <div className="h-5 w-48 bg-muted rounded" />
        <div className="h-4 w-64 bg-muted rounded" />
      </div>
    </div>
    <div className="flex gap-2 border-b border-border/50 pb-px mb-6">
      {[...Array(6)].map((_, i) => <div key={i} className="h-9 w-24 bg-muted rounded-lg" />)}
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-muted rounded-lg" />)}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="bg-card border border-border rounded-xl h-64 p-4" />
      <div className="bg-card border border-border rounded-xl h-64 p-4" />
    </div>
  </div>
)

const SettingsTab = ({ settings }: any) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    <div className="bg-card border border-border rounded-xl p-4 md:p-5">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">User Preferences</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div>
          <KV k="Theme preference" v={settings.themePreference} />
          <KV k="Language" v={settings.language} />
        </div>
        <div>
          <KV k="Haptics enabled" v={settings.hapticsEnabled ? "Yes" : "No"} />
          <KV k="Notifications enabled" v={settings.notificationsEnabled ? "Yes" : "No"} />
        </div>
      </div>
    </div>
  </div>
)

export default function UserDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const userId = params.userId as string

  const [data, setData] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (!userId) return
    const fetchDetails = async () => {
      try {
        const response = await api.get(`/users/${userId}`)
        setData(response.data.data)
      } catch (err: any) {
        setError(err.message || "An error occurred fetching user data.")
      } finally {
        setLoading(false)
      }
    }
    fetchDetails()
  }, [userId])

  if (loading) return <UserDetailsSkeleton />
  if (error || !data) {
    return (
      <div className="max-w-5xl mx-auto mt-8">
        <div className="p-6 text-destructive wrap-break-word text-sm border border-destructive/20 bg-destructive/5 rounded-xl flex items-center justify-between">
          <span>Error: {error}</span>
          <button onClick={() => router.back()} className="text-foreground hover:bg-muted px-3 py-1.5 rounded-lg border border-border text-xs font-medium transition-colors">Go Back</button>
        </div>
      </div>
    )
  }

  const { account, personality, companion, relationship, emotionState, recentEmotionLogs, topMemories, events, recentSessions, stats } = data

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "personality", label: "Personality" },
    { id: "companion", label: "Companion AI" },
    { id: "relationship", label: "Relationship" },
    { id: "emotions", label: "Emotions" },
    { id: "memory", label: "Memories" },
    { id: "events", label: "Events" },
    { id: "sessions", label: "Sessions" },
    { id: "settings", label: "Settings" },
  ]

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex items-center gap-3 mt-4 mb-2">
        <button onClick={() => router.back()} className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted border border-transparent hover:border-border">
          <MdArrowBack className="text-xl" />
        </button>
        <h1 className="text-[11px] font-bold text-foreground tracking-widest uppercase">User Details</h1>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 md:p-5 mb-4 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-xl font-bold shrink-0 relative z-10 overflow-hidden">
          {account.image
            ? <img src={account.image} className="w-full h-full object-cover" alt={account.name || "User"} />
            : account.name?.substring(0, 2).toUpperCase() || "?"}
        </div>
        <div className="flex-1 relative z-10">
          <h2 className="text-xl md:text-lg font-medium text-foreground">{account.name || "—"}</h2>
          <p className="text-[13px] text-muted-foreground mt-1 flex flex-wrap items-center gap-2">
            <span>{account.email}</span>
            <span className="hidden md:inline">&middot;</span>
            <span className="flex items-center gap-1.5 bg-muted px-2 py-0.5 rounded-full border border-border">
              <span className={`w-1.5 h-1.5 rounded-full ${account.lastActiveAt ? "bg-green-500" : "bg-muted-foreground"}`} />
              {account.lastActiveAt ? "Active" : "Inactive"}
            </span> 
          </p>
          <p className="text-[11px] text-muted-foreground/70 mt-2">
            ID: <span className="font-mono text-muted-foreground">{account.id}</span> &middot; Joined {fmtDate(account.createdAt)}
          </p>
        </div>
        <div className="flex flex-row md:flex-col items-center md:items-end gap-2 mt-2 md:mt-0 relative z-10">
          {account.isOnboarded ? <Badge color="green">Onboarded</Badge> : <Badge color="gray">Not Onboarded</Badge>}
        </div>
      </div>

      <div className="flex flex-nowrap overflow-x-auto gap-1 border-b border-border/50 mb-6 pb-0" style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-2.5 text-[13px] whitespace-nowrap border-b-2 transition-all ${activeTab === t.id
                ? "text-primary border-primary font-medium"
                : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>


      <div className="min-h-[400px]">
        {activeTab === "overview" && <OverviewTab account={account} stats={stats} relationship={relationship} recentSessions={recentSessions} />}
        {activeTab === "personality" && <PersonalityTab personality={personality} />}
        {activeTab === "companion" && <CompanionTab companion={companion} />}
        {activeTab === "relationship" && <RelationshipTab relationship={relationship} />}
        {activeTab === "emotions" && <EmotionsTab emotionState={emotionState} recentEmotionLogs={recentEmotionLogs} />}
        {activeTab === "memory" && <MemoryTab topMemories={topMemories} stats={stats} />}
        {activeTab === "events" && <EventsTab events={events} stats={stats} />}
        {activeTab === "sessions" && <SessionsTab recentSessions={recentSessions} stats={stats} />}
        {activeTab === "settings" && <SettingsTab settings={data.settings} />}
      </div>
    </div>
    )
    }