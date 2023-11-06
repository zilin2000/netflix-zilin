//这一行代码是将 PrismaClient 类从 Prisma 的 Node.js
//客户端库中导入。PrismaClient 是与数据库交互的主要工具，您可以通过它执行 CRUD（创建、读取、更新、删除）操作。
import { PrismaClient } from "@prisma/client";

//它首先检查 global.prismadb 是否已经定义。在 Node.js 中，global 是一个全局命名空间对象，类似于浏览器中的 window 对象。
//如果 global.prismadb 已经存在，说明我们已经在全局命名空间中创建了一个 PrismaClient 实例，那么我们就可以复用这个实例，而不是创建一个新的。
//如果 global.prismadb 没有定义（例如，当服务器刚启动时），则创建一个新的 PrismaClient 实例。
//这种模式在 Node.js 中是一种优化技术，称为单例模式。它确保在整个 Node.js 进程中，无论创建多少次 PrismaClient，都只有一个实例被创建和使用。这有助于控制内存使用和保持性能。
const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
