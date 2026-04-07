import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Search,
  Send,
  Forward,
  Archive,
  Trash2,
  Tags,
  Clock3,
  Bell,
  User,
  Plus,
  CheckCircle2,
  Wand2,
  Filter,
  Calendar,
  ArrowRight,
  Sparkles,
  Zap,
  Eye,
  Pause,
  Play,
} from "lucide-react";

// Basic styled components using inline styles
const Card = ({ children, style = {} }: any) => (
  <div style={{ borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', ...style }}>
    {children}
  </div>
);

const CardHeader = ({ children, style = {} }: any) => (
  <div style={{ padding: '24px', borderBottom: '1px solid #e5e7eb', ...style }}>{children}</div>
);

const CardTitle = ({ children, style = {} }: any) => (
  <h2 style={{ fontSize: '18px', fontWeight: 600, ...style }}>{children}</h2>
);

const CardDescription = ({ children, style = {} }: any) => (
  <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px', ...style }}>{children}</p>
);

const CardContent = ({ children, style = {} }: any) => (
  <div style={{ padding: '24px', ...style }}>{children}</div>
);

const Button = ({ children, variant = 'default', style = {}, ...props }: any) => {
  const variants = {
    default: { backgroundColor: '#2563eb', color: 'white', cursor: 'pointer' },
    secondary: { backgroundColor: '#e5e7eb', color: '#111827', cursor: 'pointer' },
    outline: { border: '1px solid #d1d5db', backgroundColor: 'transparent', cursor: 'pointer' },
  };
  return (
    <button
      style={{ padding: '8px 16px', borderRadius: '6px', fontWeight: 500, border: 'none', transition: 'all 0.2s', ...variants[variant], ...style }}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ style = {}, ...props }: any) => (
  <input
    style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '16px', fontFamily: 'inherit', ...style }}
    {...props}
  />
);

const Textarea = ({ style = {}, ...props }: any) => (
  <textarea
    style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', fontFamily: 'monospace', ...style }}
    {...props}
  />
);

const Badge = ({ children, variant = 'default', style = {} }: any) => {
  const variants = {
    default: { backgroundColor: '#dbeafe', color: '#1e40af' },
    secondary: { backgroundColor: '#f3f4f6', color: '#1f2937' },
    outline: { border: '1px solid #d1d5db', backgroundColor: 'transparent' },
  };
  return (
    <span style={{ display: 'inline-block', padding: '4px 8px', fontSize: '12px', fontWeight: 500, borderRadius: '9999px', ...variants[variant], ...style }}>
      {children}
    </span>
  );
};

const Switch = ({ checked = false, onCheckedChange }: any) => (
  <button
    onClick={() => onCheckedChange?.(!checked)}
    style={{ position: 'relative', display: 'inline-block', width: '44px', height: '24px', borderRadius: '9999px', backgroundColor: checked ? '#2563eb' : '#d1d5db', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
  >
    <span style={{ position: 'absolute', top: '2px', left: checked ? '24px' : '2px', width: '20px', height: '20px', borderRadius: '9999px', backgroundColor: 'white', transition: 'left 0.2s' }} />
  </button>
);

const Label = ({ children, style = {} }: any) => (
  <label style={{ fontSize: '14px', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '4px', ...style }}>{children}</label>
);

const Tabs = ({ children, defaultValue, ...props }: any) => {
  const [active, setActive] = useState(defaultValue);
  return (
    <div {...props}>
      {React.Children.map(children, (child: any) =>
        React.isValidElement(child) ? React.cloneElement(child, { active, setActive } as any) : child
      )}
    </div>
  );
};

const TabsList = ({ children, style = {} }: any) => (
  <div style={{ display: 'inline-flex', gap: '8px', padding: '4px', backgroundColor: '#f3f4f6', borderRadius: '8px', ...style }} role="tablist">
    {children}
  </div>
);

const TabsTrigger = ({ value, children, active, setActive, style = {} }: any) => (
  <button
    onClick={() => setActive(value)}
    style={{ padding: '8px 16px', borderRadius: '6px', fontWeight: 500, border: 'none', cursor: 'pointer', backgroundColor: active === value ? '#fff' : 'transparent', color: active === value ? '#111827' : '#4b5563', transition: 'all 0.2s', ...style }}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children, active, style = {} }: any) =>
  active === value ? <div style={{ marginTop: '16px', ...style }}>{children}</div> : null;

const Select = ({ children, value, onValueChange, ...props }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <div {...props}>
      {React.Children.map(children, (child: any) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { value, onValueChange, open, setOpen } as any)
          : child
      )}
    </div>
  );
};

const SelectTrigger = ({ children, open, setOpen, style = {} }: any) => (
  <button
    onClick={() => setOpen?.(!open)}
    style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '16px', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', cursor: 'pointer', ...style }}
  >
    {children}
  </button>
);

const SelectValue = ({ placeholder = 'Select...' }: any) => <span>{placeholder}</span>;

const SelectContent = ({ children, open, setOpen, ...props }: any) =>
  open ? (
    <div style={{ position: 'absolute', marginTop: '4px', backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '6px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', zIndex: 50 }} {...props}>
      {React.Children.map(children, (child: any) =>
        React.isValidElement(child) ? React.cloneElement(child, { setOpen } as any) : child
      )}
    </div>
  ) : null;

const SelectItem = ({ value, children, onValueChange, setOpen, style = {} }: any) => (
  <button
    onClick={() => {
      onValueChange?.(value);
      setOpen?.(false);
    }}
    style={{ width: '100%', padding: '8px 12px', textAlign: 'left', fontSize: '14px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', transition: 'background-color 0.2s', ...style }}
  >
    {children}
  </button>
);

const Separator = ({ style = {} }: any) => <div style={{ backgroundColor: '#e5e7eb', height: '1px', width: '100%', ...style }} />;

const actions = [
  { key: "search", label: "Search", icon: Search },
  { key: "read", label: "Read", icon: Mail },
  { key: "draft", label: "Draft", icon: Wand2 },
  { key: "send", label: "Send", icon: Send },
  { key: "forward", label: "Forward", icon: Forward },
  { key: "archive", label: "Archive", icon: Archive },
  { key: "delete", label: "Delete", icon: Trash2 },
  { key: "label", label: "Label", icon: Tags },
  { key: "schedule", label: "Schedule", icon: Clock3 },
  { key: "contacts", label: "Contacts", icon: User },
];

const starterFlows = [
  {
    name: "NST Daily Digest",
    trigger: "Every weekday at 7:30 AM",
    filter: "from:(@newtonschool.co OR @nst.edu) newer_than:1d",
    action: "Summarize all Newton School of Technology emails",
  },
  {
    name: "Admissions & Onboarding",
    trigger: "On new email",
    filter: 'subject:(admission OR onboarding OR orientation) from:(@newtonschool.co OR @nst.edu)',
    action: "Label Important and mark unread",
  },
  {
    name: "Class & Assignment Tracker",
    trigger: "On new email",
    filter: 'subject:(assignment OR project OR deadline OR class) from:(@newtonschool.co OR @nst.edu)',
    action: "Label Academics",
  },
  {
    name: "Placement & Internship Alerts",
    trigger: "On new email",
    filter: 'subject:(internship OR placement OR opportunity OR hiring) from:(@newtonschool.co OR @nst.edu)',
    action: "Label Career",
  },
  {
    name: "Fee & Payment Reminder",
    trigger: "On new email",
    filter: 'subject:(fee OR payment OR invoice OR receipt) from:(@newtonschool.co OR @nst.edu)',
    action: "Label Finance and remind Shourya Singh",
  },
  {
    name: "Event & Workshop Updates",
    trigger: "Every evening at 6:00 PM",
    filter: 'subject:(event OR workshop OR seminar OR hackathon) newer_than:1d',
    action: "Summarize upcoming campus activities",
  },
];

type ActionKey =
  | "search"
  | "read"
  | "draft"
  | "send"
  | "forward"
  | "archive"
  | "delete"
  | "label"
  | "schedule"
  | "contacts";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ borderRadius: '16px', border: '1px solid #e5e7eb', backgroundColor: 'rgba(255,255,255,0.8)', padding: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
      <div style={{ fontSize: '14px', color: '#6b7280' }}>{label}</div>
      <div style={{ marginTop: '4px', fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em' }}>{value}</div>
    </div>
  );
}

function ActionChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderRadius: '9999px', border: '1px solid #e5e7eb', backgroundColor: '#fff', padding: '8px 12px', fontSize: '14px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
      <Icon style={{ width: '16px', height: '16px' }} />
      <span>{label}</span>
    </div>
  );
}

function FlowCard({
  name,
  trigger,
  filter,
  action,
  onUse,
}: {
  name: string;
  trigger: string;
  filter: string;
  action: string;
  onUse: () => void;
}) {
  return (
    <Card>
      <CardContent style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>{name}</div>
            <div style={{ marginTop: '4px', fontSize: '14px', color: '#6b7280' }}>{trigger}</div>
          </div>
          <Button variant="outline" style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '8px' }} onClick={onUse}>
            Use
          </Button>
        </div>

        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
          <div>
            <span style={{ fontWeight: 500 }}>Filter:</span> {filter}
          </div>
          <div>
            <span style={{ fontWeight: 500 }}>Action:</span> {action}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


type TriggerMode = "new_email" | "hourly" | "daily" | "weekly";
type BuilderStepType =
  | "summarize"
  | "label"
  | "mark_unread"
  | "draft_reply"
  | "forward"
  | "archive"
  | "delete"
  | "notify"
  | "webhook"
  | "delay";

type BuilderStep = {
  id: string;
  type: BuilderStepType;
  config: Record<string, string | boolean>;
};

type AutomationFlow = {
  id: string;
  name: string;
  enabled: boolean;
  trigger: TriggerMode;
  scheduleText: string;
  query: string;
  scope: "gmail" | "workspace" | "custom";
  description: string;
  steps: BuilderStep[];
  processedToday: number;
  lastRun: string;
  successRate: number;
};

type EmailItem = {
  id: string;
  from: string;
  subject: string;
  preview: string;
  time: string;
  tags: string[];
  status: "new" | "processed" | "flagged";
};
const actionTypeMeta: Record<BuilderStepType, { label: string; icon: React.ComponentType<{ className?: string }> }> = {
  summarize: { label: "Summarize", icon: Sparkles },
  label: { label: "Apply Label", icon: Tags },
  mark_unread: { label: "Mark Unread", icon: Mail },
  draft_reply: { label: "Draft Reply", icon: Wand2 },
  forward: { label: "Forward", icon: Forward },
  archive: { label: "Archive", icon: Archive },
  delete: { label: "Delete", icon: Trash2 },
  notify: { label: "Notify", icon: Bell },
  webhook: { label: "Webhook", icon: Zap },
  delay: { label: "Delay", icon: Clock3 },
};

const initialEmails: EmailItem[] = [
  {
    id: "e1",
    from: "placements@nst.edu",
    subject: "New internship opportunity with partner startup",
    preview: "Applications close Friday. Students from CSE and AI cohorts are encouraged to apply...",
    time: "08:42",
    tags: ["Career", "New"],
    status: "new",
  },
  {
    id: "e2",
    from: "academics@newtonschool.co",
    subject: "Assignment 4 deadline extended",
    preview: "The DSA assignment deadline has been moved to Monday 11:59 PM due to lab overlap...",
    time: "09:18",
    tags: ["Academics"],
    status: "processed",
  },
  {
    id: "e3",
    from: "finance@nst.edu",
    subject: "Semester fee payment reminder",
    preview: "This is a reminder that the next installment is due on the 10th. Please keep your receipt safe...",
    time: "11:06",
    tags: ["Finance", "Flagged"],
    status: "flagged",
  },
  {
    id: "e4",
    from: "events@nst.edu",
    subject: "Weekend hackathon registrations are open",
    preview: "Join teams across campus for a 24-hour build sprint, mentorship, and sponsor prizes...",
    time: "13:34",
    tags: ["Events"],
    status: "new",
  },
];

const defaultFlows: AutomationFlow[] = [
  {
    id: "f1",
    name: "NST Daily Digest",
    enabled: true,
    trigger: "daily",
    scheduleText: "Weekdays • 7:30 AM",
    query: "from:(@newtonschool.co OR @nst.edu) newer_than:1d",
    scope: "workspace",
    description: "Summarizes important academic, campus, and ops emails every morning.",
    steps: [
      { id: "s1", type: "summarize", config: { format: "bullet summary" } },
      { id: "s2", type: "notify", config: { channel: "dashboard" } },
    ],
    processedToday: 18,
    lastRun: "Today • 07:30",
    successRate: 99,
  },
  {
    id: "f2",
    name: "Placement & Internship Alerts",
    enabled: true,
    trigger: "new_email",
    scheduleText: "Instant",
    query: "subject:(internship OR placement OR opportunity OR hiring) from:(@newtonschool.co OR @nst.edu)",
    scope: "workspace",
    description: "Auto-labels career updates, flags urgency, and keeps them visible.",
    steps: [
      { id: "s3", type: "label", config: { value: "Career" } },
      { id: "s4", type: "mark_unread", config: { enabled: true } },
      { id: "s5", type: "notify", config: { channel: "mobile" } },
    ],
    processedToday: 6,
    lastRun: "Today • 08:42",
    successRate: 96,
  },
  {
    id: "f3",
    name: "Fee & Payment Reminder",
    enabled: false,
    trigger: "new_email",
    scheduleText: "Instant",
    query: "subject:(fee OR payment OR invoice OR receipt) from:(@newtonschool.co OR @nst.edu)",
    scope: "workspace",
    description: "Keeps finance mails together and drafts reminder messages automatically.",
    steps: [
      { id: "s6", type: "label", config: { value: "Finance" } },
      { id: "s7", type: "draft_reply", config: { tone: "formal" } },
      { id: "s8", type: "notify", config: { channel: "email" } },
    ],
    processedToday: 2,
    lastRun: "Yesterday • 18:14",
    successRate: 94,
  }
];
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function makeId(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}

function StepPill({ step }: { step: BuilderStep }) {
  const meta = actionTypeMeta[step.type];
  const Icon = meta.icon;
  return (
    <div className="flex items-center gap-2 rounded-xl border bg-slate-50 px-3 py-2 text-sm">
      <Icon className="h-4 w-4 text-slate-600" />
      <span className="font-medium">{meta.label}</span>
      {step.type === "label" && typeof step.config.value === "string" ? (
        <Badge variant="secondary" className="rounded-full">{step.config.value}</Badge>
      ) : null}
      {step.type === "notify" && typeof step.config.channel === "string" ? (
        <Badge variant="secondary" className="rounded-full">{step.config.channel}</Badge>
      ) : null}
    </div>
  );
}
function EmailRow({ item }: { item: EmailItem }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-sm">
      <div
        className={cn(
          "mt-1 h-2.5 w-2.5 rounded-full",
          item.status === "new" && "bg-emerald-500",
          item.status === "processed" && "bg-slate-300",
          item.status === "flagged" && "bg-amber-500"
        )}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <div className="truncate text-sm font-medium text-slate-900">{item.from}</div>
          <div className="text-xs text-slate-500">{item.time}</div>
        </div>
        <div className="mt-1 truncate text-sm font-semibold">{item.subject}</div>
        <div className="mt-1 line-clamp-2 text-sm text-slate-500">{item.preview}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowOverviewCard({
  flow,
  onToggle,
  onSelect,
}: {
  flow: AutomationFlow;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="rounded-2xl border shadow-sm">
        <CardContent className="p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-lg font-semibold tracking-tight">{flow.name}</div>
                <Badge className="rounded-full" variant={flow.enabled ? "default" : "secondary"}>
                  {flow.enabled ? "Active" : "Paused"}
                </Badge>
                <Badge variant="outline" className="rounded-full">{flow.scheduleText}</Badge>
              </div>
              <p className="max-w-2xl text-sm text-slate-500">{flow.description}</p>
              <div className="flex flex-wrap gap-2">
                {flow.steps.map((step) => (
                  <StepPill key={step.id} step={step} />
                ))}
              </div>
              <div className="text-xs text-slate-500">Rule query: {flow.query}</div>
            </div>

            <div className="grid min-w-[240px] grid-cols-2 gap-3">
              <div className="rounded-2xl border bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Processed today</div>
                <div className="mt-1 text-xl font-semibold">{flow.processedToday}</div>
              </div>
              <div className="rounded-2xl border bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Success rate</div>
                <div className="mt-1 text-xl font-semibold">{flow.successRate}%</div>
              </div>
              <div className="col-span-2 rounded-2xl border bg-slate-50 p-3 text-xs text-slate-500">
                Last run: <span className="font-medium text-slate-700">{flow.lastRun}</span>
              </div>
              <div className="col-span-2 flex gap-2">
                <Button className="flex-1 rounded-xl" variant="outline" onClick={() => onSelect(flow.id)}>
                  <Eye className="mr-2 h-4 w-4" />
                  Inspect
                </Button>
                <Button className="rounded-xl" variant={flow.enabled ? "secondary" : "default"} onClick={() => onToggle(flow.id)}>
                  {flow.enabled ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                  {flow.enabled ? "Pause" : "Run"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function BuilderStepEditor({
  step,
  onChange,
}: {
  step: BuilderStep;
  onChange: (step: BuilderStep) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {step.type === "label" ? (
          <div className="space-y-2">
            <Label>Label name</Label>
            <Input
              value={String(step.config.value ?? "")}
              onChange={(e) => onChange({ ...step, config: { ...step.config, value: e.target.value } })}
              placeholder="e.g., Important, Follow-up"
            />
          </div>
        ) : null}

        {step.type === "notify" ? (
          <div className="space-y-2">
            <Label>Notification channel</Label>
            <Select
              value={String(step.config.channel ?? "")}
              onValueChange={(value) => onChange({ ...step, config: { ...step.config, channel: value } })}
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select channel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="mobile">Mobile push</SelectItem>
                <SelectItem value="dashboard">Dashboard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ) : null}

        {step.type === "draft_reply" ? (
          <div className="space-y-2">
            <Label>Draft mode</Label>
            <Select
              value={String(step.config.mode ?? "")}
              onValueChange={(value) => onChange({ ...step, config: { ...step.config, mode: value } })}
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="suggest">Suggestion only</SelectItem>
                <SelectItem value="auto">Auto-create draft</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ) : null}

        {step.type === "summarize" ? (
          <div className="space-y-2 md:col-span-2">
            <Label>Summary instructions</Label>
            <Textarea
              value={String(step.config.format ?? "")}
              onChange={(e) => onChange({ ...step, config: { ...step.config, format: e.target.value } })}
              placeholder="Bullet summary with priority and next action"
              className="min-h-[96px]"
            />
          </div>
        ) : null}

        {step.type === "forward" ? (
          <>
            <div className="space-y-2">
              <Label>Forward to</Label>
              <Input
                value={String(step.config.to ?? "")}
                onChange={(e) => onChange({ ...step, config: { ...step.config, to: e.target.value } })}
                placeholder="name@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label>Note</Label>
              <Input
                value={String(step.config.note ?? "")}
                onChange={(e) => onChange({ ...step, config: { ...step.config, note: e.target.value } })}
                placeholder="FYI - automated forward"
              />
            </div>
          </>
        ) : null}

        {step.type === "delay" ? (
          <div className="space-y-2 md:col-span-2">
            <Label>Delay before next step</Label>
            <Input
              value={String(step.config.duration ?? "15 minutes")}
              onChange={(e) => onChange({ ...step, config: { ...step.config, duration: e.target.value } })}
              placeholder="15 minutes"
            />
          </div>
        ) : null}

        {step.type === "webhook" ? (
          <div className="space-y-2 md:col-span-2">
            <Label>Webhook endpoint</Label>
            <Input
              value={String(step.config.url ?? "")}
              onChange={(e) => onChange({ ...step, config: { ...step.config, url: e.target.value } })}
              placeholder="https://example.com/hooks/email"
            />
          </div>
        ) : null}

        {["archive", "delete", "mark_unread"].includes(step.type) ? (
          <div className="md:col-span-2 rounded-xl border bg-slate-50 p-3 text-sm text-slate-500">
            This is a direct mailbox action. It will run automatically whenever the filter matches.
          </div>
        ) : null}
      </div>
    </div>
  );
}


export default function EmailAutomationTool() {
  const [flows, setFlows] = useState<AutomationFlow[]>(defaultFlows);
  const [emails] = useState<EmailItem[]>(initialEmails);
  const [selectedFlowId, setSelectedFlowId] = useState<string>(defaultFlows[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterState, setFilterState] = useState<"all" | "active" | "paused">("all");

  const [builderName, setBuilderName] = useState("New automated workflow");
  const [builderTrigger, setBuilderTrigger] = useState<TriggerMode>("new_email");
  const [builderScheduleText, setBuilderScheduleText] = useState("Instant");
  const [builderQuery, setBuilderQuery] = useState('from:(@newtonschool.co OR @nst.edu)');
  const [builderScope, setBuilderScope] = useState<"gmail" | "workspace" | "custom">("workspace");
  const [builderDescription, setBuilderDescription] = useState(
    "Watches inbox activity and automatically performs a sequence of actions."
  );
  const [builderEnabled, setBuilderEnabled] = useState(true);
  const [builderSteps, setBuilderSteps] = useState<BuilderStep[]>([
    { id: makeId("step"), type: "label", config: { value: "Important" } },
    { id: makeId("step"), type: "notify", config: { channel: "dashboard" } },
  ]);

  const selectedFlow = useMemo(
    () => flows.find((flow) => flow.id === selectedFlowId) ?? flows[0],
    [flows, selectedFlowId]
  );

  const filteredFlows = useMemo(() => {
    return flows.filter((flow) => {
      const matchesText =
        !searchQuery ||
        flow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flow.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
        flow.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState =
        filterState === "all" ||
        (filterState === "active" && flow.enabled) ||
        (filterState === "paused" && !flow.enabled);

      return matchesText && matchesState;
    });
  }, [flows, searchQuery, filterState]);

  const totalProcessed = useMemo(() => flows.reduce((sum, flow) => sum + flow.processedToday, 0), [flows]);
  const activeCount = useMemo(() => flows.filter((flow) => flow.enabled).length, [flows]);
  const avgSuccess = useMemo(
    () => Math.round(flows.reduce((sum, flow) => sum + flow.successRate, 0) / flows.length),
    [flows]
  );

  const toggleFlow = (id: string) => {
    setFlows((current) =>
      current.map((flow) => (flow.id === id ? { ...flow, enabled: !flow.enabled } : flow))
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '24px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', letterSpacing: '-0.02em' }}>Email Automation</h1>
          <p style={{ color: '#4b5563' }}>Automate your email workflows with intelligent rules and actions.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <Stat label="Total processed" value={String(totalProcessed)} />
          <Stat label="Active flows" value={String(activeCount)} />
          <Stat label="Avg success rate" value={`${avgSuccess}%`} />
        </div>

        <Tabs defaultValue="overview">
          <TabsList style={{ width: '100%' }}>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="starter">Starter templates</TabsTrigger>
            <TabsTrigger value="builder">Build new</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Card>
              <CardHeader>
                <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Search style={{ width: '20px', height: '20px' }} />
                  Your automation flows
                </CardTitle>
                <CardDescription>Manage and monitor all your active workflows.</CardDescription>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Input
                    placeholder="Search workflows..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <Select value={filterState} onValueChange={(value: any) => setFilterState(value)}>
                    <SelectTrigger style={{ width: '120px' }}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {filteredFlows.map((flow) => (
                    <FlowOverviewCard key={flow.id} flow={flow} onToggle={toggleFlow} onSelect={setSelectedFlowId} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="starter" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {starterFlows.map((flow, i) => (
              <FlowCard
                key={i}
                name={flow.name}
                trigger={flow.trigger}
                filter={flow.filter}
                action={flow.action}
                onUse={() => {
                  setBuilderName(flow.name);
                  setBuilderQuery(flow.filter);
                }}
              />
            ))}
          </TabsContent>

          <TabsContent value="builder" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Card>
              <CardHeader>
                <CardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Plus style={{ width: '20px', height: '20px' }} />
                  Build a new workflow
                </CardTitle>
              </CardHeader>
              <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <Label>Workflow name</Label>
                  <Input value={builderName} onChange={(e) => setBuilderName(e.target.value)} />
                </div>
                <Button style={{ width: '100%' }}>Create Workflow</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
