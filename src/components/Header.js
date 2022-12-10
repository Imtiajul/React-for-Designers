import React from "react"
import { Link } from "gatsby"
import './Header.css'
import StripeCheckout from "react-stripe-checkout"

import logo from "../images/logo-designcode.svg"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = (event) => {
    // const scrollTop = window.pageYOffset;
    // if (scrollTop > 50) {
    //   this.setState({ hasScrolled: true });
    // } else {
    //   this.setState({ hasScrolled: false });
    // }
    
  }
    handlePurchase = (token) => {
        const amount = 5000
        const description = "My awesome product"
        
        const objBody = {
          tokenId: token.id,
          email: token.email,
          name: token.name,
          description, 
          amount
        }
      fetch('https://localhost:9000/functions/stripe-charge', {
        method: 'POST',
        body: JSON.stringify(objBody)
      })
    }

  render() {
    return (
      <header className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg').default} alt="logo" width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <StripeCheckout
            amount={530.300}
            image={'https://i.ibb.co/t2sG80H/logo-figma.png'}
            token={this.handlePurchase}
            stripeKey = {'pk_test_51LbRzCHIdzWvbWi0CvjXQb23td0f6m2sicbBZmI6kiIgGw00w4woiHWWtZofLDZjnN3MR2dvgNZc2BdhIHyrsEWm00j743c3ah'}
            >

            <button>Buy</button>
          </StripeCheckout>
        </div>
      </header>
    )
  }
}

export default Header
