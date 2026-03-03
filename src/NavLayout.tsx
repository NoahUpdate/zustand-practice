import SunIcon from './assets/sun.tsx'
import MoonIcon from './assets/moon.tsx'
import { useThemeStore } from './store/useThemeStore.ts'
import {useAppStore} from "./store/useAppStore.ts";

const NavLayout = () => {
  const theme = useThemeStore((state) => state.theme)
  const updateTheme = useThemeStore((state) => state.updateTheme)
  const isday = theme === 'dark'
  const cant = useAppStore((state)=>state.cant)
  const changetheme = () => {
    updateTheme(isday ? 'light' : 'dark')
  }
  console.log('theme', theme)
  return (
    <>
      <div
        className={`grid grid-cols-3 items-center w-full h-10 border mb-10 ${isday ? 'bg-blue-950 border-blue-950' : 'bg-sky-100 border-sky-300'}`}
      >
        <div className={`col-start-2 justify-self-center font-bold dark:text-sky-100 text-blue-500`}>
          ZUSTAND PRACTICE
        </div>
        <div className="col-start-3 justify-self-end">
          <div className="flex pr-5 gap-2 h-full items-center">
            <div
              className={`h-7 w-7 border rounded-lg text-sky-100 border-b-sky-300 text-[16px] flex items-center justify-center ${isday ? '' : 'bg-blue-500'} `}
            >
              {cant}
            </div>
            <button onClick={changetheme} className={'cursor-pointer'}>
              <div className={isday ? 'text-sky-100' : 'text-blue-500'}>{isday ? <SunIcon /> : <MoonIcon />}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default NavLayout
