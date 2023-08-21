# KBY-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Kevin Baca Angeles

## Example
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'kby-product-card'
```

```
  <ProductCard  
      product={ product }
      initialValues={{
        count: 4,
        maxCount: 10
      }}
      >
      {
        ( {reset, count, increseBy, isMaxCountReached, maxCount} ) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )  
      }
  </ProductCard>
```