> author: Zilin Xu  
> date: 2023.11.2  
> resource: https://www.codewithantonio.com/projects/video-platform

# User accounts
- test1 test1@gmail.com 1
- 
# Daily Log

## 11.2

![截屏2023-11-03 14.28.54 (2).png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1fb352716dcb45f68acd339eda3181ab~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2880&h=1800&s=694488&e=png&b=1b1b1b)

创建了一个npx项目，把里面的内容，css都去掉

视频0:00 - 8:00

## 11.3

![截屏2023-11-04 00.30.37.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5ea5a9dcc7c448f80aa6f0fea46d15a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=3008&h=1692&s=5189863&e=png&b=181616)

![截屏2023-11-04 00.30.37 (2).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce6ed83a8c2f48ab95c5a5a1b3b245df~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2880&h=1800&s=902756&e=png&b=1e1e1e)

写好了登陆注册的页面和按钮，下一步是连接数据库

视频 - 34:00

## 11.5


![截屏2023-11-06 23.23.15.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d9597b785784af19ce3dacfd3a80d50~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=3200&h=1800&s=808431&e=png&b=1c1c1c)

建立了prisma 和 mongodb， 把创建好的model push到 db

视频 -55:00

## 11.11

create nextauth

`npm install next-auth`

`npm install bcrypt`

NEXTAUTH_JWT_SECRET="NEXT-JWT-SECRET"

NEXTAUTH_SECRET="NEXT-SECRET"

`npm i axios `

create /api/register.ts

add some codes into auth.tsx

### 下一步：完善我们的register并让我们的注册保存到database中

首先，在`auth.tsx` add some codes

```typescript
  const register = useCallback(async () => {
    try {
      await axios.post('/api/register',{
        email,
        name,
        password
      });
    }catch (error) {
      console.log(error);
    }
  },[email, name, password]);
  ```
  
  - then we create `/api/register.ts`

```typescript
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    //make sure it is a post call
    if(req.method !== 'POST'){
        return res.status(405).end();
    }

    try{
        const{email, name, password} = req.body;

        //check if email has been taken
        const existingUser = await prismadb.user.findFirst({
            where: {
                email,
            }
        });

        if(existingUser){
            return res.status(422).json({error: "Email taken"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        //save hashedPassword into new user model
        const user = await prismadb.user.create({
            data:{
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date(),
            }
        });

        return res.status(200).json(user);
    }catch (error){
        console.log(error);
        return res.status(300).end();
    }
}
```

下一步中，您在应用程序中添加了用户注册功能。这涉及到创建新用户记录并将其保存到数据库中。这里是完成此功能所涉及的步骤和代码段的解释：

1. **在`auth.tsx`中添加注册功能**:
   - 使用`useCallback`钩子来定义一个名为`register`的函数，该函数是异步的，表示它会进行一些可能耗时的操作（比如网络请求）。
   - 这个`register`函数使用`axios`发送一个`POST`请求到`/api/register`端点，并带上用户的邮箱、名字和密码。
   - 如果请求失败，它会捕获错误并将其打印到控制台。
   - 这个函数依赖于`email`、`name`和`password`变量，这些变量是在用户界面中收集的。

2. **创建`/api/register.ts`文件**:
   - 这是一个API路由处理程序，它会处理对`/api/register`端点的`POST`请求。
   - 它首先检查请求是否为`POST`，如果不是，则返回405状态码并结束请求。
   - 如果是`POST`请求，它会从请求体中提取用户的邮箱、名字和密码。
   - 使用Prisma ORM，它查询数据库以确保没有其他用户已经使用了同一个邮箱。
   - 如果邮箱已经被使用，它会返回422状态码并且带上错误信息。
   - 如果邮箱未被使用，它使用`bcrypt`来加密（哈希）密码，增加安全性。
   - 然后创建一个新的用户记录，将加密后的密码和其他用户信息保存到数据库中。
   - 如果用户创建成功，它会返回200状态码和用户信息。
   - 如果过程中出现任何错误，它会捕获这些错误，打印到控制台，并返回500状态码。

通过这些步骤，您的应用程序现在能够让用户注册新账户，并且确保所有用户的密码都以加密形式安全地存储在数据库中。这是现代web应用程序中的一个标准做法，可以帮助保护用户的凭据不被未经授权的访问。

### 然后我们在网页上操作，观察http状态码,再刷新database

![截屏2023-11-11 15.36.16 (2).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7302cd6cbae84dcd8066ea98f0dbbe3a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2880&h=1800&s=3997562&e=png&b=1f1e1e)

![截屏2023-11-11 15.36.21 (2).png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49db9e4eb3df4ff9b312af908dd6d838~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2880&h=1800&s=3923557&e=png&b=1f1e1e)

![截屏2023-11-11 15.36.34.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4776ac9ea74c4db1a6bcf6bf814af57a~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2848&h=1478&s=470636&e=png&b=ffffff)


## 11.12

### Sign-in

- edit `auth.tsx`

`import {signIn} from 'next-auth/react';`

``` typescript
//create login function
  const login = useCallback(async () => {
    try{
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });
    }catch (error){
      console.log(error);
    }
  }, [email, password]);
```

![截屏2023-11-12 20.15.46.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/588a77557fa5428cbf6a54131833a3d8~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=2860&h=1726&s=3706203&e=png&b=1f1e1e)

> test6@gmail.com  
> test6

we see successfully login!

- add router

` const router = useRouter();`

``` typescript 
    //create login function
    const login = useCallback(async () => {
      try{
        await signIn('credentials', {
          email,
          password,
          redirect: false,
          callbackUrl: '/'
        });
  
        router.push('/');
      }catch (error){
        console.log(error);
      }
    }, [email, password, router]);
```
1.  **修改`auth.tsx`文件**:

    -   首先，导入`signIn`函数，这是NextAuth提供的用于处理登录流程的函数。

1.  **创建登录函数**:

    -   使用`useCallback`钩子定义一个名为`login`的函数，这是一个异步函数，表示它将执行可能耗时的操作（如网络请求）。
    -   在`login`函数内部，使用`signIn`函数来发起登录尝试。传递的参数指定了使用`credentials`提供者（之前设置的自定义登录），以及用户输入的`email`和`password`。
    -   `redirect: false`参数告诉`signIn`函数在登录成功后不要自动重定向用户，这允许您在代码中手动处理重定向。
    -   `callbackUrl: '/'`参数指定了登录成功后应该重定向到的URL地址。

1.  **测试登录**:

    -   使用测试凭据（在这个例子中为`test6@gmail.com`和密码`test6`）进行登录，您观察到登录成功。

1.  **添加路由**:

    -   导入`useRouter`钩子，它允许您在函数组件中访问路由对象。
    -   在`login`函数中，如果`signIn`调用成功（即登录成功），使用`router.push('/')`将用户重定向到主页（`'/'`）。

1.  **捕获错误**:

    -   如果`signIn`过程中抛出错误，比如凭据无效，它会被捕获并打印到控制台。

这段代码结合了Next.js的路由系统和NextAuth的认证机制，实现了一个典型的登录流程。用户提交他们的邮箱和密码后，如果验证成功，他们将被重定向到应用程序的主页。这样，用户就可以通过一个安全的

**为什么要Router**

使用 `router` 对象是 Next.js 路由库的一个部分，用来在页面间导航。在您的登录函数中，`router` 被用来在成功登录后将用户重定向到另一个页面。这里是代码中`router`的用途：

`router.push('/')`: 当用户成功登录后，这行代码将用户的浏览器导航到根路径(`/`)，也就是网站的首页。`router.push` 方法通过编程方式导航到指定的路径，这样用户就不需要手动点击链接或按钮来切换页面。

在这种情况下，`router`的使用提供了更丰富的用户体验，因为您可以控制登录成功后用户被带到的确切页面。例如，如果用户尝试访问一个需要认证后才能查看的页面，您可以在他们登录后将他们重定向回那个页面，而不是总是将他们送回首页。

此外，设置`redirect: false`在`signIn`方法中告诉NextAuth不要自动处理重定向，这就意味着您需要手动处理重定向，这正是`router.push('/')`这行代码的作用。这种方法也允许在页面跳转前执行额外的操作，比如设置状态、存储信息或者调用API。

## 11.14

### Google and Github OAuth

- run command `npm install react-icons `

- in `auth.tsx` wrote

```typescript
// 11.14 import icons for google and github
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
```

- in `auth.tsx` add

```typrscript
<div className="flex flex-row items center gap-4 mt-8 justify-center ">
                <div
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
                    <FcGoogle size ={30} />


                </div>
                <div
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
                    <FaGithub size ={30} />


                </div>

            </div>
```

- in `.env` add
```
GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

- in `pages/api/auth/nextauth.ts` add
```typescript
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
```

under `providers` add
```typescript
GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || ''
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
```

- run command `npm install @next-auth/prisma-adapter`

- in `nextauth.ts` add 
```tsx
import {PrismaAdapter} from '@next-auth/prisma-adapter';
```

under `debug` add 
```tsx
adapter: PrismaAdapter(prismadb),
```

- go to `Github` click `setting` -> `developer setting' -> add OAuth
- copy the `client_id` and `secret` into `.env`
- in `auth.tsx` under **github div** write 

``` tsx
onClick={() => signIn('github', { callbackUrl:'/'})}
```

Then we go the our webpage and click github icon, we will see the `/` page and in the Database. we see out github account

- same for google

在您的项目中，您现在添加了使用Google和GitHub账户进行OAuth登录的功能。以下是您所做步骤的中文解释：

1. **安装图标库**:
   - 运行`npm install react-icons`来安装React图标库，这样您就可以在UI中使用预先设计的图标了。

2. **导入图标**:
   - 在`auth.tsx`文件中，您导入了Google和GitHub的图标，这样就可以在登录按钮上显示这些图标。

3. **添加图标到UI**:
   - 您在`auth.tsx`的一个`div`中添加了这些图标，创建了两个圆形按钮，一个用于Google登录，一个用于GitHub登录。每个按钮都有适当的样式，并且在用户鼠标悬停时有透明度变化的效果。

4. **设置环境变量**:
   - 在`.env`文件中，您添加了Google和GitHub OAuth应用程序的客户端ID和密钥。这些是从Google和GitHub的开发者设置中获取的，用于设置OAuth流程。

5. **添加OAuth提供者**:
   - 在`pages/api/auth/[...nextauth].ts`中，您导入了GitHub和Google的NextAuth提供者。
   - 在`providers`数组中添加了对应的提供者配置，包括客户端ID和密钥，这些信息将从环境变量中获取。

6. **安装Prisma适配器**:
   - 运行`npm install @next-auth/prisma-adapter`安装Prisma适配器，这样NextAuth就可以与Prisma一起工作，将用户数据保存到数据库中。

7. **配置Prisma适配器**:
   - 在`nextauth.ts`文件中，您导入了Prisma适配器，并在NextAuth配置中添加了它。这允许NextAuth使用Prisma来保存和检索用户数据。

8. **设置GitHub OAuth应用程序**:
   - 在GitHub网站上，您需要设置一个OAuth应用程序。在设置OAuth应用程序后，GitHub会提供一个客户端ID和密钥。
   - 将这些信息复制到`.env`文件中对应的环境变量中。

9. **添加GitHub登录事件**:
   - 在`auth.tsx`中，为GitHub图标按钮添加了一个`onClick`事件处理器，当点击时会调用`signIn`函数，并指定使用'github'提供者进行登录。
   - 设置`callbackUrl`为'/'，意味着登录成功后会重定向到首页。

10. **测试GitHub登录**:
    - 打开您的网页，点击GitHub图标，应该能够看到登录流程，并且在登录成功后跳转到首页。
    - 如果登录成功，在数据库中应该能看到您的GitHub账户信息。

11. **为Google重复相同的步骤**:
    - 对于Google登录，您需要重复相同的步骤，包括在Google开发者控制台创建OAuth应用程序，获取客户端ID和密钥，并在`.env`文件中设置。
    - 在`auth.tsx`中为Google图标按钮添加一个`onClick`事件处理器，同样调用`signIn`函数，并指定使用'google'提供者进行登录。

通过以上步骤，您的应用程序现在支持通过GitHub和Google的OAuth服务进行登录，用户可以使用他们现有的账户来快速登录您的应用程序。这为用户提供了便捷的登录选项，并且OAuth登录也是一种安全的登录方法，因为用户的密码不会被传递到您的服务器。
