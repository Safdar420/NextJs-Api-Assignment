import { existsSync } from "fs";
import { NextResponse } from "next/server";

export interface IPost{
    userid:number,
    id:number,
    title:string,
    body:string
  }

const EXTERNAL_API_URL ="https://jsonplaceholder.typicode.com/posts"

export async function GET() {
    try {
        const response = await fetch(EXTERNAL_API_URL)
        if (!response.ok) {
            return NextResponse.json(
                {success: false, message:"failed  error"},
                {status:response.status}
            )
        }
        const data:IPost = await response.json()
         return NextResponse.json({success:true, data})
         
    } catch (error:any) {
        return NextResponse.json({success:false,message:"error", error:error.message})
    }
}