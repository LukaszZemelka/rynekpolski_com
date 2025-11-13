export interface Dashboard {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  default_order: number;
  created_at: Date;
}

export interface Widget {
  id: number;
  name: string;
  component_name: string;
  category: string | null;
  description: string | null;
  default_width: number;
  default_height: number;
  min_width: number;
  min_height: number;
  created_at: Date;
}

export interface WidgetPlacement {
  id: number;
  user_id: string;
  dashboard_id: number;
  widget_id: number;
  x_position: number;
  y_position: number;
  width: number;
  height: number;
  visible: boolean;
  widget?: Widget;
}

export interface DashboardLayout {
  id: number;
  user_id: string;
  dashboard_id: number;
  position: number;
  visible: boolean;
  dashboard?: Dashboard;
}

export interface UserPreferences {
  id: number;
  user_id: string;
  theme: string;
  created_at: Date;
  updated_at: Date;
}
