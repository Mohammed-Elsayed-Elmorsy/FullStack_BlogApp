import './log.css'

const Logout = ({ log, logout, setLogout }) => {
    return (
        <div className={log ? 'logout show' : 'logout'} onClick={() => setLogout(false)} style={{
            position: 'fixed',
            zIndex: '10',
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
            <div style={{
                width: '280px',
                height: '120px',
                padding: '10px',
                backgroundColor: 'white'
            }}>
                <h2 style={{

                    padding: '10px 0px',
                    borderBottom: '1px solid #DDD'
                }}>Sure You Want Log Out</h2>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    marginTop: '12px',
                    gap: '10px',
                }}>
                    <span onClick={() => setLogout(false)} style={{
                        display: 'inline-block',
                        cursor: 'pointer',
                        width: '50%',
                        padding: '8px',
                        textAlign: 'center'
                    }}>Cancel</span>
                    <span onClick={logout} style={{
                        display: 'inline-block',
                        cursor: 'pointer',
                        width: '50%',
                        padding: '8px',
                        textAlign: 'center'
                    }}>OK</span>
                </div>
            </div>
        </div>
    )
}

export default Logout
