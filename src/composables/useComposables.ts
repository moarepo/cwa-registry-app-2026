import {useThemeStore} from "../store/useThemeStore"
import {useDisplayStore} from "../store/useDisplayStore"
import {useStore} from "../store/useStore"
import {useDelegateStore} from "../store/useDelegateStore"
import {useDelegateMeetingStore} from "../store/useDelegateMeetingStore"
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

export function useSuccessModalComposable(meassage:string){
  const display = useDisplayStore()
  display.change_success_status(meassage)
}

export function useDateformat (date:string){
  let new_date = new Date(date)

  const Months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
   
  let _date = new_date.getDate();
  let month = new_date.getMonth();
  let year = new_date.getFullYear();

  let format_date:string = `${Months[month]} ${_date} ${year}`
  let check:string = "Wed Dec 31 1969"

  if(format_date === check || format_date === "December 31 1969"){
    return "Date not seleted."
  }else{
    return format_date
  }
}


export const useChartOptions = ()=>{
  return { responsive: true, maintainAspectRatio: false }
}

export function usePieChartData(){
  let store = useStore() 

  let male_count = computed(()=>{ return store.get_delegate_male_count})
  let female_count = computed(()=>{ return store.get_delegate_female_count})
  
  return{
    labels: ["Male #","Female #"],
    datasets: [
      {
        backgroundColor: ["#155dfc","#f6339a"],
        data: [Number(male_count.value),Number(female_count.value)]
      }
    ]
  }
}

export function useBarChartData(){

  let meetingData = useDelegateMeetingStore()

  let CeremonyandReception = computed(()=>{ return meetingData.get_ceremony_and_reception_count}) 
  let MinisterialMeetings  = computed(()=>{ return meetingData.get_ministerial_meetings_count})
  let TechnicalSessions    = computed(()=>{ return meetingData.get_technical_sessions_count})
  let ExhibitionTradeShow  = computed(()=>{ return meetingData.get_exhibition_n_trade_show_count})
  let Field_Trips_num      = computed(()=>{ return meetingData.get_field_trips})

  return{
    labels: [
      "Opening Ceremony and Reception",
      "Ministerial Meetings",
      "Technical Sessions",
      "Exhibition and Trade Show",
      "Field Trips",
    ],
    datasets:[
      {
        label: 'Participation Information',
        backgroundColor: '#f87979',
        data:[
          Number(CeremonyandReception.value),
          Number(MinisterialMeetings.value),
          Number(TechnicalSessions.value),
          Number(ExhibitionTradeShow.value),
          Number(Field_Trips_num.value)
        ],
        barThickness: 60,
        borderWidth: 1,
        borderRadius: 6, 
        borderSkipped: 'bottom' as const
      }
    ]
  }

}

export function useEXPieChartData(){
  let store = useStore() 

  let local_count = computed(()=>{ return store.get_exhibitors_local_count})
  let international_count = computed(()=>{ return store.get_exhibitors_international_count})
  
  return{
    labels: ["Local","International"],
    datasets: [
      {
        backgroundColor: ["#00c950","#9810fa"],
        data: [Number(local_count.value),Number(international_count.value)]
      }
    ]
  }
}

export function useEXBarChartData(){
  let store = useStore() 

  let optionOne = computed(()=>{ return store.get_booth_option_one}) 
  let optionTwo = computed(()=>{ return store.get_booth_option_two})
  let optionThree = computed(()=>{ return store.get_booth_option_three})
 
  return{
    labels: [
      "Option One",
      "Option Two",
      "Option Three"
    ],
    datasets:[
      {
        label: 'Booth',
        backgroundColor: '#ff6900',
        data:[
          Number(optionOne.value),
          Number(optionTwo.value),
          Number(optionThree.value),
        ],
        barThickness: 60,
        borderWidth: 1,
        borderRadius: 6, 
        borderSkipped: 'bottom' as const
      }
    ]
  }
}

export function useMediaBarChartData(){
  let store = useStore() 

  let _data_ = computed(()=>{ return store.get_media_types}) 
 
  return{
    labels: [
      "Press",
      "Television",
      "Radio",
      "Print",
      "Agency",
      "Other"
    ],
    datasets:[
      {
        label: 'Types',
        backgroundColor: '#00bc7d',
        data:[..._data_.value]
      }
    ]
  }
}

export function useMediaPieChartData(){
  let store = useStore() 

  let l_count = computed(()=>{ return store.get_media_m_local})
  let In_count = computed(()=>{return store.get_media_m_international})
  
  return{
    labels: ["Local","International"],
    datasets: [
      {
        backgroundColor: ["#00c950","#9810fa"],
        data: [Number(l_count.value),Number(In_count.value)]
      }
    ]
  }
}

export function use_bar_chart_data(){
  let store = useStore() 

  let _data = computed(()=>{ return store.get_exhibitor_categories}) 
 
  return{
    labels: [
      "Agriculture",
      "Manufacturing",
      "Agro-Services",
      "Business Services",
      "Tourism",
      "Retail",
      "Non-Profit",
      "NGO",
      "Education",
      "Other"
    ],
    datasets:[
      {
        label: 'Category',
        backgroundColor: '#8200db',
        data:[..._data.value],
        barThickness: 60,
        borderWidth: 1,
        borderRadius: 6, 
        borderSkipped: 'bottom' as const,
      }
    ]
  }
}

export function use_regisration_bar_chart(){
  let store = useDelegateStore()

  let _data = computed(()=>{ return store.get_BarChatData}) 
 
  return{
    labels: [
      "Government",
      "NGO",
      "Private Sector",
      "Farmer",
      "Academic",
      "Regional Body"
    ],
    datasets:[
      {
        label: 'Colour Rep.',
        backgroundColor: '#00c950',
        barThickness: 60,
        borderWidth: 1,
        borderRadius: 6, 
        borderSkipped: 'bottom' as const,
        data:[..._data.value],
      }
    ]
  }
}

export function use_regisration_pie_chart(){
  let store = useDelegateStore()

  let _data = computed(()=>{ return store.get_PieChatData}) 

  return{                                                                                                  
    labels:  [
      'Agriculture',
      'Fisheries',
      'Forestry',
      'Agro Processing'
    ],
    datasets: [
      {
        backgroundColor:[
          "#72A06A",
          "#66B2E4",
          "#228B22",
          "#D9D40C",
        ],
        data: [..._data.value]
      }
    ]
  }
}

export function use_regisration_meeting_bar_chart(){
  let store = useDelegateStore()
  let _data = computed(()=>{ return store.get_meetings_barChart_data}) 
 
  return{
    labels: [
      "Opening & Reception",
      "Ministerial Meetings",
      "Technical Sessions",
      "Expo",
      "Field Trips"
    ],
    datasets:[
      {
        label: 'Colour Rep.',
        backgroundColor: '#efb100',
        barThickness: 60,
        borderWidth: 1,
        borderRadius: 6, 
        borderSkipped: 'bottom' as const,
        data:[..._data.value],
      }
    ]
  }
}