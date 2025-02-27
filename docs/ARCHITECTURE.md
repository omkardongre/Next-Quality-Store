# Next Quality - System Architecture

## Overview

Next Quality is built using a modern headless architecture with Next.js 15 as the frontend and Wix Headless as the backend service.

## System Components

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[Browser] --> B[Next.js App]
        B --> C[React Components]
        C --> D[React Query Cache]
    end

    subgraph "Server Layer"
        B --> E[Next.js API Routes]
        E --> F[Middleware]
        F --> G[Wix Client]
    end

    subgraph "Wix Services"
        G --> H[Authentication]
        G --> I[Products]
        G --> J[Cart]
        G --> K[Reviews]
        G --> L[Media]
    end
```

## Key Components

### Frontend Layer

- **Next.js App**: Main application framework
- **React Components**: UI components using Shadcn UI
- **React Query**: Data fetching and state management
- **TailwindCSS**: Styling and responsive design

### Server Layer

- **API Routes**: Handle server-side operations
- **Middleware**: Manages authentication and sessions
- **Wix Client**: Communicates with Wix APIs

### Wix Services

- **Authentication**: Handles user sessions and OAuth
- **Products**: Manages product catalog and inventory
- **Cart**: Handles shopping cart operations
- **Reviews**: Manages product reviews and ratings
- **Media**: Handles image and video uploads

## Authentication Flow

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant NextAuth
    participant WixAuth

    User->>Frontend: Click Login
    Frontend->>WixAuth: Redirect to Wix Login
    WixAuth->>User: Display Login Form
    User->>WixAuth: Submit Credentials
    WixAuth->>Frontend: Return with Auth Token
    Frontend->>User: Logged In State
```

## Data Flow

### Shopping Cart Flow

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant ReactQuery
    participant WixAPI

    User->>Frontend: Add to Cart
    Frontend->>ReactQuery: Optimistic Update
    Frontend->>WixAPI: Update Cart
    WixAPI->>Frontend: Confirm Update
    ReactQuery->>Frontend: Update UI
```

## Technical Specifications

### Frontend

- Next.js 15
- React 19
- TailwindCSS
- Shadcn UI Components
- React Query for data management

### Server

- Next.js API Routes
- Wix SDK Integration
- OAuth Authentication
- File Upload Handling

### External Services

- Wix Headless CMS
- Wix Media Services
- Payment Processing
- Email Services

## Security Considerations

- OAuth 2.0 Authentication
- Secure Session Management
- HTTPS Encryption
- API Key Protection
- Rate Limiting

## Performance Optimizations

- React Query Caching
- Image Optimization
- Lazy Loading
- Server-Side Rendering
- Static Generation where possible

## Deployment Architecture

- Vercel Platform
- Edge Functions
- CDN Distribution
- Automatic HTTPS
