// types/index.ts - Fixed TypeScript interfaces for Framer Motion compatibility

import React from "react";
import {
  TargetAndTransition,
  Variants,
  Variant,
  Transition,
} from "framer-motion";

// Just use Framer Motion's Variants type directly
export type MotionVariants = Variants;

// Motion scale variants - should extend TargetAndTransition
export interface MotionScale extends TargetAndTransition {
  scale: number;
  transition: {
    type: "spring";
    stiffness: number;
    damping: number;
  };
}

// Alternative: You can also just use TargetAndTransition directly
export type HoverScale = TargetAndTransition;
export type TapScale = TargetAndTransition;

// Skill interface
export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  status: string;
  gradient: string;
  preview: string;
  features: string[];
  github: string;
  demo: string;
}

// Component Props Interfaces

export interface AboutPageProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

export interface SkillsPageProps {
  containerVariants: Variants;
  itemVariants: Variants;
  hoverScale: TargetAndTransition;
  tapScale: TargetAndTransition;
  skills: Skill[];
}

export interface ProjectPageProps {
  hoverScale: TargetAndTransition;
  tapScale: TargetAndTransition;
  projects: Project[];
  setSelectedProject: (project: Project | null) => void;
  containerVariants: Variants;
  itemVariants: Variants;
}

export interface WorkTogetherProps {
  containerVariants: Variants;
  itemVariants: Variants;
  hoverScale: TargetAndTransition;
  tapScale: TargetAndTransition;
}

export interface HeroSectionProps {
  setActiveSection: (sectionIndex: number) => void;
}

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Simplified helper functions that work with Framer Motion's type system
export const createContainerVariants = (): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
});

export const createItemVariants = (): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

export const createHoverScale = (
  scale: number = 1.05
): TargetAndTransition => ({
  scale,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  },
});

export const createTapScale = (scale: number = 0.95): TargetAndTransition => ({
  scale,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  },
});
