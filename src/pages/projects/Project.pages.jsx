import React from 'react'
import ProjectsPreview from '../../components/ProjectsPreview/ProjectsPreview.component'
import { Route, Routes } from 'react-router-dom'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail.component'

const Project = () => {
    return (
        <Routes>
            <Route index element={<ProjectsPreview />} />
            <Route path=':id' element={<ProjectDetail />} />
        </Routes>
    )
}

export default Project