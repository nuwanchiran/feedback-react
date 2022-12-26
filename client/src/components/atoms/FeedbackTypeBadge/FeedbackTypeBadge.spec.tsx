import {render, screen} from '@testing-library/react'
import FeedbackTypeBadge from './FeedbackTypeBadge'

describe( 'FeedbackTypeBadge', () => {

  it( 'should render bug', () => {
    render( <FeedbackTypeBadge type='bug' /> )

    const badge_element = screen.getByRole( "article" )

    expect( badge_element ).toBeInTheDocument()
  } )
  it( 'should render new feature', () => {
    render( <FeedbackTypeBadge type='new_feature' /> )

    const badge_element = screen.getByRole( "article" )

    expect( badge_element ).toBeInTheDocument()
  } )
  it( 'should render modification', () => {
    render( <FeedbackTypeBadge type='modification' /> )

    const badge_element = screen.getByRole( "article" )

    expect( badge_element ).toBeInTheDocument()
  } )
} )