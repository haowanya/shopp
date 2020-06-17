import FL from "@/pages/FL/FL.vue"
import GR from "@/pages/GR/GR.vue"
import GWC from "@/pages/GWC/GWC.vue"
import SY from "@/pages/SY/SY.vue"
import ZDM from "@/pages/ZDM/ZDM.vue"
export default [
  { path:'/FL',component:FL },
  {path:'/GR',component:GR },
  {path:'/GWC',component:GWC},
  {path:'/SY',component:SY},
  {path:'/ZDM', component:ZDM},
  {path:"/",redirect:"/SY"},

]