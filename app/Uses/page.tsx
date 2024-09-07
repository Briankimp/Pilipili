import React from 'react'
import Carousel from '../Components/Carousel'
import Link from 'next/link';
import Button from '../Components/Button';

const Uses = () => {
  return (
    <div className="text-black-100">
      <h1>Flavours that Bring you together</h1>
      <div>
        <Carousel />
      </div>
      <div>
        <Link href="/">
          <Button variant="Primary" >Show Us Your Recipe</Button>
        </Link>
      </div>
    </div>
  );
}

export default Uses
