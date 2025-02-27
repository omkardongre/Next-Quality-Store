# Next Quality - Headless E-commerce with Next.js and Wix

A modern, full-stack e-commerce platform built with Next.js 15 and Wix Headless backend. Live demo: [https://nextquality.omkard.site/](https://nextquality.omkard.site/)

## 🚀 Features

### Core Functionality

- Full e-commerce capabilities with product management
- User accounts and anonymous shopping carts
- Secure checkout process with payment integration
- Product reviews with media uploads
- Email automations for notifications
- Advanced search and filtering
- Responsive design with dark/light mode

### Technical Stack

- **Frontend**: Next.js 15, React
- **Backend**: Wix Headless CMS
- **State Management**: React Query
- **Styling**: Tailwind CSS, Shadcn UI
- **Form Handling**: React Hook Form, Zod
- **Authentication**: Wix OAuth
- **Deployment**: Vercel

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/next-quality.git
cd next-quality
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_WIX_CLIENT_ID=your_client_id
WIX_API_KEY=your_api_key
NEXT_PUBLIC_WIX_SITE_ID=your_site_id
```

4. Run the development server:

```bash
npm run dev
```

## 🔧 Configuration

### Wix Setup

1. Create a Wix account and set up Wix Studio
2. Configure your store settings (products, categories, etc.)
3. Set up OAuth credentials
4. Configure payment and shipping providers

### Environment Variables

- `NEXT_PUBLIC_BASE_URL`: Your application URL
- `NEXT_PUBLIC_WIX_CLIENT_ID`: Wix OAuth client ID
- `WIX_API_KEY`: Wix API key for server-side operations
- `NEXT_PUBLIC_WIX_SITE_ID`: Your Wix site ID

## 📦 Project Structure

```
next-quality/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and configurations
│   └── wix-api/         # Wix API integration layer
├── public/              # Static assets
└── ...config files
```

## 🌟 Key Features Explained

### Authentication

- OAuth-based authentication with Wix
- Session management with cookies
- Anonymous cart support

### Product Management

- Server-side rendering with Suspense
- Advanced filtering and search
- Inventory tracking
- Related products

### Shopping Cart

- Real-time updates with React Query
- Optimistic updates
- Anonymous and user-specific carts

### Reviews System

- Image and video upload support
- Rating system
- Email automation for review requests

## 🚀 Deployment

The project is deployed on Vercel with the following configuration:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Set up custom domain and DNS records
4. Configure Wix headless settings for production

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built following comprehensive tutorial series
- UI components from Shadcn UI
- Wix Headless CMS for backend functionality
