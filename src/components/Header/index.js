import React from 'react'
import Link from 'gatsby-link'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <Link
          to="/"
          css={{
            alignItems: `center`,
            color: `inherit`,
            display: `flex`,
            textDecoration: `none`,
            marginRight: 20
          }}
        >
          <img
            src={logo}
            css={{
              height: 20,
              width: `auto`,
              margin: 0,
            }}
            alt=""
          />
        </Link>
)

export default Header
