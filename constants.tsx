import { Project } from './types';
import React from 'react';

// Using a custom icon component concept for logos to match the monochromatic style
export const PROJECTS: Project[] = [
  {
    id: 'gt-protocol',
    name: 'GT Protocol',
    category: 'Incubation',
    isNew: true,
    description: 'GT Protocol is a decentralized, trustless platform designed to streamline and secure decentralized asset management',
    metrics: {
      fundsRaised: '$4,1M',
      athRoi: '28x',
      socialGrowth: '800%',
      partnerships: '70+',
    },
  },
  {
    id: 'solidus',
    name: 'SOLIDUS',
    category: 'Incubation',
    metrics: {
      fundsRaised: '$4,4M',
      socialGrowth: '700%',
      athRoi: '41x',
      partnerships: '84',
    },
  },
  {
    id: 'hypercycle',
    name: 'HyperCycle',
    category: 'Investment',
    isNew: true,
    description: 'Building the necessary components for a global AI brain to emerge.',
    metrics: {
      fundsRaised: '$5,0M',
      socialGrowth: '650%',
      athRoi: '14x',
      partnerships: '35',
    },
  },
  {
    id: 'cookie3',
    name: 'Cookie3',
    category: 'Acceleration',
    metrics: {
      fundsRaised: '$6,2M',
      socialGrowth: '1000%',
      athRoi: '9x',
      partnerships: '92',
    },
  },
  {
    id: 'engines',
    name: 'ENGINES OF FURY',
    category: 'Acceleration',
    metrics: {
      fundsRaised: '$5,7M',
      socialGrowth: '2000%',
      athRoi: '9x',
      partnerships: '57',
    },
  },
  {
    id: 'omnia',
    name: 'OMNIA',
    category: 'Incubation',
    metrics: {
      fundsRaised: '$5,3M',
      socialGrowth: '2000%',
      athRoi: 'TBA',
      partnerships: '72',
    },
  },
  {
    id: 'dexcheck',
    name: 'DEXCHECK',
    category: 'Incubation',
    metrics: {
      fundsRaised: '$2,1M',
      socialGrowth: '800%',
      athRoi: '18x',
      partnerships: '65',
    },
  },
  {
    id: 'shieldeum',
    name: 'Shieldeum',
    category: 'Incubation',
    metrics: {
      fundsRaised: '$2,2M',
      socialGrowth: '1000%',
      athRoi: 'TBA',
      partnerships: '30',
    },
  },
  {
    id: 'neurochain',
    name: 'NeuroChain',
    category: 'Investment',
    metrics: {
      fundsRaised: '$1,8M',
      socialGrowth: '450%',
      athRoi: '12x',
      partnerships: '25',
    },
  },
  {
    id: 'aitech-core',
    name: 'AITech Core',
    category: 'Incubation',
    metrics: {
      fundsRaised: '$3,5M',
      socialGrowth: '1200%',
      athRoi: '15x',
      partnerships: '45',
    },
  },
];

export const NAV_LINKS = ['Portfolio', 'Our Ecosystem']; // Updated links
export const FILTER_TABS = ['All', 'Incubation', 'Acceleration', 'Investment'];