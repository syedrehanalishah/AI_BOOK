import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        {
          type: 'category',
          label: 'Introduction to ROS 2',
          items: [
            'module1/introduction-to-ros2/intro'
          ]
        },
        {
          type: 'category',
          label: 'ROS 2 Basics',
          items: [
            'module1/ros2-basics/ros2-basics'
          ]
        },
        {
          type: 'category',
          label: 'Python Agents with rclpy',
          items: [
            'module1/python-agents-rclpy/python-agents-rclpy'
          ]
        },
        {
          type: 'category',
          label: 'Humanoid Modeling with URDF',
          items: [
            'module1/humanoid-modeling-urdf/humanoid-modeling-urdf'
          ]
        },
        {
          type: 'category',
          label: 'Summary',
          items: [
            'module1/summary/summary'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        {
          type: 'category',
          label: 'Physics Simulation with Gazebo',
          items: [
            'digital-twin/gazebo/index',
            'digital-twin/gazebo/gravity-collisions',
            'digital-twin/gazebo/dynamics',
            'digital-twin/gazebo/robot-environment-interaction',
            'digital-twin/gazebo/exercises',
            'digital-twin/gazebo/troubleshooting',
            'digital-twin/gazebo/acceptance-scenarios',
            'digital-twin/integrated-workflow',
            'digital-twin/summary'
          ]
        },
        {
          type: 'category',
          label: 'High-Fidelity Interaction in Unity',
          items: [
            'digital-twin/unity/index'
          ]
        },
        {
          type: 'category',
          label: 'Virtual Sensor Simulation',
          items: [
            'digital-twin/sensors/index'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'isaac-robot-brain/index',
        {
          type: 'category',
          label: 'Chapter 1: Isaac Sim and Synthetic Data',
          items: [
            'isaac-robot-brain/isaac-sim/index',
            'isaac-robot-brain/isaac-sim/photorealistic-sim',
            'isaac-robot-brain/isaac-sim/synthetic-data'
          ]
        },
        {
          type: 'category',
          label: 'Chapter 2: Isaac ROS for VSLAM and Navigation',
          items: [
            'isaac-robot-brain/isaac-ros/index',
            'isaac-robot-brain/isaac-ros/vslam-concepts',
            'isaac-robot-brain/isaac-ros/real-time-localization'
          ]
        },
        {
          type: 'category',
          label: 'Chapter 3: Nav2 Path Planning for Humanoids',
          items: [
            'isaac-robot-brain/nav2-path-planning/index',
            'isaac-robot-brain/nav2-path-planning/humanoid-navigation',
            'isaac-robot-brain/nav2-path-planning/path-planning-algorithms'
          ]
        },
        'isaac-robot-brain/summary',
        'isaac-robot-brain/assessment-summary'
      ]
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'vla-module/intro',
        {
          type: 'category',
          label: 'Chapter 1: Voice-to-Action Pipelines',
          items: [
            'vla-module/voice-to-action/index',
            'vla-module/voice-to-action/whisper-integration',
            'vla-module/voice-to-action/intent-mapping'
          ]
        },
        {
          type: 'category',
          label: 'Chapter 2: Cognitive Planning with LLMs',
          items: [
            'vla-module/cognitive-planning/index',
            'vla-module/cognitive-planning/llm-integration',
            'vla-module/cognitive-planning/task-planning'
          ]
        },
        {
          type: 'category',
          label: 'Chapter 3: Capstone - The Autonomous Humanoid',
          items: [
            'vla-module/autonomous-humanoid/index',
            'vla-module/autonomous-humanoid/end-to-end-workflow',
            'vla-module/autonomous-humanoid/navigation-perception',
            'vla-module/autonomous-humanoid/manipulation'
          ]
        },
        'vla-module/conclusion'
      ]
    }
  ],
};

export default sidebars;
