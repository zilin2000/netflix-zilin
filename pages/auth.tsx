import Input from "@/components/Input";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

// 11.14 import icons for google and github
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  //create login function，详见README ## 11.12
  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  /** 在auth.tsx中添加注册功能:
  使用useCallback钩子来定义一个名为register的函数，该函数是异步的，表示它会进行一些可能耗时的操作（比如网络请求）。
  这个register函数使用axios发送一个POST请求到/api/register端点，并带上用户的邮箱、名字和密码。
  如果请求失败，它会捕获错误并将其打印到控制台。
  这个函数依赖于email、name和password变量，这些变量是在用户界面中收集的。*/
  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

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
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setName(ev.target.value)}
                  id="name"
                  value={name}
                />
              )}
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
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            {/* 11.14 add Google and Github */}
            <div className="flex flex-row items center gap-4 mt-8 justify-center ">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex 
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition

                  "
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex 
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition

                  "
              >
                <FaGithub size={30} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
