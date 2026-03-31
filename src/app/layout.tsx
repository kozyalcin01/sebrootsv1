import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sobroots — Carry Your Roots',
  description: 'El yapımı deri çantalar. Sınırlı üretim, zamansız tasarım.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
