import {render, screen} from '@testing-library/react'
import AppButton from './AppButton'

describe( "The AppButton", () => {
  it( 'should first', () => {
    render( <AppButton /> )
    const btn_element = screen.getByRole( "button" )
    expect( btn_element ).toBeInTheDocument()
  } )
} )