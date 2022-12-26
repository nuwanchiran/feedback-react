import {render, screen} from '@testing-library/react'
import AppSelect from './AppSelect'

// TODO: bug fix
describe( 'The AppSelect', () => {
  it( 'should render', () => {
    render(
      <AppSelect title='Name' required>
        <option value="Chiran">Chiran</option>
      </AppSelect>
    )

    const title_element = screen.queryByText( "Name" )
    const start_element = screen.queryByText( "*" )
    // const option_element = screen.getByRole( "select", {
    //   name: "Chiran"
    // } )

    expect( title_element ).toBeInTheDocument()
    expect( start_element ).toBeInTheDocument()
    // expect( option_element ).toBeInTheDocument()
  } )
} )