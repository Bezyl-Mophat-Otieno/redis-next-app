import { redis } from "../lib/redis";


async function page() {
    // fetch comment id's

    const commentsId = await redis.lrange('comments', 0, 3)
    console.log(commentsId)

    let details:[any] ;

    commentsId.map(async (id) => {
        const data =await redis.hgetall(`comment:${id}`)
        console.log(data)

    })

    commentsId.map(async (id) => {
        const tags =await redis.smembers(`tags:${id}`)
        console.log(tags)
    })



    // const comments = await Promise.all(commentsId.map(async (id) => {
    //     const details:any = await redis.hgetall(`comment:${id}`)
    //     const tags:[String] = await redis.smembers(`tags:${id}`)

    //     return {
    //       commentsId,
    //       details,
    //       tags
    //     }
    // })
    // )

  return (
    <div>
      <div>
        <h1>Comments</h1>
        {/* {
          comments.map((comment)=>{
            return (
               <>
              <div>{comment.details.author}</div>
              <div>{comment.details.content}</div>
               </>
            
            
            )
          })

        } */}
      </div>
      
    </div>
  )
}

export default page
