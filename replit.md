# AgriProduce Dashboard

## Overview

This is a full-stack agricultural produce management dashboard built with React and Express. The application helps farmers and agricultural businesses optimize their produce sales by providing insights into quality distribution, market recommendations, and revenue optimization. It features a comprehensive dashboard with real-time data visualization, market analysis, and an AI-powered chat interface for decision support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: Radix UI components with shadcn/ui for consistent, accessible design system
- **Styling**: Tailwind CSS with custom agricultural color palette (forest green, sage, harvest yellow)
- **State Management**: TanStack Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Charts**: Recharts for data visualization including pie charts, bar charts, and line graphs

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints under `/api` prefix
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Hot module replacement via Vite integration for seamless full-stack development

### Data Architecture
- **Schema Validation**: Zod schemas for type-safe data validation across client and server
- **Shared Types**: Common TypeScript interfaces in shared directory for consistency
- **Data Models**: Agricultural domain models including ProduceVariety, Market, Summary, and OverallSummary
- **Quality Categories**: Standardized produce quality levels (Premium, Ripe, YetToRipe, Overripe, Rotten)
- **Sale Categories**: Market destination types (Export, Local Market, Distant Market, Processing Unit, Biogas, Decompost)

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
- **Design System**: Atomic design with reusable UI components
- **Dashboard Components**: Modular dashboard sections (SummaryCards, QualityDistribution, OptimalRevenueTable, MarketCards, RevenueCharts, ChatInterface)
- **Form Handling**: React Hook Form with Zod validation
- **Accessibility**: Full keyboard navigation and screen reader support via Radix UI primitives

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