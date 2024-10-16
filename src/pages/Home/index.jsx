import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import data from '../../data/data.json'

function Home() {
  return (
    <div>
      <Banner />
      <section className='cards'>
        {data.map((item) => (
          <Card key={item.id} id={item.id} cover={item.cover} title={item.title} />
        ))}
      </section>
    </div>
  )
}

export default Home
