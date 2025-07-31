import React, { useState } from 'react';

// --- Reusable SVG Icon Components ---
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
  </svg>
);

const PasswordIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);


const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
);

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"></use></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></svg>
);

const TwitterIcon = () => (
    <svg className="w-5 h-5" fill="#1DA1F2" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.333.57-.523 1.234-.523 1.927 0 1.618.823 3.043 2.072 3.878a4.63 4.63 0 01-2.11-.583v.06a4.66 4.66 0 003.733 4.568 4.69 4.69 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995c-.376 0-.747-.022-1.112-.065a13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41z"></path></svg>
);


// --- Reusable Form Components ---
const InputWithIcon = ({ icon, ...props }) => (
    <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
        </div>
        <input
            {...props}
            className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
    </div>
);

const SocialButton = ({ icon, children }) => (
    <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">
        {icon}
    </button>
);


// --- Main Authentication Forms ---
const LoginForm = ({ onSwitch }) => (
    <>
        <h2 className="text-3xl font-bold text-gray-800 text-center">Login</h2>
        <p className="text-gray-500 text-center mb-8">More than <span className="font-semibold text-gray-600">15,000 recipes</span> from around the world!</p>

        <form className="space-y-5">
            <InputWithIcon icon={<EmailIcon />} type="email" placeholder="Enter Email Address" />
            <InputWithIcon icon={<PasswordIcon />} type="password" placeholder="Password" />

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-400" />
                    <span className="ml-2">Remember me</span>
                </label>
                <a href="#" className="font-medium text-pink-500 hover:text-pink-600">Forgot Password?</a>
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 rounded-full hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-lg"
            >
                LOGIN
            </button>
        </form>

        <div className="mt-8">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-400">Login with</span>
                </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
                <SocialButton icon={<FacebookIcon />} />
                <SocialButton icon={<GoogleIcon />} />
                <SocialButton icon={<TwitterIcon />} />
            </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={onSwitch} className="font-medium text-pink-500 hover:text-pink-600">
                Sign up
            </button>
        </p>
    </>
);

const SignUpForm = ({ onSwitch }) => (
     <>
        <h2 className="text-3xl font-bold text-gray-800 text-center">Create Account</h2>
        <p className="text-gray-500 text-center mb-8">Join our community of food lovers!</p>

        <form className="space-y-5">
            <InputWithIcon icon={<UserIcon />} type="text" placeholder="Full Name" />
            <InputWithIcon icon={<EmailIcon />} type="email" placeholder="Enter Email Address" />
            <InputWithIcon icon={<PasswordIcon />} type="password" placeholder="Create Password" />

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 rounded-full hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-lg"
            >
                SIGN UP
            </button>
        </form>

        <div className="mt-8">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-400">Or sign up with</span>
                </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
                <SocialButton icon={<FacebookIcon />} />
                <SocialButton icon={<GoogleIcon />} />
                <SocialButton icon={<TwitterIcon />} />
            </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button onClick={onSwitch} className="font-medium text-pink-500 hover:text-pink-600">
                Login
            </button>
        </p>
    </>
);


// --- The Main Page Component ---
export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans relative overflow-hidden">
            {/* Background decorative images */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-50">
                <img src="https://placehold.co/800x600/F4A261/E76F51?text=Food+Image" alt="Background food" className="w-[800px] h-auto rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-50">
                <img src="https://placehold.co/800x600/2A9D8F/264653?text=Healthy+Bowl" alt="Background food" className="w-[800px] h-auto rounded-full" />
            </div>

            <div className="relative min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="absolute top-8 left-8">
                     <div className="w-24 h-24 bg-white border-4 border-orange-400 rounded-full flex flex-col items-center justify-center shadow-md">
                        <span className="text-sm font-bold text-orange-500">ITALIAN</span>
                        <span className="text-3xl font-serif font-bold text-red-600">PIZZA</span>
                        <span className="text-xs text-gray-500">YOUR TAGLINE</span>
                    </div>
                </div>

                {/* Auth Form Container */}
                <main className="max-w-md w-full bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl z-10">
                    {isLogin ? <LoginForm onSwitch={toggleForm} /> : <SignUpForm onSwitch={toggleForm} />}
                </main>

                {/* Footer */}
                <footer className="absolute bottom-0 w-full p-6 text-gray-600 text-sm">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <div className="flex space-x-6 font-medium">
                            <a href="#" className="hover:text-gray-900">Explore</a>
                            <a href="#" className="hover:text-gray-900">What</a>
                            <a href="#" className="hover:text-gray-900">Help & feedback</a>
                            <a href="#" className="hover:text-gray-900">Contact</a>
                        </div>
                        <div className="flex items-center space-x-4">
                             <p className="text-xs text-gray-400">&copy; 2025 company. All rights and copy rights reserved</p>
                             <div className="flex space-x-3">
                                <a href="#" className="text-gray-400 hover:text-gray-600"><FacebookIcon/></a>
                                <a href="#" className="text-gray-400 hover:text-gray-600"><GoogleIcon/></a>
                                <a href="#" className="text-gray-400 hover:text-gray-600"><TwitterIcon/></a>
                             </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
