import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Math() {
    const Sum = () => {
        const navigate = useNavigate();
      
        const handleClickHome = () => {
          navigate("/home");
        };
      
        const handleClickAbout = () => {
          navigate("/About");
        };
        const handleClickContact = () => {
          navigate("/Contact");
        };
        return (
          <div>
            <button onClick={handleClickHome}>Home</button>
            <button onClick={handleClickAbout}>About</button>
            <button onClick={handleClickContact}>Contact</button>
          </div>
        );
      };
  
}