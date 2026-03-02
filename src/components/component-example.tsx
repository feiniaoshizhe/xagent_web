"use client"

import { Example, ExampleWrapper } from "@/components/example"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import {
  BellIcon,
  BotIcon,
  ImageIcon,
  LayersIcon,
  PlugIcon,
  RocketIcon,
  SettingsIcon,
  ShieldIcon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  WorkflowIcon,
} from "lucide-react"

type SidebarItem = {
  title: string
  description: string
  icon: LucideIcon
  badge?: {
    label: string
    variant?: "default" | "secondary" | "outline"
    className?: string
  }
  metric?: string
  active?: boolean
}

type SidebarSection = {
  title: string
  items: SidebarItem[]
}

type Highlight = {
  label: string
  value: string
  subLabel: string
  trend: string
}

type PipelineStage = {
  title: string
  type: string
  summary: string
  status: string
  progress: number
  badgeClassName: string
}

type Activity = {
  title: string
  description: string
  tag: string
  time: string
  metric: string
}

const sidebarSections: SidebarSection[] = [
  {
    title: "创作工作台",
    items: [
      {
        title: "Chatbot 对话编排",
        description: "联通知识库・函数调用・渠道发布",
        icon: BotIcon,
        badge: { label: "Live", variant: "secondary" },
        metric: "42 个在线 Bot",
        active: true,
      },
      {
        title: "文生图 Studio",
        description: "Diffusion / VLM 混合 + 品牌控制",
        icon: ImageIcon,
        badge: {
          label: "V4",
          variant: "outline",
          className: "border-violet-200 bg-violet-500/10 text-violet-600 dark:border-transparent dark:text-violet-200",
        },
        metric: "18 套提示词模板",
      },
      {
        title: "文生视频 Pipeline",
        description: "脚本→镜头→渲染一体化",
        icon: SparklesIcon,
        badge: {
          label: "Beta",
          variant: "outline",
          className: "border-amber-200 bg-amber-500/10 text-amber-600 dark:border-transparent dark:text-amber-200",
        },
        metric: "3 条待审批流程",
      },
      {
        title: "图生视频 Fusion",
        description: "上传关键帧・自动补帧",
        icon: LayersIcon,
        badge: {
          label: "New",
          variant: "secondary",
        },
        metric: "12 张关键帧",
      },
    ],
  },
  {
    title: "视频资产与分发",
    items: [
      {
        title: "AI 视频生成任务",
        description: "口播主播 + TTS + 字幕校对",
        icon: VideoIcon,
        metric: "8 个渲染中",
      },
      {
        title: "素材与知识库",
        description: "脚本、品牌资产一处管理",
        icon: UsersIcon,
        metric: "5 个品牌空间",
      },
      {
        title: "多渠道分发编排",
        description: "抖音 / B 站 / YouTube 一键投放",
        icon: RocketIcon,
        metric: "4 条已排期任务",
      },
    ],
  },
  {
    title: "自动化 & 治理",
    items: [
      {
        title: "工作流与触发器",
        description: "Webhook + 定时器 + 条件分支",
        icon: WorkflowIcon,
        badge: {
          label: "Flow",
          variant: "outline",
          className: "border-sky-200 bg-sky-500/10 text-sky-600 dark:border-transparent dark:text-sky-200",
        },
      },
      {
        title: "插件与数据连接器",
        description: "CRM、Slack、飞书、S3",
        icon: PlugIcon,
      },
      {
        title: "安全 & 审批",
        description: "内容评级、敏感词、账号权限",
        icon: ShieldIcon,
      },
      {
        title: "工作区设置",
        description: "成员、计费、通知策略",
        icon: SettingsIcon,
      },
    ],
  },
]

const usageEntries = [
  { label: "多模态算力小时", used: 62, total: 80, unit: "h" },
  { label: "生成资产存储", used: 2.1, total: 5, unit: "TB" },
]

const creationHighlights: Highlight[] = [
  {
    label: "Chatbot 响应量",
    value: "1.2k",
    subLabel: "本周多轮对话",
    trend: "+18% WoW",
  },
  {
    label: "文生图成功率",
    value: "92%",
    subLabel: "4K 输出通过率",
    trend: "+4 pts",
  },
  {
    label: "AI 视频渲染时长",
    value: "7.8 min",
    subLabel: "平均完播时间",
    trend: "-1.2 min",
  },
]

const pipelineStages: PipelineStage[] = [
  {
    title: "文生图 · Moodboard",
    type: "Text-to-Image",
    summary: "多提示词融合 + 品牌色板",
    status: "已完成",
    progress: 100,
    badgeClassName: "border-none bg-emerald-500/15 text-emerald-600 dark:text-emerald-200",
  },
  {
    title: "文生视频 · StoryForge",
    type: "Text-to-Video",
    summary: "脚本 6 镜头 / 4K",
    status: "渲染中",
    progress: 68,
    badgeClassName: "border-none bg-amber-500/15 text-amber-600 dark:text-amber-200",
  },
  {
    title: "图生视频 · Fusion",
    type: "Image-to-Video",
    summary: "关键帧 3 张 / 32 秒",
    status: "待排期",
    progress: 42,
    badgeClassName: "border-none bg-slate-500/15 text-slate-600 dark:text-slate-200",
  },
  {
    title: "AI 视频生成 · Avatar Studio",
    type: "AI Video",
    summary: "口播主播 + 字幕 + 配乐",
    status: "质检中",
    progress: 54,
    badgeClassName: "border-none bg-sky-500/15 text-sky-600 dark:text-sky-200",
  },
]

const activityFeed: Activity[] = [
  {
    title: "Chatbot · 零售客服",
    description: "RAG 命中率 87%，触发库存查询函数",
    tag: "Chatbot",
    time: "14:32",
    metric: "12 条对话 / 小时",
  },
  {
    title: "文生图 · 春季海报",
    description: "4K 输出 + 品牌字库 + 版权校验",
    tag: "文生图",
    time: "14:08",
    metric: "8 张已入 DAM",
  },
  {
    title: "AI 视频生成 · 营销短片",
    description: "多语言配音 + 自动字幕 + 品牌片尾",
    tag: "AI 视频",
    time: "13:40",
    metric: "渲染完成",
  },
  {
    title: "图生视频 · 质检",
    description: "关键帧 2 / 5 已校对，等待审批",
    tag: "图生视频",
    time: "12:18",
    metric: "待内容审核",
  },
]

export function ComponentExample() {
  return (
    <ExampleWrapper className="lg:grid-cols-1">
      <Example
        title="AI SaaS 后台布局"
        containerClassName="max-w-6xl"
        className="border-none p-0"
      >
        <AiSaaSLayout />
      </Example>
    </ExampleWrapper>
  )
}

function AiSaaSLayout() {
  return (
    <div className="w-full rounded-3xl border bg-background shadow-2xl shadow-primary/5">
      <div className="grid gap-6 p-6 lg:grid-cols-[300px_minmax(0,1fr)]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-6 rounded-2xl border bg-card/80 p-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/80">
              Workspace
            </p>
            <p className="text-lg font-semibold">Seedance Studio</p>
          </div>
          <Badge variant="secondary">Pro</Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          聚焦多模态生成、自动化与治理的一站式 AI SaaS 控制台。
        </p>
      </div>
      <div className="space-y-6">
        {sidebarSections.map((section) => (
          <div key={section.title}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              {section.title}
            </p>
            <div className="mt-3 space-y-2">
              {section.items.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className={cn(
                    "group flex w-full flex-col gap-1.5 rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                    item.active
                      ? "border-primary/60 bg-primary/5"
                      : "border-transparent bg-muted/40 hover:border-primary/20 hover:bg-muted/70"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-border/70 bg-background/80 p-2 text-primary">
                      <item.icon className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {item.badge && (
                      <Badge
                        variant={item.badge.variant ?? "outline"}
                        className={cn("text-[11px]", item.badge.className)}
                      >
                        {item.badge.label}
                      </Badge>
                    )}
                  </div>
                  {item.metric && (
                    <p className="text-xs font-medium text-primary/80">
                      {item.metric}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-2xl border border-dashed bg-muted/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          配额总览
        </p>
        <div className="mt-3 space-y-3">
          {usageEntries.map((entry) => {
            const percent = Math.min(
              100,
              Math.round((entry.used / entry.total) * 100)
            )
            return (
              <div key={entry.label}>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{entry.label}</span>
                  <span>
                    {entry.used}
                    {entry.unit} / {entry.total}
                    {entry.unit}
                  </span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <Button size="sm" className="mt-4 w-full">
          升级至 Enterprise
        </Button>
      </div>
    </aside>
  )
}

function MainContent() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background">
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge
              variant="outline"
              className="border-primary/40 bg-primary/5 text-xs font-medium"
            >
              版本 v0.7 ・ 2026-02-26
            </Badge>
            <CardTitle className="mt-3 text-2xl">
              Seedance AI SaaS 控制台
            </CardTitle>
            <CardDescription className="mt-2 max-w-2xl text-sm leading-relaxed">
              聚合 Chatbot、AI 视频生成、文生图、图生视频、文生视频等多模态能力，
              通过统一的工作流和治理体系，支撑内容团队在分钟级完成从创意到分发的全链路。
            </CardDescription>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto">
            <Button variant="outline" size="sm">
              查看使用文档
            </Button>
            <Button size="sm">创建多模态工作流</Button>
            <Button variant="ghost" size="icon">
              <BellIcon className="size-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {creationHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border bg-background/80 p-4"
              >
                <p className="text-xs font-medium text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{item.subLabel}</span>
                  <Badge
                    variant="outline"
                    className="border-transparent bg-emerald-500/10 text-emerald-600 dark:text-emerald-200"
                  >
                    {item.trend}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>多模态生产线</CardTitle>
            <CardDescription>
              可视化展示文生图、文生视频、图生视频与 AI 视频生成的阶段进度，帮助编导快速排期。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {pipelineStages.map((stage) => (
              <div
                key={stage.title}
                className="rounded-2xl border border-dashed p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{stage.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {stage.type} ・ {stage.summary}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={cn("text-xs", stage.badgeClassName)}
                  >
                    {stage.status}
                  </Badge>
                </div>
                <div className="mt-3 h-2 rounded-full bg-muted">
                  <div
                    className="h-2 rounded-full bg-primary transition-all"
                    style={{ width: `${stage.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle>实时活动 & 审批</CardTitle>
            <CardDescription>
              聚合 Chatbot 事件、文生图产出、AI 视频渲染与图生视频质检，方便运营与治理同屏协作。
            </CardDescription>
          </CardHeader>
          <CardContent className="divide-y">
            {activityFeed.map((activity) => (
              <div
                key={activity.title}
                className="flex flex-wrap items-start justify-between gap-3 py-3"
              >
                <div>
                  <p className="text-sm font-semibold">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {activity.description}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <Badge
                      variant="outline"
                      className="border-dashed border-primary/40 text-primary"
                    >
                      {activity.tag}
                    </Badge>
                    <span>{activity.metric}</span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
