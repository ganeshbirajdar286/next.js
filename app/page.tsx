import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"

function Home() {

   const events = [
  {
    image: "/images/event1.png",
    title: "Tech Conference 2026",
    slug: "tech-conference-2026",
    location: "Mumbai",
    date: "15 June 2026",
    time: "10:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "React Developer Meetup",
    slug: "react-developer-meetup",
    location: "Pune",
    date: "20 June 2026",
    time: "02:00 PM",
  },
  {
    image: "/images/event3.png",
    title: "AI & ML Workshop",
    slug: "ai-ml-workshop",
    location: "Bengaluru",
    date: "25 June 2026",
    time: "11:00 AM",
  },
  {
    image: "/images/event4.png",
    title: "Startup Networking Night",
    slug: "startup-networking-night",
    location: "Hyderabad",
    date: "30 June 2026",
    time: "06:30 PM",
  },
  {
    image: "/images/event5.png",
    title: "Full Stack Bootcamp",
    slug: "full-stack-bootcamp",
    location: "Delhi",
    date: "05 July 2026",
    time: "09:00 AM",
  },
  {
  image: "/images/event6.png",
  title: "JavaScript Masterclass",
  slug: "javascript-masterclass",
  location: "Chennai",
  date: "12 July 2026",
  time: "04:00 PM",
}
];
  return (
    <>
      <section>
        <h1 className="text-center mt-10">The Hub for Every Dev <br /> Event You Can&apos;t Miss</h1>
        <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

        <ExploreBtn/>

        <div className="mt-20 space-y-7">
          <h3>Featured Events</h3>
          <ul className="events">
            {events.map((item,index)=>(
              <li key={index}><EventCard {...item}/></li>
               
            ))}
          </ul>
        </div>
      </section>
      </>

      )
}

      export default Home