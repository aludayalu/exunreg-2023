"use client";
import { useRouter } from 'next/router'
import { useEffect } from "react"

export default function EventsPage() {
  const router=useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      router.push("https://docs.google.com/document/u/6/d/e/2PACX-1vT1q_W-T6QnQLEm5B3onr7QDfLVOa5yglBAsPYbuA0JCHFQmQZDtteOpQNcn5eAm4ovhemXul6kxaII/pub")
    },100)
  })
  return (<>
  </>)
}
