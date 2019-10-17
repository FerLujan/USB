import React from 'react';
//Testing tools
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
//Components 
import Wizard from './Wizard';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepTree';


//This test should receive the steps as props
//Use enzime or react

Enzyme.configure( { adapter: new Adapter() } );

describe( 'Wizard moves from different steps', () => {
	let wizard = Enzyme.mount(
		<Wizard
			steps={ [
				StepOne,
				StepTwo,
				StepThree
			] }
			wizardContext={ {} }
			onComplete={ () => {} }
			header={ () => <div /> }
		/>
	);

    // Next step
	test( 'Wizard should go to the next step', () => {
		act( () => wizard.find( 'button#next' ).props().onClick() );
		
		wizard.update();
		expect( wizard.find( 'p' ).text() ).toEqual( 'Step 2' );
	} );
    //Previous step
	test( 'Wizard should go to the previous step', () => {
		act( () => wizard.find( 'button#prev' ).props().onClick() );
		wizard.update();
		expect( wizard.find( 'p' ).text() ).toEqual( 'Step 1' );
	} );
} );