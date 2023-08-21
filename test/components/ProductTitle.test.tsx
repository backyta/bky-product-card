import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components' 
import { product } from '../data/products';



describe('Pruebas en ProductTitle', () => {

    test('debe de mostrar el componente correctamente con el titulo perzonalizado', () => {
        
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' className='Custom-class'/>
        )
        // console.log( wrapper.toJSON() );
        expect( wrapper.toJSON() ).toMatchSnapshot();


    });
    
    test('debe de mostrar el componete con el nombre del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product }>
                {
                    () =>(
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
        //* Si no manda el title en las props del ProductTitle lo toma del context del product card
        //* del producto.
    });
});