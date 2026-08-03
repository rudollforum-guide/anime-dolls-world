import type { Metadata } from "next";
import { CareGuide } from "@/components/CareGuide";
export const metadata:Metadata={title:{absolute:"Уход за аниме-куклой из TPE и силикона | Anime Dolls World"},description:"Практическая памятка по уходу за аниме-куклой: очистка и сушка, пудрение TPE, уход за силиконом, одежда, окрашивание, парик и безопасное хранение.",alternates:{canonical:"/care/"},openGraph:{title:"Уход за аниме-куклой из TPE и силикона",description:"Очистка, сушка, пудрение TPE, одежда, парик и безопасное хранение.",url:"/care/"}};
export default function Page(){return <CareGuide />}
