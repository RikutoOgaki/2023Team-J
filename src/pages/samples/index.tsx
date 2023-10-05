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
                <h1>Samples</h1>
                <h2>基礎-React / CSS</h2>
                <ul>
                    <li><Link href='/samples/0001'>No.1 React Component(基本)</Link></li>
                    <li><Link href='/samples/0002'>No.2 React Component(入力と出力)</Link></li>
                    <li><Link href='/samples/0003'>No.3 React Component(入力と内部状態と出力、イベント)</Link></li>
                    <li><Link href='/samples/0004'>No.4 React Component(副作用 side effect)</Link></li>
                    <li><Link href='/samples/0005'>No.5 CSS Modules</Link></li>
                    <li><Link href='/samples/0007'>No.7 React Component(入力部品とstate)</Link></li>
                    <li><Link href='/samples/0011'>No.9 React Component(useEffect / useRef)</Link></li>
                    <li><Link href='/samples/0012'>No.10 React Component(外部Component)</Link></li>
                    <li><Link href='/samples/0013'>No.11 React Component(DRAG AND DROP)</Link></li>
                    <li><Link href='/samples/0014'>No.12 React Component(動的スタイル)</Link></li>
                    <li><Link href='/samples/0015'>No.13 React Component(import / exportサンプル)</Link></li>
                    <li><Link href='/samples/0019'>No.14-1 React Component(コールバックの実装-その1)</Link></li>
                    <li><Link href='/samples/0016'>No.14-2 React Component(コールバックの実装-その2)</Link></li>
                    <li><Link href='/samples/0017'>No.15 React Component(state内にある配列の部分更新)</Link></li>
                    <li><Link href='/samples/0018'>No.16 React Component(カスタムフック)</Link></li>
                    <li><Link href='/samples/0021'>No.17 React Component(useEffectとReactコンポーネントのライフサイクル)</Link></li>
                    <li><Link href='/samples/0022'>No.18 React Component(useEffectとaddEventListener)</Link></li>
                    <li><Link href='/samples/0026'>No.19 React Component(Componentにstyleを外から伝える例)</Link></li>
                    <li><Link href='/samples/0030'>No.26 React Component(useContext 0 - useContextなし)</Link></li>
                    <li><Link href='/samples/0031'>No.27 React Component(useContext 1)</Link></li>
                    <li><Link href='/samples/0032'>No.28 React Component(useContext 2 - Custom Hooks)</Link></li>
                    <li><Link href='/samples/0033'>No.29 React Component(useReducer)</Link></li>
                    <li><Link href='/samples/0034'>No.30 React Component(useReducerの"やや"実践的応用)</Link></li>
                    <li><Link href='/samples/0038'>No.33 React Component(PrimeReact - DataTable)</Link></li>
                    <li><Link href='/samples/0039'>No.34 React Component(PrimeReact - DataTable - Lazy Load)</Link></li>
                    <li><Link href='/samples/0040'>No.35 React Component(validation 入力チェック)</Link></li>
                    <li><Link href='/samples/0041'>No.36 React Component(PrimeReact - DataTable - Filter)</Link></li>
                    <li><Link href='/samples/0042'>No.37 React Component(ゲーム風の処理)</Link></li>
                </ul>

                <h2>基礎-非同期・サーバーサイド・データベース</h2>
                <ul>
                    <li><Link href='/samples/0036'>No.32 Promise</Link></li>
                    <li><Link href='/samples/0008'>No.8 React Component7(fetch)</Link></li>
                    <li><Link href='/samples/0010'>No.10 React Component8(fetch2)</Link></li>
                    <li><Link href='/samples/0024'>No.21 認証関連(HTTP cookies)</Link></li>
                </ul>

                <h2>基礎-数値・日時</h2>
                <ul>
                    <li><Link href='/samples/0020'>No.20 数値の扱い</Link></li>
                    <li><Link href='/samples/0027'>No.23 日付操作(Day.js)</Link></li>
                </ul>

                <h2>基礎-配列</h2>
                <ul>
                    <li><Link href='/samples/0006'>No.6 React Component(配列)</Link></li>
                    <li><Link href='/samples/0028'>No.24 1次元配列の追加・更新・削除</Link></li>
                    <li><Link href='/samples/0029'>No.25 2次元配列の追加・更新・削除</Link></li>
                </ul>

                <h2>基礎-アルゴリズム・テクニック・その他</h2>
                <ul>
                    <li><Link href='/samples/0025'>No.22 Tree構造</Link></li>
                    <li><Link href='/samples/0035'>No.31 アップロード&amp;ダウンロード</Link></li>
                </ul>

                <h2>課題1</h2>
                <ul>
                    <li><Link href='/samples/todo'>TODO(素直に実装したバージョン)</Link></li>
                    <li><Link href='/samples/todo2'>TODO - 推敲1(ファイル分割)</Link></li>
                    <li><Link href='/samples/todo3'>TODO - 推敲2(Custom Hooks)</Link></li>
                </ul>

                <h2>課題2</h2>
                <ul>
                    <li><Link href='/samples/0023'>カレンダー</Link></li>
                </ul>

                <h2>参考: HTML / CSS / JavaScript</h2>
                <ul>
                    <li><Link href='https://developer.mozilla.org/ja/docs/Web/HTML'>MDN - HTML</Link></li>
                    <li><Link href='https://developer.mozilla.org/ja/docs/Web/CSS'>MDN - CSS</Link></li>
                    <li><Link href='https://developer.mozilla.org/ja/docs/Web/JavaScript'>MDN - JavaScript</Link></li>
                </ul>

                <h2>参考: TypeScript</h2>
                <ul>
                    <li><Link href='https://www.typescriptlang.org/docs/handbook/intro.html'>The TypeScript Handbook</Link></li>
                    <li><Link href='https://www.typescriptlang.org/cheatsheets'>TypeScript Cheat Sheets</Link></li>
                    <li><Link href='https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example'>React TypeScript Cheatsheet</Link></li>
                    <li><Link href='https://typescript-jp.gitbook.io/deep-dive/'>TypeScript Deep Dive 日本語版</Link></li>
                </ul>

                <h2>参考: React</h2>
                <ul>
                    <li><Link href='https://beta.reactjs.org/reference/react'>React Docs - Built-in React Hooks</Link></li>
                    <li><Link href='https://beta.reactjs.org/reference/react/useContext'>React Docs - useContext</Link></li>
                    <li><Link href='https://beta.reactjs.org/reference/react/useReducer'>React Docs - useReducer</Link></li>
                </ul>

                <h2>参考: Next.js</h2>
                <ul>
                    <li><Link href='https://nextjs.org/docs/getting-started'>Official Docs</Link></li>
                    <li><Link href='https://nextjs.org/docs/basic-features/typescript'>TypeScript</Link></li>
                </ul>

                <h2>ひ・み・つ</h2>
                <ul>
                    <li><Link href='/samples/tetris'>???</Link></li>
                </ul>

                <h2>開発用(推敲中)</h2>
                <ul>
                    <li><Link href='/samples/5000'>メッセージ</Link></li>
                </ul>
            </Layout>

            {(sysState.isWaiting) &&
                <Progress />
            }
        </>
    )
}