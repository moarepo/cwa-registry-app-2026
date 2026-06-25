import {useThemeStore} from "../store/usethemeStore"
import {useDisplayStore} from "../store/useDisplayStore"
import {computed} from "vue"

export function useThemeComposable():boolean{
  const theme = useThemeStore();
    
  let status = computed<boolean>(()=>{ return theme.get_theme_status})
  return status.value
}

export function useAlertModalComposable(meassage:string){
    const display = useDisplayStore()
    display.change_status(meassage)
}
