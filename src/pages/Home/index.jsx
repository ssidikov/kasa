import React from 'react'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import data from '../../data/data.json'
import BannerImg from '../../assets/Banner/Banner.jpg'

function Home() {
  return (
    <main>
      <Banner
        image={BannerImg}
        altText='Chez vous, partout et ailleurs'
        title='Chez vous, partout et ailleurs'
      />
      <section className='cards'>
        {data.map((item) => (
          <Card key={item.id} id={item.id} cover={item.cover} title={item.title} />
        ))}
      </section>
    </main>
  )
}

export default Home
