import Image from 'next/image';
import { useRef } from 'react';
import nodejsImage from '../../Images/nodejs.png';
import typescriptImage from '../../Images/typescript.png';

export default function ScrollingToImage() {
  const reactjsImageRef = useRef<HTMLLIElement>(null);
  const nodejsImageRef = useRef<HTMLLIElement>(null);
  const typescriptImageRef = useRef<HTMLLIElement>(null);

  function handleScrollToReactJS() {
    if (reactjsImageRef.current) {
      reactjsImageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }

  function handleScrollToNodeJS() {
    if (nodejsImageRef.current) {
      nodejsImageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }

  function handleScrollToTypeScript() {
    if (typescriptImageRef.current) {
      typescriptImageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }

  return (
    <div>
      <nav>
        <button onClick={handleScrollToReactJS}>ReactJS</button>
        <button onClick={handleScrollToNodeJS}>NodeJS</button>
        <button onClick={handleScrollToTypeScript}>TypeScript</button>
      </nav>
      <div>
        <ul>
          <li>
            <Image src="/next.svg" alt="ReactJS" />
          </li>
          <li>
            <Image src={nodejsImage} alt="NodeJS" />
          </li>
          <li>
            <Image src={typescriptImage} alt="TypeScript" />
          </li>
        </ul>
      </div>
    </div>
  );
}
