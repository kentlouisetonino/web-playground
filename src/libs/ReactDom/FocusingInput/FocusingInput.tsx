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
      <input ref={inputRef} className="rounded border border-black p-2" />
      <button onClick={handleClick} className="rounded bg-black p-2 text-white">
        Focus Input
      </button>
    </div>
  );
}
