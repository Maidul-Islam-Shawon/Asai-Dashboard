import React from 'react'
import { Container } from 'react-bootstrap'
import FileUpload from '../Components/Sidebar/FileUploadComponent/FileUpload'

const FileUploadPage = () => {
    return (
        <Container>
            <h2 style={{marginTop:"80px"}}>File Upload</h2>
            <hr/>
            <FileUpload/>
        </Container>
    )
}

export default FileUploadPage
