# Next Quality - System Diagrams

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Component Hierarchy](#component-hierarchy)
3. [Data Model](#data-model)
4. [Authentication Flow](#authentication-flow)
5. [Shopping Cart Flow](#shopping-cart-flow)

## System Architecture

```mermaid
graph TB
    subgraph "Client Layer"
        A[Browser] --> B[Next.js Frontend]
        B --> C[React Components]
        C --> D[React Query Cache]
    end

    subgraph "Server Layer"
        B --> E[Next.js API Routes]
        E --> F[Middleware]
        F --> G[Wix Client]
    end

    subgraph "Wix Services"
        G --> H[Auth]
        G --> I[Products]
        G --> J[Cart]
        G --> K[Reviews]
        G --> L[Media]
    end
```

This diagram shows the three main layers of our application and how they interact.

## Component Hierarchy

```mermaid
graph TD
    A[RootLayout] --> B[Navbar]
    A --> C[Main Content]
    A --> D[Footer]

    B --> E[CartButton]
    B --> F[SearchBar]
    B --> G[UserMenu]

    C --> H[ProductGrid]
    C --> I[ProductDetail]
    C --> J[CartPage]
    C --> K[CheckoutFlow]

    H --> L[ProductCard]
    I --> M[ImageGallery]
    I --> N[AddToCart]
    I --> O[ReviewSection]

    J --> P[CartItems]
    J --> Q[CartSummary]

    K --> R[ShippingForm]
    K --> S[PaymentForm]
```

This diagram illustrates the component structure of our application.

## Data Model

```mermaid
erDiagram
    User ||--o{ Order : places
    User ||--|| Cart : has
    User ||--o{ Review : writes
    Product ||--o{ Review : receives
    Product ||--o{ OrderItem : contains
    Order ||--o{ OrderItem : includes
    Cart ||--o{ CartItem : contains
    CartItem ||--|| Product : references

    User {
        string id
        string email
        string name
        datetime createdAt
    }

    Product {
        string id
        string name
        number price
        string description
        array media
        number inventory
    }

    Order {
        string id
        string userId
        number total
        string status
        datetime createdAt
    }

    Cart {
        string id
        string userId
        number total
    }

    Review {
        string id
        string userId
        string productId
        number rating
        string text
        array media
    }
```

This diagram shows the relationships between different entities in our system.

## Authentication Flow

```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant NextAuth
    participant WixAuth
    participant Database

    User->>Frontend: Click Login
    Frontend->>WixAuth: Redirect to Login
    WixAuth->>User: Display Login Form
    User->>WixAuth: Submit Credentials
    WixAuth->>NextAuth: Return Auth Code
    NextAuth->>Database: Store Session
    Database->>Frontend: Session Established
    Frontend->>User: Redirect to Dashboard
```

This diagram illustrates the authentication process.

## Shopping Cart Flow

```mermaid
sequenceDiagram
    actor User
    participant UI
    participant ReactQuery
    participant API
    participant WixCart

    User->>UI: Add to Cart
    UI->>ReactQuery: Optimistic Update
    ReactQuery->>UI: Update Display
    UI->>API: Send Request
    API->>WixCart: Update Cart
    WixCart->>API: Confirm Update
    API->>ReactQuery: Update Cache
    ReactQuery->>UI: Sync Display
```

This diagram shows the flow of data when adding items to the cart.

## State Management Flow

```mermaid
flowchart LR
    A[User Action] --> B[React Query]
    B --> C{Cache Valid?}
    C -->|Yes| D[Use Cache]
    C -->|No| E[Fetch API]
    E --> F[Update Cache]
    F --> G[Update UI]
    D --> G
```

This diagram illustrates how state is managed using React Query.

## Notes

- All diagrams are created using Mermaid.js syntax
- Diagrams can be viewed directly on GitHub
- Use these diagrams for:
  - Development reference
  - Documentation
  - Team onboarding
  - Architecture discussions

## Contributing

When adding new features, please update relevant diagrams to maintain documentation accuracy.
