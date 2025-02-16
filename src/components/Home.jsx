// Exemplo de Home.jsx com todas as seções
import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Blog from './Blog'
import CTASection from './CTASection'
import Contact from './Contact'
import CoursesSection from './CoursesSection'
import Header from './Header'
import { CssBaseline } from '@mui/material'


export default function Home() {
    return (
        <>  
            <CssBaseline />
            <Header />
            <HeroSection />
            <CoursesSection />
            <CTASection />
            <About />
            <Services />
            <Portfolio />
            <Blog />
            <Contact />
        </>
    )
}
