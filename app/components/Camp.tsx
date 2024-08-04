import Image from "next/image"
import { CAMPIMAGES, PEOPLE_URL } from "./constants"
import ScrollReveal from "./animation/ScrollReveal"

interface CampProps{
  backgroundImage:string,
  title:string,
  peopleJoined:string,
  subTitle:string
}
const Campsite = ({backgroundImage,title,peopleJoined,subTitle}:CampProps)=>{
  return <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
  <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
    <div className="flexCenter gap-4 ">
      <div className="rounded-full bg-green-50 p-4">
        <Image src="/folded-map.svg" alt="map" width={28} height={28} />
      </div>
      <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subTitle}</p>
      </div>
    </div>
    <div className="flexCenter gap-6">
      <span className="flex -space-x-4 overflow-hidden">
        {PEOPLE_URL.map(url=>(<Image className="nline-block h-15 w-15 rounded-full" src={url} alt="person" key={url} width={52} height={52}/>))}
      </span>
      <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
    </div>
  </div>
  </div>
}

function Camp() {
  return (
    <section className=' 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 mt-12 '>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
      {CAMPIMAGES.map(image=>{ return <Campsite backgroundImage={image.backgroundImage} title={image.title}
      subTitle={image.subTitle} peopleJoined={image.peopleJoined}
      
      />})}
      
      </div>
      <ScrollReveal baseClass="transition-all duration-500" visible="visible-y" hidden="hide-y"><div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[743px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
        <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white"><strong>Feeling Lost</strong> And Not Knowing The Way?</h2>
        <p className="regular-14 lg:regular-16 mt-5 text-white">Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
        <Image src="/quote.svg" alt="camp-2" width={186} height={219} className="camp-quote"/>
        </div>
      </div></ScrollReveal>
      
    </section>
  )
}

export default Camp