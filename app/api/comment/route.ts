import { NextRequest } from "next/server";
import { nanoid } from "nanoid";
import { redis } from "../../lib/redis";

export async function POST (req:NextRequest){

   try {

    const body = await req.json()

    const {text, tags } = body

    const commentId = nanoid()
    
    // retrieve and keep track of the comment details 

    const comment = {
         text,
         tags,
         timestamps: new Date(),
         author : req.cookies.get('user_id')
    }

    console.log(comment)


      // await Promise.all([
      //    // store the comments Id in a list 
      //    redis.rpush('comments', commentId),
         
      //    // store the comment tags in a set
      //    redis.sadd(`tags:${commentId}`, tags),
      //    // store it in redis 
     
      //    redis.hset(`comment:${commentId}`, comment)

      // ])   

      // Demonstrating the use of redis json 

   //    await Promise.all([
   //    redis.rpush('comments',commentId),
   //    redis.json.set('Comment','$',comment)
   // ])


   // lets try changing the data in the json object
   await redis.json.set('Comment','$.text','Thissanwcomment')



    return new Response("OK")
   } catch (error) {
      console.log(error)
    
   }
}