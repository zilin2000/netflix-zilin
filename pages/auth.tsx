import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant,setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    },[])

    return (
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black bg-opacity-50 w-full h-full">
          <nav className="px-12 py-5">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </nav>
  
          <div className="flex justify-center">
            {/* 包含 "Sign in" 的 div 应该嵌套在此 */}
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md">
                {/* 修正 text-white 类名，并确保 h2 标签嵌套正确 */}
                <h2 className="text-white text-4xl mb-8 font-semibold">
                    {variant === 'login' ? 'Sign in' : 'Register'}
                </h2> 
                <div className="flex flex-col gap-4">
                    {variant === 'register' &&(
                    <Input
                        label="Username"
                        onChange={(ev: any) => setName(ev.target.value)}
                        id="name"
                        value={name}
                    />)}
                    <Input
                        label="Email"
                        onChange={(ev: any) => setEmail(ev.target.value)}
                        id="email"
                        type="email"
                        value={email}
                    />
                    <Input
                        label="Password"
                        onChange={(ev: any) => setPassword(ev.target.value)}
                        id="password"
                        type="password"
                        value={password}
                    />
                </div> 
                <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                    {variant === 'login' ? 'Login' : 'Sign up'}
                </button>
                <p className="text-neutral-500 mt-12">
                    {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                    <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                        {variant === 'login' ? 'Create an account' : 'Login'}
                    </span>

                </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Auth;
  