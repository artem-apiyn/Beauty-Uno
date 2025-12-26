# Salon Uno - Beauty Salon Website

## Overview

Salon Uno is a premium beauty salon website built for a Russian-speaking audience (Saratov, Russia). The application showcases salon services including hair styling, nail care, and cosmetology treatments. It features a service catalog, contact form with inquiry submission, and informational pages about the salon.

The project follows a full-stack TypeScript architecture with React on the frontend and Express on the backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Fonts**: Cormorant Garamond (display) and Lato (body text)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/*`
- **Build Tool**: esbuild for server bundling, Vite for client

### Data Layer
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Drizzle Kit (`drizzle-kit push`)

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components including shadcn/ui
│       ├── hooks/        # Custom React hooks
│       ├── lib/          # Utilities and query client
│       └── pages/        # Route pages (Home, Services, Contact, About)
├── server/           # Express backend
│   ├── db.ts         # Database connection
│   ├── routes.ts     # API route handlers
│   └── storage.ts    # Data access layer
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod schemas
└── migrations/       # Database migrations
```

### API Design
Routes are defined in `shared/routes.ts` with full type safety:
- `GET /api/services` - List all services
- `GET /api/services/:id` - Get single service
- `POST /api/inquiries` - Submit contact form inquiry

### Build System
- Development: Vite dev server with HMR for client, tsx for server
- Production: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (connection via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for Express (available but not currently active)

### UI/Component Libraries
- **@radix-ui/***: Headless UI primitives (dialogs, dropdowns, tabs, etc.)
- **shadcn/ui**: Pre-built component library using Radix primitives
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel component
- **vaul**: Drawer component
- **cmdk**: Command palette component

### Form & Validation
- **react-hook-form**: Form state management
- **zod**: Schema validation
- **drizzle-zod**: Generate Zod schemas from Drizzle tables

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Server bundling for production
- **drizzle-kit**: Database migration tooling
- **TypeScript**: Type checking across the entire codebase

### Replit-specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner