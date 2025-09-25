📖 Project Overview – StoryblokAI
✨ What We Built

StoryblokAI is an AI-powered content management assistant that fuses Storyblok’s headless CMS with OpenAI’s generative language models.
It empowers content teams to ideate, write, and publish articles or marketing copy directly inside a seamless web interface—reducing time from concept to publish by up to 70%.

💡 Motivation

Modern content creators face three recurring challenges:

Blank-page syndrome – starting from scratch slows production.

Multi-channel demands – content must adapt to web, mobile, and social simultaneously.

Workflow friction – jumping between AI tools and CMS platforms creates duplication.

StoryblokAI solves these by bringing AI generation and CMS management into a single experience.

🚀 Key Features

AI Content Generation – Draft headlines, outlines, or full posts with a single prompt using OpenAI.

Smart Editing & Expansion – Rewrite, summarise, or expand existing text in seconds.

Storyblok Integration – Save generated content straight into your Storyblok Space (287147437758223) using the Management API.

Live Draft Preview – Instantly preview unpublished content through the Preview API.

One-Click Publishing – Push polished content live to any front-end framework powered by Storyblok.

🏗️ Architecture & Tech Stack
Layer	Technology
Frontend	Next.js 14 (React + TypeScript)
Styling	Tailwind CSS
CMS	Storyblok Headless CMS
AI Engine	OpenAI GPT API
Deployment	Vercel
Data Handling	Storyblok Preview & Management APIs

Environment variables (stored in Vercel) securely provide access to the Preview token, Management token, Space ID, and OpenAI API key.

🌟 Why It’s Innovative

Unified Workflow: No switching between writing tools and CMS dashboards.

Composable & Framework-Agnostic: Any Storyblok-powered front end (Next.js, Nuxt, Astro, etc.) can consume the content instantly.

AI-First Editing: Generative features help creators overcome writer’s block and ensure consistent brand voice.

🔗 Live Demo

Web App: https://storyblockai.vercel.app/
