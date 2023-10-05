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

export default function LoginForm() {
    const [sysState, sysDispatch] = useSystem({ redirectTo: '/' })

    return (
        <>
            <Layout>
                <p>HOME</p>
                <ul>
                    <li><Link href='/samples'>Samples</Link></li>
                </ul>
            </Layout>

            {(sysState.isWaiting) &&
                <Progress />
            }
        </>
    )
}