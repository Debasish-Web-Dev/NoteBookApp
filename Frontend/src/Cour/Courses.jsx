import React from 'react'
import Navbar from '../componands/Navbar'
import Course from '../componands/Course'
import Footer from '../componands/Footer'

function Courses() {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen'>
                <Course />

            </div>
            <Footer />
        </div>
    )
}

export default Courses
