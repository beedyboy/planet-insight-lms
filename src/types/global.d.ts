interface IClientMenuList {
    path: string;
    name: string;
    isAuthenticated?: boolean;
    icon: string;
    iconActive: string;
    active: boolean;
}

interface ICourse extends Record<number, unknown> {
    id: number;
    title: string;
    modules: number;
    duration: string;
    liked: boolean;
}
interface IOngoingCourse extends ICourse {
    progress: number;
}