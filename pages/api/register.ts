/**
 * 创建/api/register.ts文件:

这是一个API路由处理程序，它会处理对/api/register端点的POST请求。
它首先检查请求是否为POST，如果不是，则返回405状态码并结束请求。
如果是POST请求，它会从请求体中提取用户的邮箱、名字和密码。
使用Prisma ORM，它查询数据库以确保没有其他用户已经使用了同一个邮箱。
如果邮箱已经被使用，它会返回422状态码并且带上错误信息。
如果邮箱未被使用，它使用bcrypt来加密（哈希）密码，增加安全性。
然后创建一个新的用户记录，将加密后的密码和其他用户信息保存到数据库中。
如果用户创建成功，它会返回200状态码和用户信息。
如果过程中出现任何错误，它会捕获这些错误，打印到控制台，并返回500状态码。
 */

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