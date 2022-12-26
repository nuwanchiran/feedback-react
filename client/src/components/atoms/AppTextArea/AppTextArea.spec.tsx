import {render, screen} from '@testing-library/react'
import AppTextarea from './AppTextarea'

describe( 'The AppTextArea', () => {
  it( 'should render all elements', () => {
    render( <AppTextarea title='Description' required /> )
    const title_element = screen.queryByText( "Description" )
    const start_element = screen.queryByText( "*" )
    const textarea_element = screen.getByRole( "textbox" )

    expect( title_element ).toBeInTheDocument()
    expect( start_element ).toBeInTheDocument()
    expect( textarea_element ).toBeInTheDocument()
  } )

  // TODO: bug fix
  // it( 'should add correct value', () => {
  //   render( <AppTextarea title='Description' placeholder='description' /> )
  //   const textarea_element = screen.getByPlaceholderText( "description" )

  //   user.type( textarea_element, '10' )
  //   expect( textarea_element ).toHaveValue( '10' )
  // } )
} )