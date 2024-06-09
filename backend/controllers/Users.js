import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async(req, res) => {

    const { fname, lname, cname, ctype, cwebsite, email, pno, state, country, pword, cpword, access_level} = req.body;

    if(cname==='' || email==='' || password==='' || fname==='' || pno==='' || lname==='' ||  country==='' || state==='' || ctype==='') return res.status(400).json({msg: "Please Fill All Field"});

    const chkemail = await Users.findAll({ where: { email: email } });
    if(chkemail.length > 0) return res.status(400).json({msg: "Email Already Exist"});

    const chkname = await Users.findAll({ where: { name: cname } });
    if(chkname.length > 0) return res.status(400).json({msg: "Company Name Already Exist"});

    const chkno = await Users.findAll({ where: { pno: pno } });
    if(chkno.length > 0) return res.status(400).json({msg: "Phone Number Already Exist"});

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(pword, salt);

    if(access_level === "Individual"){

        try {
            await Users.create({
                first_name: fname,
                last_name: lname,
                email: email,
                email_verified: 'Not Verified',
                pno: pno,
                access_level: access_level,
                password: hashPassword,
            });
            res.json({msg: "Registration Successful"});
        } catch (error) {
            console.log(error);
        }

    }else{

        try {
            await Users.create({
                company_name: cname,
                company_type: ctype,
                company_website: cwebsite,
                email: email,
                email_verified: 'Not Verified',
                pno: pno,
                country: country,
                state: state,
                access_level: access_level,
                password: hashPassword,
            });
            res.json({msg: "Registration Successful"});
        } catch (error) {
            console.log(error);
        }

    }

}
