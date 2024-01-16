import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismadb from "@/lib/prismadb";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("Not Sign In");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!currentUser) { 
    throw new Error("Not Sign In");
  }

  return { currentUser };
};

export default serverAuth;

// 这段代码是在创建一个名为`serverAuth`的函数，它将被用于在服务器端进行用户认证。这是函数的工作流程：

// 1. **导入所需的模块**:
//    - `NextApiRequest`用于类型注释，以确保`req`参数是Next.js API路由的请求对象。
//    - `getSession`来自`next-auth/react`，用于获取与请求相关联的用户会话。
//    - `prismadb`是Prisma客户端的实例，用于与数据库交互。

// 2. **定义`serverAuth`函数**:
//    - 这个异步函数接受一个`NextApiRequest`对象作为参数，这允许它访问当前的HTTP请求信息。

// 3. **获取会话信息**:
//    - 使用`getSession`函数获取当前请求的会话信息。这个会话信息是由`next-auth`提供的，通常包括用户的认证状态和一些用户信息。

// 4. **检查用户是否登录**:
//    - 首先，检查会话中是否有`user`对象以及`user`对象中是否有`email`属性。如果没有，表示用户未登录，抛出一个错误。

// 5. **从数据库中查找用户**:
//    - 如果用户已登录，使用会话中的`email`来在数据库中查找用户。这是通过`prismadb.user.findUnique`方法实现的，它根据`email`字段查找唯一用户记录。

// 6. **检查用户是否存在于数据库中**:
//    - 即使用户已经通过`next-auth`登录，也需要确认他们在数据库中有记录。如果`findUnique`没有找到用户记录，也抛出一个错误。

// 7. **返回当前用户**:
//    - 如果用户已登录并在数据库中找到了，函数返回一个包含`currentUser`的对象。

// 这个`serverAuth`函数可以在API路由或者`getServerSideProps`/`getStaticProps`中使用，以确保只有已经登录并在数据库中有记录的用户才能访问特定的资源或页面。通过将这个逻辑封装在一个函数中，你可以在整个应用中重复使用它，确保认证逻辑的一致性。
