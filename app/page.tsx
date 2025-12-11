'use client'; // Client components used inside

import Hero from '../components/Hero';
import About from '../components/About';
import Flavors from '../components/Flavors';
import HowToOrder from '../components/HowToOrder';
import FAQs from '../components/FAQs';
import ContactForm from '../components/ContactForm';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Flavors />
            <section className="bg-base-100 py-20 px-4 sm:px-8 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <HowToOrder />
                        <FAQs />
                    </div>
                </div>
            </section>
            <ContactForm />
        </>
    );
}
