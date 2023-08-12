"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import axios from 'axios' 
import './page.module.css'


export default function Home() {
  const addComment  = async()=>{
    const {data} = await axios.post('/api/comment',{
    text:'hello world',
    tags: ['Typescript']
    })
  }
  return (
    <div className = {styles.main}>
      <div className={styles.form}>
        <textarea className={styles.textarea}  placeholder="Enter your text here"></textarea>
        <button onClick={addComment} >Add comment</button>
        <button><Link href={'/comments'}> View Comment </Link></button>
      </div>

    </div>
  )
}
