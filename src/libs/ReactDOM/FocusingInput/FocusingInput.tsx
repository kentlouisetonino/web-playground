import { useRef } from 'react';

/**
 * As the button component is clicked, the
 * handleClick function will check for the
 * inputRef and update the state for its
 * focus.
 *
 * The ref={inputRef} will tell React to put
 * the input element DOM node into inputRef.current.
 */
export default function FocusingInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="space-x-3">
      <input ref={inputRef} className="border border-black p-2 rounded" />
      <button onClick={handleClick} className="bg-black text-white p-2 rounded">
        Focus Input
      </button>
    </div>
  );
}
