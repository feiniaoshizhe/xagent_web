import {
  ChartBar,
  LayoutDashboard,
  type LucideIcon,
  Sparkles,
  Images,
  Image,
  Users,
  Library,
  FolderKanban,
  BotMessageSquare,
  Camera, ChartBarBig, Database, FileChartColumn, FileImage, FileText, Folder, Gauge, HelpCircle, List, Search, Settings, Shell, Snail,
} from "lucide-react";


export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
    {
    id: 1,
    label: "Home",
    items: [
      {
        title: "Chat",
        url: "/chat",
        icon: BotMessageSquare,

      },
      {
        title: "Generate Video",
        url: "/video",
        icon: Sparkles,

      },
      {
        title: "Generate Image",
        url: "/image",
        icon: Image,

      },
      {
        title: "Studio",
        url: "/studio",
        icon: FolderKanban,

      },
    ],
  },{
    id: 2,
    label: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Models",
        url: "/models",
        icon: ChartBar,
      },
      {
        title: "Prompt Library",
        url: "/library",
        icon: Library,
      },
      {
        title: "Gallery",
        url: "/gallery",
        icon: Images,
      }
    ],
  },

];

export const secondaryItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Get Help",
    url: "#",
    icon: HelpCircle,
  },
]
