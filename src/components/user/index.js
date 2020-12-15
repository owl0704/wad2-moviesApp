import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { useHistory } from "react-router-dom"

export default function User() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/movies/login')
        } catch {
            setError('Failed to log out')
        }
    }

    return (
        <>user
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4" id="profile">User</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <center><strong>Email:</strong> {currentUser.email}</center>
                    <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
                </Card.Body>
            </Card>
            
        </>
    )
}
