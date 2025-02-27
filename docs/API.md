# Next Quality - API Documentation

## Overview

This document outlines the API endpoints and integrations used in Next Quality, primarily focusing on the Wix Headless API integration and our custom API routes.

## Table of Contents

- [Authentication](#authentication)
- [Products](#products)
- [Cart](#cart)
- [Reviews](#reviews)
- [Media Upload](#media-upload)
- [User Management](#user-management)

## Authentication

### OAuth Endpoints

```typescript
// Wix OAuth Flow
GET / api / auth / callback / wix;
```

**Parameters:**

```typescript
{
  code: string; // OAuth authorization code
  state: string; // State parameter for security
}
```

**Response:**

```typescript
{
  tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }
}
```

## Products

### Get Products List

```typescript
GET / api / products;
```

**Query Parameters:**

```typescript
{
  limit?: number;      // Default: 20
  offset?: number;     // Default: 0
  sort?: string;       // Options: 'price_asc', 'price_desc', 'name_asc'
  search?: string;     // Search term
  categoryId?: string; // Filter by category
}
```

**Response:**

```typescript
{
  items: Array<{
    _id: string;
    name: string;
    price: number;
    media: Media[];
    // ... other product fields
  }>;
  totalCount: number;
}
```

### Get Product Details

```typescript
GET / api / products / [id];
```

## Cart

### Add to Cart

```typescript
POST / api / cart / items;
```

**Request Body:**

```typescript
{
  productId: string;
  quantity: number;
  options?: {
    [key: string]: string;
  };
}
```

### Update Cart Item

```typescript
PATCH / api / cart / items / [id];
```

### Remove from Cart

```typescript
DELETE / api / cart / items / [id];
```

## Reviews

### Submit Review

```typescript
POST / api / reviews;
```

**Request Body:**

```typescript
{
  productId: string;
  rating: number;
  title?: string;
  body: string;
  media?: Array<{
    url: string;
    type: 'image' | 'video';
  }>;
}
```

### Get Product Reviews

```typescript
GET / api / reviews;
```

**Query Parameters:**

```typescript
{
  productId: string;
  limit?: number;
  offset?: number;
}
```

## Media Upload

### Get Upload URL

```typescript
GET / api / review - media - upload - url;
```

**Query Parameters:**

```typescript
{
  fileName: string;
  mimeType: string;
}
```

**Response:**

```typescript
{
  uploadUrl: string;
}
```

## User Management

### Get Current User

```typescript
GET / api / user;
```

**Response:**

```typescript
{
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  // ... other user fields
}
```

### Update User Profile

```typescript
PATCH / api / user;
```

## Error Handling

All API endpoints follow this error response format:

```typescript
{
  code: string;        // Error code
  message: string;     // Human-readable message
  details?: unknown;   // Additional error details
}
```

Common error codes:

- `UNAUTHORIZED`: Authentication required
- `FORBIDDEN`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Invalid input
- `INTERNAL_ERROR`: Server error

## Rate Limiting

```typescript
{
  "X-RateLimit-Limit": number,     // Requests per window
  "X-RateLimit-Remaining": number, // Remaining requests
  "X-RateLimit-Reset": number      // Window reset timestamp
}
```

## Wix API Integration

### Client Configuration

```typescript
import { createClient } from "@wix/sdk";

const wixClient = createClient({
  auth: {
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
    tokens: // ... auth tokens
  }
});
```

### Available Modules

- `wixClient.products` - Product management
- `wixClient.cart` - Shopping cart operations
- `wixClient.auth` - Authentication
- `wixClient.reviews` - Review management
- `wixClient.media` - Media handling

## Development Tools

### API Testing

Example using cURL:

```bash
# Get products
curl -X GET "https://nextquality.omkard.site/api/products" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Add to cart
curl -X POST "https://nextquality.omkard.site/api/cart/items" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"productId":"123","quantity":1}'
```

## WebHooks

### Available Webhooks

- Order status changes
- Product inventory updates
- Review submissions
- User registrations

## Security

- All endpoints require HTTPS
- Authentication via OAuth 2.0
- CORS configuration
- Rate limiting
- Input validation
- XSS protection
