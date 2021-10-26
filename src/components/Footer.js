import React from 'react'

export default function Footer() {
    let footerStyle={
        bottom:"0px",
        // width:"100%",
         position:"fixed",
         marginTop:"10px"
         
    }
    return (
        <>
            <footer className="bg-dark text-white text-center container-fluid py-2 sticky-bottom" style={footerStyle}>
                <p style={{margin:"auto"}}>Copyright &copy; Mytodolist</p>
            </footer>
        </>
    )
}
