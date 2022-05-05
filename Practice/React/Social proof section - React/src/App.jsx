import './App.css';

import colton from './images/image-colton.jpg';
import irene from './images/image-irene.jpg';
import anne from './images/image-anne.jpg';

import StarRating from './components/StarRating.jsx';
import Testimony from './components/Testimony.jsx';

function App() {
  return (
    <div className="page">
      <div className="page__wrapper">

        <div className="page__header">
          <h1 className='page__tittle'>10,000+ of our users love our products.</h1>
          <p className='page__text'>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </div>

        <section className='rating'>
          <StarRating props="Reviews" class="starRating first" />
          <StarRating props="Report Guru" class="starRating second" />
          <StarRating props="BestTech" class="starRating third" />
        </section>

      </div>

      <section className='testimony__container'>

        <Testimony
          image={colton}
          alt="Colton image"
          name="Colton Smith"
          testimony="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
        />
        <Testimony
          image={irene}
          alt="Irene image"
          name="Irene Roberts"
          testimony="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
        />
        <Testimony
          image={anne}
          alt="Anne image"
          name="Anne Wallace"
          testimony="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
        />
      </section>

    </div>
  )
}

export default App