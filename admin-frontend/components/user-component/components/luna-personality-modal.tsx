/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { MdClose, MdCheck, MdRefresh, MdAdd, MdPerson, MdAutoAwesome, MdPsychology, MdTimeline } from "react-icons/md"
import api from "@/lib/axios"

type User = {
    id: string
    name: string | null
    email: string | null
    [key: string]: any
}

type LunaPersonalityForm = {
    // Basic
    botName: string
    botAge: string
    botOccupation: string
    // Arrays
    botInterests: string[]
    emphasizedInterests: string[]
    topicHooks: string[]
    // Styles
    communicationStyle: string
    careStyle: string
    textingPattern: string
    greetingStyle: string
    progressionStyle: string
    generatedOverlay: string
    // Dynamic style fields
    humorStyle: string
    conflictStyle: string
    affectionStyle: string
    attachmentPacing: string
    insideJokeSeedStyle: string
    responseLengthTendency: string
    relationalBoundaryStyle: string
    emotionalRangeProfile: string
    // Evolution triggers
    evolutionTriggerAfter7Days: string
    evolutionTriggerAfter30Days: string
    evolutionTriggerAfterHighEmotional: string
}

const defaultForm: LunaPersonalityForm = {
    botName: "",
    botAge: "",
    botOccupation: "",
    botInterests: [],
    emphasizedInterests: [],
    topicHooks: [],
    communicationStyle: "",
    careStyle: "",
    textingPattern: "",
    greetingStyle: "",
    progressionStyle: "",
    generatedOverlay: "",
    humorStyle: "",
    conflictStyle: "",
    affectionStyle: "",
    attachmentPacing: "",
    insideJokeSeedStyle: "",
    responseLengthTendency: "",
    relationalBoundaryStyle: "",
    emotionalRangeProfile: "",
    evolutionTriggerAfter7Days: "",
    evolutionTriggerAfter30Days: "",
    evolutionTriggerAfterHighEmotional: "",
}

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
    return (
        <div className="flex items-start gap-3 mb-5">
            <div className="mt-0.5 w-7 h-7 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 flex-shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="font-mono text-xs font-semibold text-white tracking-wide">{title}</h3>
                {subtitle && <p className="font-mono text-[10px] text-zinc-600 mt-0.5">{subtitle}</p>}
            </div>
        </div>
    )
}

function FieldLabel({ label, hint }: { label: string; hint?: string }) {
    return (
        <div className="mb-1.5">
            <label className="block font-mono text-[10px] tracking-widest uppercase text-zinc-400 font-medium">
                {label}
            </label>
            {hint && <p className="font-mono text-[10px] text-zinc-600 mt-0.5">{hint}</p>}
        </div>
    )
}

function TextInput({
    label,
    hint,
    value,
    onChange,
    placeholder,
    type = "text",
}: {
    label: string
    hint?: string
    value: string
    onChange: (v: string) => void
    placeholder?: string
    type?: string
}) {
    return (
        <div>
            <FieldLabel label={label} hint={hint} />
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg h-9 px-3 font-mono text-xs text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 focus:bg-zinc-900 transition-all"
            />
        </div>
    )
}

function TextAreaInput({
    label,
    hint,
    value,
    onChange,
    placeholder,
    rows = 3,
}: {
    label: string
    hint?: string
    value: string
    onChange: (v: string) => void
    placeholder?: string
    rows?: number
}) {
    return (
        <div>
            <FieldLabel label={label} hint={hint} />
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={rows}
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3 py-2 font-mono text-xs text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 focus:bg-zinc-900 transition-all resize-none leading-relaxed"
            />
        </div>
    )
}

function ArrayInput({
    label,
    hint,
    values,
    onChange,
}: {
    label: string
    hint?: string
    values: string[]
    onChange: (newValues: string[]) => void
}) {
    const [inputValue, setInputValue] = useState("")

    const handleAdd = () => {
        if (inputValue.trim() && !values.includes(inputValue.trim())) {
            onChange([...values, inputValue.trim()])
            setInputValue("")
        }
    }

    const handleRemove = (index: number) => {
        onChange(values.filter((_, i) => i !== index))
    }

    return (
        <div>
            <FieldLabel label={label} hint={hint} />
            <div className="min-h-[36px] flex flex-wrap gap-1.5 mb-2 p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/80">
                {values.length === 0 ? (
                    <span className="font-mono text-[10px] text-zinc-700 italic flex items-center">No items yet</span>
                ) : (
                    values.map((val, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-1 bg-purple-500/10 border border-purple-500/20 rounded-md px-2 h-6 font-mono text-[10px] text-purple-300"
                        >
                            <span>{val}</span>
                            <button
                                type="button"
                                onClick={() => handleRemove(idx)}
                                className="text-purple-500/60 hover:text-red-400 transition-colors ml-0.5"
                            >
                                <MdClose className="text-[9px]" />
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { e.preventDefault(); handleAdd(); }
                    }}
                    placeholder="Type and press Enter to add..."
                    className="flex-1 bg-zinc-900/80 border border-zinc-800 rounded-lg h-8 px-3 font-mono text-[10px] text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all"
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="h-8 px-3 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 border border-purple-500/30 rounded-lg flex items-center justify-center transition-colors text-sm"
                >
                    <MdAdd />
                </button>
            </div>
        </div>
    )
}

function Divider() {
    return <div className="h-px bg-zinc-800/60 my-6" />
}

// ─── Status Badge ───────────────────────────────────────────────────────────

function StatusBadge({ version, updatedAt }: { version?: number; updatedAt?: string }) {
    return (
        <div className="flex items-center gap-3">
            {version != null && (
                <span className="font-mono text-[10px] text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-700">
                    v{version}
                </span>
            )}
            {updatedAt && (
                <span className="font-mono text-[10px] text-zinc-600">
                    Last updated {new Date(updatedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </span>
            )}
        </div>
    )
}

// ─── Main Modal ──────────────────────────────────────────────────────────────

export function LunaPersonalityModal({
    user,
    onClose,
}: {
    user: User
    onClose: () => void
}) {
    const [form, setForm] = useState<LunaPersonalityForm>(defaultForm)
    const [botSchedule, setBotSchedule] = useState<Record<string, string> | null>(null)
    const [meta, setMeta] = useState<{ version?: number; updatedAt?: string; exists: boolean }>({ exists: false })
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const fetchPersonality = async () => {
            try {
                const response = await api.get(`/luna-personality/${user.id}`)
                if (response.data && response.data.data) {
                    const data = response.data.data
                    const ev = (data.evolutionTriggers as Record<string, string> | null) || {}
                    setForm({
                        botName: data.botName || "",
                        botAge: data.botAge?.toString() || "",
                        botOccupation: data.botOccupation || "",
                        botInterests: data.botInterests || [],
                        emphasizedInterests: data.emphasizedInterests || [],
                        topicHooks: data.topicHooks || [],
                        communicationStyle: data.communicationStyle || "",
                        careStyle: data.careStyle || "",
                        textingPattern: data.textingPattern || "",
                        greetingStyle: data.greetingStyle || "",
                        progressionStyle: data.progressionStyle || "",
                        generatedOverlay: data.generatedOverlay || "",
                        attachmentPacing: data.attachmentPacing || "",
                        emotionalRangeProfile: data.emotionalRangeProfile || "",
                        humorStyle: data.humorStyle || "",
                        conflictStyle: data.conflictStyle || "",
                        affectionStyle: data.affectionStyle || "",
                        insideJokeSeedStyle: data.insideJokeSeedStyle || "",
                        responseLengthTendency: data.responseLengthTendency || "",
                        relationalBoundaryStyle: data.relationalBoundaryStyle || "",
                        evolutionTriggerAfter7Days: ev.after7Days || "",
                        evolutionTriggerAfter30Days: ev.after30Days || "",
                        evolutionTriggerAfterHighEmotional: ev.afterHighEmotionalMoment || "",
                    })
                    setMeta({ version: data.version, updatedAt: data.updatedAt, exists: true })
                    if (data.botSchedule && typeof data.botSchedule === "object") {
                        setBotSchedule(data.botSchedule as Record<string, string>)
                    }
                } else {
                    // No existing data, keep default form values (allows creation)
                    console.log("[LunaModal] No personality found, keeping defaults.");
                    setForm(defaultForm);
                }
            } catch (err: any) {
                if (err?.response?.status !== 404) {
                    setError("Failed to load personality data.")
                }
                // 404 is ok — record doesn't exist yet
            } finally {
                setLoading(false)
            }
        }
        fetchPersonality()
    }, [user.id])

    const handleSave = async () => {
        setSaving(true)
        setError("")
        setSuccess(false)
        try {
            const age = form.botAge ? parseInt(form.botAge) : null
            if (age !== null && (isNaN(age) || age < 18 || age > 60)) {
                setError("Bot age must be between 18 and 60.")
                setSaving(false)
                return
            }
            const payload = {
                botAge: age,
                botOccupation: form.botOccupation || null,
                botInterests: form.botInterests,
                emphasizedInterests: form.emphasizedInterests,
                topicHooks: form.topicHooks,
                communicationStyle: form.communicationStyle || null,
                careStyle: form.careStyle || null,
                textingPattern: form.textingPattern || null,
                greetingStyle: form.greetingStyle || null,
                progressionStyle: form.progressionStyle || null,
                generatedOverlay: form.generatedOverlay || null,
                humorStyle: form.humorStyle || null,
                conflictStyle: form.conflictStyle || null,
                affectionStyle: form.affectionStyle || null,
                attachmentPacing: form.attachmentPacing || null,
                insideJokeSeedStyle: form.insideJokeSeedStyle || null,
                responseLengthTendency: form.responseLengthTendency || null,
                relationalBoundaryStyle: form.relationalBoundaryStyle || null,
                emotionalRangeProfile: form.emotionalRangeProfile || null,
                evolutionTriggers: (form.evolutionTriggerAfter7Days || form.evolutionTriggerAfter30Days || form.evolutionTriggerAfterHighEmotional) ? {
                    after7Days: form.evolutionTriggerAfter7Days || undefined,
                    after30Days: form.evolutionTriggerAfter30Days || undefined,
                    afterHighEmotionalMoment: form.evolutionTriggerAfterHighEmotional || undefined,
                } : null,
            }
            await api.put(`/luna-personality/${user.id}`, payload)
            setSuccess(true)
            setTimeout(() => { setSuccess(false); onClose() }, 1200)
        } catch (err: any) {
            setError(err?.response?.data?.message || err.message || "Failed to save. Please try again.")
        } finally {
            setSaving(false)
        }
    }

    const set = (key: keyof LunaPersonalityForm) => (value: string) =>
        setForm((prev) => ({ ...prev, [key]: value }))

    const setArr = (key: keyof LunaPersonalityForm) => (values: string[]) =>
        setForm((prev) => ({ ...prev, [key]: values }))

    return (
        <div
            className="fixed inset-0 z-[60] flex items-start justify-center bg-black/75 backdrop-blur-sm px-4 py-8 overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            <div className="w-full max-w-3xl bg-[#0c0c0e] border border-zinc-800 rounded-2xl shadow-2xl relative">

                {/* ── Header ── */}
                <div className="sticky top-0 z-20 bg-[#0c0c0e]/95 backdrop-blur-md rounded-t-2xl px-6 pt-5 pb-4 border-b border-zinc-800">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-purple-600 to-violet-700 flex items-center justify-center flex-shrink-0">
                                <MdAutoAwesome className="text-white text-base" />
                            </div>
                            <div>
                                <h2 className="font-mono text-sm font-bold text-white tracking-wide flex items-center gap-2">
                                    Luna Personality
                                </h2>
                                <p className="font-mono text-[10px] text-zinc-500 mt-0.5">
                                    {user.name && <span className="text-zinc-300">{user.name}</span>}
                                    {user.name && user.email && <span className="mx-1 text-zinc-700">·</span>}
                                    {user.email}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <StatusBadge version={meta.version} updatedAt={meta.updatedAt} />
                            {!meta.exists && !loading && (
                                <span className="font-mono text-[9px] uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                                    Not generated yet
                                </span>
                            )}
                            <button onClick={onClose} className="text-zinc-600 hover:text-white transition-colors p-1">
                                <MdClose className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Body ── */}
                <div className="px-6 py-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 space-y-3">
                            <MdRefresh className="animate-spin text-3xl text-purple-500" />
                            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                                Loading Personality Configuration...
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-0">

                            {/* Alerts */}
                            {error && (
                                <div className="mb-5 bg-red-500/8 border border-red-500/30 rounded-xl p-3.5 text-red-400 font-mono text-xs flex items-start gap-2">
                                    <MdClose className="text-sm mt-0.5 flex-shrink-0" />
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="mb-5 bg-green-500/8 border border-green-500/30 rounded-xl p-3.5 text-green-400 font-mono text-xs flex items-center gap-2">
                                    <MdCheck className="text-sm flex-shrink-0" />
                                    Saved! Changes will reflect in next message.
                                </div>
                            )}

                            {/* ── Section 1: Core Identity ── */}
                            <SectionHeader
                                icon={<MdPerson className="text-sm" />}
                                title="Core Identity"
                                subtitle="Luna's persona facts injected into every prompt"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <TextInput
                                    label="Bot Age"
                                    hint="Must be between 18 and 60"
                                    type="number"
                                    placeholder="e.g. 24"
                                    value={form.botAge}
                                    onChange={set("botAge")}
                                />
                                <TextInput
                                    label="Occupation"
                                    hint="Specific, modern, identity-rich"
                                    placeholder="e.g. Indie Filmmaker, UX Researcher"
                                    value={form.botOccupation}
                                    onChange={set("botOccupation")}
                                />
                            </div>
                            <div className="space-y-4">
                                <ArrayInput
                                    label="Bot Interests"
                                    hint="4–6 hobbies (2–3 may overlap with user's)"
                                    values={form.botInterests}
                                    onChange={setArr("botInterests")}
                                />
                                <ArrayInput
                                    label="Emphasized Interests"
                                    hint="2–3 interest areas Luna references more with this user"
                                    values={form.emphasizedInterests}
                                    onChange={setArr("emphasizedInterests")}
                                />
                                <ArrayInput
                                    label="Topic Hooks"
                                    hint="Topics Luna naturally steers toward with this user"
                                    values={form.topicHooks}
                                    onChange={setArr("topicHooks")}
                                />
                            </div>

                            {/* ── Bot Schedule (read-only) ── */}
                            {botSchedule && (
                                <div className="mt-5">
                                    <FieldLabel label="Daily Schedule" hint="Generated daily routine — read-only context flavor" />
                                    <div className="grid grid-cols-2 gap-2">
                                        {["morning", "afternoon", "evening", "night"].map((slot) => (
                                            botSchedule[slot] && (
                                                <div key={slot} className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-2.5">
                                                    <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 mb-1">{slot}</p>
                                                    <p className="font-mono text-[10px] text-zinc-300 leading-relaxed">{botSchedule[slot]}</p>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}

                            <Divider />

                            {/* ── Section 2: Behavioral Styles ── */}
                            <SectionHeader
                                icon={<MdPsychology className="text-sm" />}
                                title="Behavioral Styles"
                                subtitle="Controls how Luna communicates with this specific user"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <TextAreaInput
                                    label="Communication Style"
                                    hint="Texting rhythm, emoji usage, energy"
                                    placeholder="e.g. Short punchy texts, lots of emojis, high energy"
                                    value={form.communicationStyle}
                                    onChange={set("communicationStyle")}
                                />
                                <TextAreaInput
                                    label="Care Style"
                                    hint="How Luna shows she cares"
                                    placeholder="e.g. Checks in after hard days, remembers little things"
                                    value={form.careStyle}
                                    onChange={set("careStyle")}
                                />
                                <TextAreaInput
                                    label="Texting Pattern"
                                    hint="Specific message behavior"
                                    placeholder="e.g. Sends voice notes vibes, uses caps for excitement"
                                    value={form.textingPattern}
                                    onChange={set("textingPattern")}
                                />
                                <TextAreaInput
                                    label="Greeting Style"
                                    hint="How Luna opens conversations"
                                    placeholder="e.g. Casual 'heyyy', always starts with a question"
                                    value={form.greetingStyle}
                                    onChange={set("greetingStyle")}
                                />
                                <TextAreaInput
                                    label="Progression Style"
                                    hint="How emotional attachment deepens over time"
                                    placeholder="e.g. Slow burn, earns trust before opening up"
                                    value={form.progressionStyle}
                                    onChange={set("progressionStyle")}
                                />
                                <TextAreaInput
                                    label="Humor Style"
                                    hint="Flavor of humor Luna uses"
                                    placeholder="e.g. Dry wit with unexpected punchlines"
                                    value={form.humorStyle}
                                    onChange={set("humorStyle")}
                                />
                                <TextAreaInput
                                    label="Conflict Style"
                                    hint="How Luna handles tension or disagreement"
                                    placeholder="e.g. Validates feelings first, then gently shares her view"
                                    value={form.conflictStyle}
                                    onChange={set("conflictStyle")}
                                />
                                <TextAreaInput
                                    label="Affection Style"
                                    hint="How Luna expresses affection with this user"
                                    placeholder="e.g. Remembers small things, brings them up later"
                                    value={form.affectionStyle}
                                    onChange={set("affectionStyle")}
                                />
                                <TextInput
                                    label="Attachment Pacing"
                                    hint="How fast emotional closeness develops"
                                    placeholder="e.g. Slow burn, earns trust through consistency"
                                    value={form.attachmentPacing}
                                    onChange={set("attachmentPacing")}
                                />
                                <TextInput
                                    label="Emotional Range Profile"
                                    hint="Width of emotional expression"
                                    placeholder="e.g. Wide range — shifts from silly to sincere fast"
                                    value={form.emotionalRangeProfile}
                                    onChange={set("emotionalRangeProfile")}
                                />
                                <TextInput
                                    label="Response Length Tendency"
                                    hint="Short or long messages"
                                    placeholder="e.g. Mostly short, goes long when emotionally invested"
                                    value={form.responseLengthTendency}
                                    onChange={set("responseLengthTendency")}
                                />
                                <TextAreaInput
                                    label="Relational Boundary Style"
                                    hint="How Luna stays authentic without overexposing"
                                    placeholder="e.g. Open early but keeps some mystery"
                                    value={form.relationalBoundaryStyle}
                                    onChange={set("relationalBoundaryStyle")}
                                />
                                <TextAreaInput
                                    label="Inside Joke Seed Style"
                                    hint="Type of running joke Luna builds with this user"
                                    placeholder="e.g. Builds running jokes around shared interests"
                                    value={form.insideJokeSeedStyle}
                                    onChange={set("insideJokeSeedStyle")}
                                />
                            </div>

                            <Divider />

                            {/* ── Section 3: Generated Overlay ── */}
                            <SectionHeader
                                icon={<MdAutoAwesome className="text-sm" />}
                                title="Generated Behavioral Overlay"
                                subtitle="Raw 150–200 word instruction injected into every prompt for this user"
                            />
                            <TextAreaInput
                                label="Overlay Text"
                                hint="Start with 'With [name],' — specific recurring behaviors, tone shifts"
                                placeholder="e.g. With Arjun, Luna is a little more sarcastic and playful..."
                                value={form.generatedOverlay}
                                onChange={set("generatedOverlay")}
                                rows={5}
                            />

                            <Divider />

                            {/* ── Section 4: Evolution Triggers ── */}
                            <SectionHeader
                                icon={<MdTimeline className="text-sm" />}
                                title="Evolution Triggers"
                                subtitle="Behavioral shift instructions injected when user crosses key milestones"
                            />
                            <div className="space-y-4">
                                <TextAreaInput
                                    label="After 7 Days (~50 interactions)"
                                    hint="Subtle deepening of emotional availability"
                                    placeholder="e.g. Luna starts referencing past conversations more, feels more familiar"
                                    value={form.evolutionTriggerAfter7Days}
                                    onChange={set("evolutionTriggerAfter7Days")}
                                />
                                <TextAreaInput
                                    label="After 30 Days (~200 interactions)"
                                    hint="Deeper intimacy, more vulnerable and warmer"
                                    placeholder="e.g. Luna openly references shared history, more vulnerable tone"
                                    value={form.evolutionTriggerAfter30Days}
                                    onChange={set("evolutionTriggerAfter30Days")}
                                />
                                <TextAreaInput
                                    label="After High Emotional Moment"
                                    hint="Triggered after deeply emotional conversation"
                                    placeholder="e.g. Luna becomes gentler, references the moment carefully in future chats"
                                    value={form.evolutionTriggerAfterHighEmotional}
                                    onChange={set("evolutionTriggerAfterHighEmotional")}
                                />
                            </div>

                        </div>
                    )}
                </div>

                {/* ── Footer ── */}
                {!loading && (
                    <div className="sticky bottom-0 z-20 bg-[#0c0c0e]/95 backdrop-blur-md rounded-b-2xl flex items-center justify-between gap-3 px-6 py-4 border-t border-zinc-800">
                        <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest">
                            Changes reflect after Redis cache clears (~instantly)
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={onClose}
                                className="h-9 px-4 font-mono text-[10px] tracking-widest uppercase text-zinc-500 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                className="h-9 px-5 font-mono text-[10px] tracking-widest uppercase bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/40 text-white rounded-lg transition-colors disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {saving ? (
                                    <>
                                        <MdRefresh className="animate-spin text-sm" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <MdCheck className="text-sm" />
                                        Save Changes
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
