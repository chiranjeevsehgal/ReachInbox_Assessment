import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

	if (token) {
		navigate("/");
	} else {
		navigate("/login");
	}

	const handleGoogleSignUp = () => {
		window.location.href =
			"https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reach-inbox-assessment-chiranjeev.vercel.app/";
	};
    
    return (
        <>
            {/* Header */}
            <div className='bg-[rgb(0,0,0)] w-full h-[64px] text-red-500 pt-[10px] pr-[100px] pb-[10px] pl-[100px] border-b border-[#25262B] flex justify-center items-center'>
                <img src="logo.svg" alt="Logo" className='h-[24px] w-[156.77px]' />
            </div>

            {/* Centre */}
            <div className='bg-[#000] w-full h-[663px] pt-[59px] pr-[29px] pb-[59px] pl-[29px] rounded-4px flex flex-col items-center gap-[150px] justify-center'>

                <div className='pt-[24px] pr-[40px] pb-[40px] pl-[40px] gap-[48px] border rounded-[17px] w-[460px] h-[312px] border-[#343A40] bg-gradient-to-b from-[#111214] to-[#121212] flex flex-col justify-center '>
                    <div className='w-[380px] flex flex-col gap-[32px]'>
                        <h2 className='text-[20px] text-center text-[#FFFFFF]'>Create a new account</h2>
                        <button className='pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[10px] border w-[380px] border-[#707172] rounded-[4px] text-[#CCCCCC] tracking-[-0.3px] text-center text-[16px] flex fap-[16px] items-center justify-center' onClick={handleGoogleSignUp}>  <img src="google.svg" alt="Google Logo" className="w-[23.5px] h-[32px]" />
                        Sign Up with Google</button>
                    </div>

                    <div className='w-[380px] h-[97px] flex flex-col gap-[24px] items-center'>

                        <button className='bg-[linear-gradient(180deg,#4B63DD_100%,#0524BF_99%)] w-[195px] h-[48px] pt-[13px] pr-[35px] pb-[13px] pl-[35px] gap-[10px] flex flex-row rounded-[4px] text-[14px] font-semibold text-[#FFFFFF]'>Create an Account</button>
                        <p className='w-[248px] text-[#909296] text-center font-normal text-[16px]'>Already have an account? <a href="" className='text-[#C1C2C5]'>Sign In</a></p>

                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className='bg-[#121212] w-full h-[53px] gap-[10px] border-t border-[#25262B] pt-[20px] pr-[100px] pb-[20px] pl-[100px] flex items-center justify-center'>
                <div className='w-full h-[19px] gap-[8px]'>
                    <p className='text-[#5C5F66] text-center text-[12px]'>© 2023 Reachinbox. All rights reserved.</p>

                </div>
            </div>
        </>
    )
}

export default Login