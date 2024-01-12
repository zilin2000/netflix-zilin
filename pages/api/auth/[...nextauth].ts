/**这段代码是用来配置 Next.js 项目中的 NextAuth 认证库的。NextAuth 是一个用于 Next.js 应用的认证库，
 * 它允许您轻松地添加登录功能到您的网站。这段代码配置了NextAuth以使用自定义的Credentials认证提供者，
 * 并且集成了 Prisma 以访问数据库，以及 bcrypt 库用于密码校验。下面是这段代码各部分的作用解释：

1. **导入模块**:
   - `NextAuth`: 导入NextAuth库。
   - `Credentials`: 导入用于自定义登录凭证的NextAuth提供者。
   - `prismadb`: 导入了一个模块来操作Prisma数据库。
   - `compare`: 导入bcrypt库的比较函数，用于比较密码。

2. **NextAuth配置**:
   - `providers`: 定义认证方式，这里使用了Credentials，允许用户使用邮箱和密码登录。
   - `credentials`: 定义了用户需要提供的登录信息字段（邮箱和密码）。

3. **authorize函数**:
   - 这是一个异步函数，用于验证用户的登录信息。
   - 首先检查是否提供了邮箱和密码。
   - 使用Prisma查询数据库，查找与提供的邮箱匹配的用户。
   - 检查用户是否存在以及密码是否正确。
   - 如果用户存在且密码正确，返回用户对象，否则抛出错误。

4. **页面配置**:
   - `pages`: 定义了登录页面的路径，这里指向`/auth`。

5. **调试和会话配置**:
   - `debug`: 根据环境变量决定是否开启调试模式。
   - `session`: 定义会话策略，这里使用了JWT（JSON Web Tokens）。
   - `jwt`: 设置JWT的秘密，通常存储在环境变量中。
   - `secret`: 设置NextAuth的秘密，也是存储在环境变量中，用于加密。

这个文件应该放在`/pages/api/auth/[...nextauth].ts`的路径下，
这样NextAuth就能够处理对`/api/auth/*`路由的请求。每当用户尝试登录时，
NextAuth会调用这个文件中的配置来验证用户的凭证。如果成功，用户将被登录，并且会话信息将被存储起来；如果失败，将会抛出错误消息。 */


import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from '@/lib/prismadb';
import {compare} from 'bcrypt';

//11.14 for Google and Github icons
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import {PrismaAdapter} from '@next-auth/prisma-adapter';
export default NextAuth({
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || ''
        }), 
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        Credentials({
            id:'credentials',
            name: 'Credentials',
            credentials:{
                email:{
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password){
                    throw new Error("Email and password required");
                }

                const user = await prismadb.user.findFirst({
                    where: {
                        email: credentials.email
                    }
                });

                //check if user exists
                if(!user || !user.hashedPassword){
                    throw new Error('Email does not exist');
                }

                const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

                if(!isCorrectPassword){
                    throw new Error('Incorrect password')
                }

                return user;
            }
        })
    ],
    //define our sign in page 
    pages:{
        signIn: '/auth',
    },
    debug: process.env.NODE_ENV === 'development',
    adapter: PrismaAdapter(prismadb),
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
})