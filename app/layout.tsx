import './globals.css';
import { League_Spartan, Lobster } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ScrollProvider } from '../components/ScrollProvider';

const leagueSpartan = League_Spartan({
    subsets: ['latin'],
    variable: '--font-league-spartan',
    display: 'swap',
});

const lobster = Lobster({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-lobster',
    display: 'swap',
});

export const metadata = {
    title: 'Charlie Popcorn',
    description: 'Handcrafted gourmet popcorn with unique flavors.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${leagueSpartan.variable} ${lobster.variable}`}>
            <body className="antialiased font-league-spartan bg-base-100 text-base-content min-h-screen flex flex-col">
                <ScrollProvider>
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </ScrollProvider>
            </body>
        </html>
    );
}
