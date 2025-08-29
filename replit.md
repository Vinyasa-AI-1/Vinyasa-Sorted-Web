# Vinyasa-AI: Comprehensive Waste Management & Produce Optimization Platform

## Overview

This is a full-stack waste management and agricultural produce optimization platform built with React and Express. The application, branded as "Vinyasa-AI," transforms waste into wealth through AI-powered solutions. It features comprehensive waste sorting, produce quality assessment, marketplace connections, dual currency system (rupees + Vinyasa Coins), and multiple interactive dashboards for both consumers and producers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: Radix UI components with shadcn/ui for consistent, accessible design system
- **Styling**: Tailwind CSS with sustainability-focused color palette (green gradients, eco-friendly themes)
- **State Management**: TanStack Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing with homepage, dashboards, and live pages
- **Interactive Graphics**: p5.js integration for real-time waste and produce sorting simulations
- **Charts**: Recharts for data visualization including pie charts, bar charts, and line graphs
- **Animations**: Smooth CSS animations and transitions for enhanced user experience

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints under `/api` prefix
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement via Vite integration for seamless full-stack development

### Data Architecture
- **Schema Validation**: Zod schemas for type-safe data validation across client and server
- **Shared Types**: Common TypeScript interfaces in shared directory for consistency
- **Data Models**: Extended models including ProduceVariety, Market, Summary, OverallSummary, WasteCategories, and UserProfiles
- **Quality Categories**: Standardized produce quality levels (Premium, Ripe, YetToRipe, Overripe, Rotten)
- **Waste Categories**: Comprehensive waste classification (Dry, Wet, Plastic, Electronic, Medical)
- **Sale Categories**: Market destination types (Export, Local Market, Distant Market, Processing Unit, Biogas, Decompost)
- **Currency System**: Dual currency support with rupees and Vinyasa Coins integration

### Database Integration (Prepared)
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon serverless PostgreSQL (connection configured but not actively used)
- **Migrations**: Drizzle-kit setup for schema management
- **Connection**: Environment-based DATABASE_URL configuration

### Development Tooling
- **Build System**: Vite for frontend bundling, ESBuild for server bundling
- **Type Checking**: TypeScript with strict mode enabled
- **Path Mapping**: Absolute imports configured for cleaner code organization
- **Hot Reloading**: Development server with full-stack hot module replacement

### Component Architecture
- **Design System**: Atomic design with reusable UI components and sustainability-focused design language
- **Multi-Dashboard System**: 
  - Homepage with comprehensive company information and feature showcase
  - Consumer Central Ops Dashboard for waste management operations
  - Producer Dashboard for agricultural produce optimization
  - Live Waste Sorting page with p5.js real-time simulation
  - Live Produce Sorting page with AI-powered quality assessment
- **Interactive Components**: AI chatbot with contextual responses, animated hero sections, hover effects
- **Dashboard Components**: Modular sections (SummaryCards, QualityDistribution, OptimalRevenueTable, MarketCards, RevenueCharts)
- **Form Handling**: React Hook Form with Zod validation for contact forms and user inputs
- **Accessibility**: Full keyboard navigation and screen reader support via Radix UI primitives

## Page Structure and Routing

### Main Application Routes
- `/` - Homepage: Company showcase, feature highlights, AI chatbot, contact forms
- `/dashboard` - Consumer Central Ops Dashboard: Waste management and recycling operations
- `/producer-dashboard` - Producer Dashboard: Agricultural produce optimization and sales
- `/live-waste-sorting` - Live Waste Sorting: Real-time AI waste categorization with p5.js
- `/live-produce-sorting` - Live Produce Sorting: AI-powered produce quality assessment

### Key Features by Page
- **Homepage**: Hero section, feature showcases, marketplace information, earnings potential, about us, contact, newsletter, privacy sections
- **Consumer Dashboard**: Waste sorting analytics, recycler marketplace, dual currency earnings, disposal optimization
- **Producer Dashboard**: Produce quality distribution, market recommendations, earnings tracking, live sorting access
- **Live Sorting Pages**: Interactive p5.js simulations, real-time counting, keyboard shortcuts, detailed statistics

## Recent Updates (January 29, 2025)

### Major Enhancements
- **Complete Website Ecosystem**: Transformed from single dashboard to comprehensive multi-page platform
- **Enhanced Branding**: Updated to "Vinyasa-AI" with professional sustainability-focused design
- **Interactive AI Chatbot**: Context-aware responses based on user queries about features and services
- **Producer Dashboard**: New comprehensive dashboard for agricultural producers with market insights
- **Homepage Showcase**: Professional landing page with feature highlights, earning potential, and company information
- **Live Sorting Pages**: Two specialized pages for waste and produce sorting with p5.js integration
- **Smooth Animations**: Enhanced user experience with CSS animations and hover effects
- **Dual Currency System**: Full integration of rupees and Vinyasa Coins across all platforms

### Technical Improvements
- **p5.js Integration**: Real-time interactive simulations for both waste and produce sorting
- **Enhanced Routing**: Complete navigation system linking all pages and features
- **Responsive Design**: Mobile-optimized layouts across all pages and components
- **Translation Support**: Multi-language support maintained across all new features

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with resolvers
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for client-side navigation

### UI and Styling
- **Component Library**: Extensive Radix UI primitives (accordion, alert-dialog, avatar, button, card, dialog, dropdown-menu, popover, select, tabs, tooltip, etc.)
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React icon library
- **Utilities**: class-variance-authority for component variants, clsx for conditional classes

### Data Visualization
- **Charts**: Recharts library for interactive charts and graphs
- **Carousel**: Embla Carousel for image/content carousels

### Database and Validation
- **Database**: Neon serverless PostgreSQL driver
- **ORM**: Drizzle ORM with Drizzle-kit for migrations
- **Validation**: Zod for schema validation and type generation
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Build Tools**: Vite with React plugin, ESBuild for production builds
- **Development**: tsx for TypeScript execution, Replit-specific development plugins
- **Utilities**: date-fns for date manipulation, cmdk for command interfaces

### Replit Integration
- **Development Banner**: Replit development environment integration
- **Error Handling**: Runtime error overlay plugin for development
- **Cartographer**: Code mapping and analysis tools (development only)

The application is designed as a comprehensive agricultural management platform with room for expansion into real-time data integration, advanced analytics, and mobile applications.