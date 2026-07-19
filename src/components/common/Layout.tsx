import React, { use } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../../features/theme/useTheme';

// Tell TS that the layout must receive children
type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({children}: LayoutProps) {
    // Read the useTheme
    const {colorTheme} = useTheme();
    // Adding conditional classes
    let backgroundClass;

    if(colorTheme === 'ruby') {
        backgroundClass = 'bg-gradient-to-r from-rose-700 to-stone-50';
    }
    if(colorTheme === 'emerald') {
        backgroundClass = 'bg-gradient-to-r from-emerald-700 to-stone-50';
    }
    if(colorTheme === 'sapphire') {
        backgroundClass = 'bg-gradient-to-r from-blue-700 to-stone-50';
    }

    return (
        <div className={`min-h-screen flex flex-col ${backgroundClass}`}>
            <Navbar />
            <main className='flex-1'>
                <div className='max-w-7xl mx-auto px-4 py-8'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}