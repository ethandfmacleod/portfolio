import AboutMe from '@pages/AboutMe'
import HomeLab from '@pages/HomeLab'
import Honors from '@pages/Honors'

export interface RouteType {
    path: string
    component: React.ComponentType<unknown>
}

export const appRoutes: RouteType[] = [
    { path: 'honors', component: Honors },
    { path: 'about-me', component: AboutMe },
    { path: '/other/homelab', component: HomeLab },
]
