import Layout from '@/components/layout'
import { Progress } from '@/components/progress'
import { useSystem } from '@/hooks/system/hooks'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

type Props = {
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const props: Props = {
    }

    return {
        props
    }
}

export default function SampleForm() {
    const [sysState, sysDispatch] = useSystem({ redirectTo: '/' })

    return (
        <>
            <Layout>
                <h2>2023Team-J</h2>
                <ul>
                    <li>
                        <Link href={'/samples/team'}>2023Team</Link>
                    </li>
                </ul>
            </Layout>

            {(sysState.isWaiting) &&
                <Progress />
            }
        </>
    )
}