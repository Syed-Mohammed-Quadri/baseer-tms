export interface Rule {
  id: string;
  name: string;
  category: string;
  status: "active" | "inactive";
  priority: "high" | "medium" | "low";
  conditions: number;
  actions: number;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Gate {
  id: string;
  name: string;
  terminal: string;
  status: "available" | "occupied" | "turnaround" | "maintenance" | "conflict";
  aircraft?: {
    flight: string;
    type: string;
    etd: Date;
  };
  utilization: number;
  nextAvailable?: Date;
}

export interface Resource {
  id: string;
  name: string;
  type: "gate" | "ground_crew" | "equipment" | "maintenance";
  status: "available" | "busy" | "maintenance" | "conflict";
  location?: string;
  assignedTo?: string;
  capacity: number;
  currentLoad: number;
}

export interface Conflict {
  id: string;
  type: "gate" | "crew" | "equipment";
  resource: string;
  priority: "high" | "medium" | "low";
  status: "active" | "resolving" | "resolved";
  description: string;
  timestamp: Date;
  estimatedResolution?: Date;
}

export interface KPI {
  label: string;
  value: number | string;
  change: number;
  changeType: "positive" | "negative" | "neutral";
  format: "percentage" | "number" | "time" | "currency";
}

export interface TimeSlot {
  start: Date;
  end: Date;
  resource: string;
  task: string;
  status: "scheduled" | "active" | "completed" | "conflict";
  details?: {
    flight?: string;
    aircraft?: string;
    passengers?: number;
    crew?: string[];
    equipment?: string[];
    notes?: string;
    priority?: "high" | "medium" | "low";
  };
}

export interface CapacityForecast {
  resource: string;
  current: number;
  forecast: number;
  status: "optimal" | "near_capacity" | "critical";
  trend: "up" | "down" | "stable";
}
