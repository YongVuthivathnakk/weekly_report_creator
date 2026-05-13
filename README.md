This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview
This is a weekly report creator specifically designed for CADT (Cambodia Academy of Digital Technology) interns. The application allows users to:
- Fill out a weekly report form with their accomplishments, challenges, and plans
- Generate and preview reports as PDF documents
- Save reports to history for future reference
- Delete or copy previous reports back to the form for editing
- Download reports for submission

## Features
- **Form Input**: Intuitive form for weekly report submission
- **PDF Generation**: Automatic PDF creation and preview using @react-pdf/renderer
- **History Management**: Store, view, and manage previous reports
- **Report Actions**: Delete or copy reports back to the form
- **Responsive Design**: Works on various screen sizes
- **Dark Mode Support**: Theme switching capabilities
- **Form Validation**: Client-side validation with error feedback
- **Toast Notifications**: User feedback for actions (success/errors)

## Technologies Used
- **Framework**: Next.js 16.2.6 (React 19.2.4)
- **State Management**: Zustand
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **PDF Generation**: @react-pdf/renderer
- **Form Handling**: React Hook Form principles with custom stores
- **Date Handling**: date-fns and react-day-picker
- **Rich Text**: react-quill-new for formatted text input
- **Notifications**: Sonner for toast messages
- **Icons**: Lucide React
- **Validation**: Zod
- **State Updates**: Immer for immutable state changes

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# weekly_report_creator
