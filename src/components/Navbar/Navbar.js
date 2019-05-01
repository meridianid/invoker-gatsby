import styles from './Navbar.module.scss'
import React from 'react'
import cx from 'classnames'

import { Link } from 'gatsby'

import Github from './github.inline.svg'

import NavbarBrand from '../NavbarBrand/NavbarBrand'
import NavbarSecondary from '../NavbarSecondary/NavbarSecondary'
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Button from '../../primitives/Button/Button'
import Container from '../../layouts/Container/Container'

const Navbar = ({ children, narrow, bleed, className, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
      })}
      {...restProps}>
      <Container
        narrow={narrow}
        bleed={bleed}
        className={cx({
          [styles.container]: true,
          [className]: className,
        })}
        >
        <NavbarPrimary>
          <Link to="/">
            <NavbarBrand />
          </Link>
          <NavbarMenu containerClassName={styles.primaryMenu} to="/">Home</NavbarMenu>
          <NavbarMenu containerClassName={styles.primaryMenu} to="/about">Menu-1</NavbarMenu>
        </NavbarPrimary>
        <NavbarSecondary
          className={cx({
            [styles.secondaryMenu]: true,
          })}
          style={{paddingRight: '24px'}}>
          <a href="https://github.com/meridianid/invoker-gatsby" rel="noopener norefferer" target="_blank" style={{marginRight: '24px'}}>
            <Github style={{width: '24px', color: '#999999' }}/>
          </a>
          <Button primary small>
            Let's get started
          </Button>
        </NavbarSecondary>
      </Container>
    </div>
  )
}

export default Navbar
