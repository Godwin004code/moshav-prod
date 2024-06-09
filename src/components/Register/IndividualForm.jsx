import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function IndividualForm() {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [pno, setPno] = useState('')
  const [pword, setPword] = useState('')
  const [cpword, setCpword] = useState('')
  const history = useNavigate()

  const Auth = async (e) => {
    e.preventDefault()
    try {
        await axios.post('https://moshavcapital.co.uk/register', {
            fname: fname,
            lname: lname,
            email: email,
            pno: pno,
            pword: pword,
            cpword: cpword,
            access_level: 'Individual'        
        })
        alert("Registration Successful");
        history('/', {replace: true});
    } catch (error) {
      alert(error.response);
    }
}

  return (
    <form
      action=""
      className="flex flex-col gap-8 register-form max-w-[1000px]"
      onSubmit={Auth}
    >
      {/* name */}
      <div className="flex sm:flex-col items-center gap-3">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="first-name" className="flex items-start">
            First Name{" "}
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="text" name="first-name" id="first-name" value={fname} onChange={(e) => setFname(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="last-name" className="flex items-start">
            Last Name{" "}
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="text" name="last-name" id="last-name" value={lname} onChange={(e) => setLname(e.target.value)} />
        </div>
      </div>

      {/* email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="flex items-start">
          Email Address{" "}
          <span className="text-[red] text-xs items-start inline">*</span>
        </label>
        <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      {/* phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="flex items-start">
          Phone Number{" "}
          <span className="text-[red] text-xs items-start inline">*</span>
        </label>
        <input type="text" name="phone" id="phone" value={pno} onChange={(e) => setPno(e.target.value)} />
      </div>

      {/* Password */}
      <div className="flex sm:flex-col items-center gap-3">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password " className="flex items-start">
            Password{" "}
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="password" name="password" id="password" value={pword} onChange={(e) => setPword(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="confirm-password" className="flex items-start">
            Confirm Password{" "}
            <span className="text-[red] text-xs items-start inline">*</span>
          </label>
          <input type="password" name="confirm-password" id="confirm-password" value={cpword} onChange={(e) => setCpword(e.target.value)} />
        </div>
      </div>

      <div className="flex gap-2">
        <input
          type="checkbox"
          className="checkbox w-full max-w-[20px]"
          name=""
          id=""
        />
        <p>
          I accept the <span className="text-[#1E772C]">Terms of Service</span>{" "}
          as well as <span className="text-[#1E772C]">Privacy Policy.</span>
        </p>
      </div>

      <input type="submit" className="font-bold bg-[#1E772C] p-3 text-white rounded-md w-full" value="Register" />
  
    </form>
  );
}
