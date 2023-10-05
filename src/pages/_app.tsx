import { SysContext, SysDispatchContext } from '@/context/sys-context'
import { hideMessage } from '@/hooks/system/actioncreator'
import { useSystemReducer } from '@/hooks/system/reducer'
import '@/styles/globals.css'
import { Noto_Sans_JP } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Dialog } from 'primereact/dialog'

import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'

const notoSansJP = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  const [sysState, sysDispatch] = useSystemReducer({
    isLoggedin: false
  })

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSansJP.style.fontFamily};
        }
      `}</style>

      <SysContext.Provider value={sysState}>
        <SysDispatchContext.Provider value={sysDispatch}>
          <Component {...pageProps} />
          <Dialog visible={sysState.isVisible}
            header={sysState.header}
            style={{ minWidth: '640px', minHeight: '240px' }}
            onHide={() => hideMessage(sysDispatch)}>
            <p>{sysState.message}</p>
          </Dialog>
        </SysDispatchContext.Provider>
      </SysContext.Provider>
    </>
  )
}