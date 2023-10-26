import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href={'/Home'}>Home</Link>
      <Link href={'/useHomeChoice'}>普段使いする電車の登録画面</Link>
    </>
  )
}