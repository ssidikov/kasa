import BannerAbout from '../../assets/Banner/Banner-about.jpg'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'

function About() {
  return (
    <section className='about'>
      <div className='about-banner'>
        <Banner image={BannerAbout} altText='Chez vous, partout et ailleurs' lighter={true} />
      </div>
      <div className='dropdowns-container'>
        <Dropdown title='Fiabilité'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor ligula id nisi
          malesuada, sit amet facilisis neque tincidunt. Integer tincidunt bibendum orci a
          vulputate.
        </Dropdown>
        <Dropdown title='Respect'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo risus sit amet felis
          aliquet, at bibendum metus tincidunt. Curabitur dignissim, eros non gravida cursus, ex
          purus iaculis augue, at posuere velit risus sed lacus.
        </Dropdown>
        <Dropdown title='Service'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt, mauris eu
          facilisis malesuada, velit urna ultricies est, sit amet rutrum lectus odio et velit.
        </Dropdown>
        <Dropdown title='Sécurité'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, libero et
          elementum malesuada, enim nulla porttitor velit, et dapibus libero ipsum at nisl.
        </Dropdown>
      </div>
    </section>
  )
}

export default About
