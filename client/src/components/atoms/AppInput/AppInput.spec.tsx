import {render, screen} from '@testing-library/react'
import AppInput from './AppInput'

describe( 'The AppInput', () => {
  it( 'should render all elements', () => {

    render( <AppInput title='Name' required placeholder='Name' /> )

    const input_element = screen.getByPlaceholderText( "Name" )
    const start_element = screen.queryByText( "*" )
    const title_element = screen.queryByText( "Name" )

    expect( start_element ).toBeInTheDocument()
    expect( input_element ).toBeInTheDocument()
    expect( title_element ).toBeInTheDocument()
  } )
  // TODO: bug fix
  // it( 'should add correct value', () => {
  //   render( <AppInput title='Name' placeholder='Name' /> )

  //   const input_element = screen.getByRole( "textbox" )

  //   user.type( input_element, '10' )
  //   expect( input_element ).toHaveValue( '10' )
  // } )
} )