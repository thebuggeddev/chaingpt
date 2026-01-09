export type ProjectCategory = 'Incubation' | 'Acceleration' | 'Investment' | 'All';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description?: string;
  isNew?: boolean;
  logoUrl?: string; // Using placeholders or icon components
  metrics: {
    fundsRaised: string;
    socialGrowth: string;
    athRoi: string;
    partnerships: string;
  };
}
