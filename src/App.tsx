@@ .. @@
 import React from 'react'
 import Navigation from './components/Navigation'
 import Hero from './components/Hero'
+import About from './About'
+import Characters from './Characters'
+import Story from './Story'
+import Themes from './Themes'
+import Footer from './Footer'

 function App() {
   return (
     <div className="min-h-screen bg-black text-white">
       <Navigation />
       <Hero />
+      <About />
+      <Characters />
+      <Story />
+      <Themes />
+      <Footer />
     </div>
   )
 }