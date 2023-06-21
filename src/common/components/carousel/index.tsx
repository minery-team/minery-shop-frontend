import React, { ComponentProps, ForwardedRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const Carousel = React.forwardRef(function Carousel(
  { children, ...props }: ComponentProps<typeof Slider>,
  ref: ForwardedRef<Slider>
) {
  return (
    <Slider {...props} ref={ref}>
      {Array.isArray(children) ? (
        children.map((child, index) => <div key={index}>{child}</div>)
      ) : (
        <div>{children}</div>
      )}
    </Slider>
  );
});
