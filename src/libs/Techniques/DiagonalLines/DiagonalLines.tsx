export default function DiagonalLines() {
  return (
    <div
      className="h-full w-full bg-black"
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, 
      #E6E7ED 10px,
      #E6E7ED 12px,
      transparent 12px,
      transparent 20px)`,
      }}
    />
  );
}
