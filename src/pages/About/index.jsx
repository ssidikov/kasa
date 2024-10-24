import BannerAbout from '../../assets/Banner/Banner-about.jpg'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

function About() {
  return (
    <section className='about'>
      <div className='about-banner'>
        <Banner image={BannerAbout} altText='Chez vous, partout et ailleurs' lighter={true} />
      </div>
      <div className='collapse-container'>
        <Collapse title='Fiabilité'>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
          aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title='Respect'>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
          discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre
          plateforme.
        </Collapse>
        <Collapse title='Service'>
          La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que
          chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de
          respect et de bienveillance.
        </Collapse>
        <Collapse title='Sécurité'>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
          chaque logement correspond aux critères de sécurité établis par nos services. En laissant
          une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
          les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité
          domestique pour nos hôtes.
        </Collapse>
      </div>
    </section>
  )
}

export default About
