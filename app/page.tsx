import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import events from '@/lib/constants'


const Home = () => {
  return (
    <section>
      <h1 className='text-center'>Latest News in Tech and <br/> Dev Events.</h1>
      <p className='text-center mt-5'>Symbolizing Growth and Learning Through Events/Blogs.</p>
      <ExploreBtn/>

      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {events.map((event)=> (
            <li key={event.title}>
              <EventCard {...event}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home