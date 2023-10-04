import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <button type="button" className="btn btn-outline-primary btn-sm ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
      <span className="fa fa-user-plus me-1"></span> About
    </button>
    )
}

export default About
