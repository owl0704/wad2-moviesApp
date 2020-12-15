import React from 'react'
import User from "../components/user"
import { Container } from "react-bootstrap"



function userPage() {
    return (
        
            <Container
                classname="d-flex align-items-center justify-content-center"
                style={{ minHeight: "400vh" }}
            >
                <div className="w-100 m-5" style={{ maxWidth: "800px" }}>
                    <User />
                </div>
            </Container>
        
    )
}

export default userPage;
