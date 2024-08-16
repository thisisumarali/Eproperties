import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

function SlicedTitle({ title, maxWords = 4 }) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsLargeScreen(width >= 992);
  }, [width]);

  // Slice title based on screen size
  const slicedTitle = isLargeScreen
    ? title.split(' ').slice(0, maxWords).join(' ') + '...'
    : title;

  return (
    <h4>
      <Link href="#" onClick={handleSmoothScroll}>{slicedTitle}</Link>
    </h4>
  );
}

export default SlicedTitle;
