import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { currentUser } = await serverAuth(req);

    //why we don't check whether the user exists?
    //we did it in serverAuth.ts
    return res.status(200).json(currentUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}

// 这段代码创建了一个新的API路由处理函数，该函数用于处理对`/api/current`的请求。这里的处理流程分为几个步骤：

// 1. **导入所需模块**:
//    - 导入`NextApiRequest`和`NextApiResponse`，这是Next.js中处理API路由的标准请求和响应类型。

// 2. **导入认证函数**:
//    - 从`@/lib/serverAuth`导入`serverAuth`函数，这是前面步骤中创建的，用于验证用户是否登录并从数据库中获取当前用户信息的函数。

// 3. **定义API路由处理函数**:
//    - `handler`函数是这个API路由的主函数，它异步处理传入的HTTP请求。

// 4. **限制HTTP方法**:
//    - 通过检查`req.method`确保只有`GET`请求被允许。如果不是`GET`请求，返回405状态码并结束响应，这表示“方法不被允许”。

// 5. **获取当前用户**:
//    - 使用`serverAuth`函数获取当前登录用户的信息。这个函数会抛出错误如果用户未登录或者用户信息在数据库中不存在。

// 6. **为什么不再检查用户是否存在**:
//    - 注释解释了为什么不需要再次检查用户是否存在。因为`serverAuth`函数已经进行了这一检查，如果用户未登录或不在数据库中，则会抛出错误。

// 7. **响应用户信息**:
//    - 如果用户验证成功，并从`serverAuth`函数获取了当前用户信息，则返回200状态码和用户信息的JSON对象。

// 8. **错误处理**:
//    - 如果在验证用户的过程中抛出错误，比如用户未登录或没有找到用户记录，它会捕获这个错误，打印到控制台，并返回400状态码。

// 通过这个API路由，前端可以通过发送GET请求到`/api/current`来获取当前登录用户的信息。这是一个常见的模式，用于在客户端展示用户信息或进行用户相关的操作。
