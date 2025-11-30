# Specialty Capital - Loan Application Website

A modern, responsive Next.js web application for Specialty Capital's business financing platform.

## Features

- Hero section with animated rotating text and dashboard mockup
- Loan application form
- What We Offer section highlighting three financing options
- How It Works process walkthrough
- Customer reviews section with rating display
- Contact section with contact information and quick form
- Qualifications checklist
- Professional footer

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>
cd specialty-capital

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Build & Deployment

### Build for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `https://your-project.vercel.app`

### Environment Variables

Create a `.env.local` file in the root directory (for local development):

\`\`\`
# Add environment variables here if needed
\`\`\`

## Project Structure

\`\`\`
/app
  /page.tsx              # Main page
  /layout.tsx            # Root layout
  /globals.css           # Global styles
  
/components
  /header.tsx            # Header navigation
  /footer.tsx            # Footer component
  /hero-section.tsx      # Hero section
  /loan-application-form.tsx  # Application form
  /sections/             # Page sections as separate components
    /what-we-offer-section.tsx
    /how-it-works-section.tsx
    /reviews-section.tsx
    /application-section.tsx
    /contact-section.tsx
    /qualifications-section.tsx

/public                  # Static assets
\`\`\`

## Technologies Used

- **Framework**: Next.js 15+
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Font**: Geist (via next/font)

## License

Proprietary - Specialty Capital
