import React from 'react'
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components' 
import { product2 } from '../data/products';

describe('Pruebas en ProductImage', () => {
    
    test('debe de mostrar el componente correctamente con la imagen perzonalizada', () => {
        
        const wrapper = renderer.create(
            <ProductImage img='https://hla.jpg' className='Custom-class'/>
        )
        // console.log( wrapper.toJSON() );
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('debe de mostrar el componete con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () =>(
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    });
});