const HighlightedText = ({ text, defaultColor }:any) => {
  // Dividimos el texto en palabras
  const words = text.split(' ');

  // Aseguramos que haya al menos 3 palabras para destacar
  const highlightedWords = words.slice(0, 3).join(' ');
  const remainingWords = words.slice(3).join(' ');

  return (
    <span>
      <span style={{ color: defaultColor }} className=" capitalize" >{highlightedWords}</span>{' '}
      <span className=' capitalize text-secondary'>{remainingWords}</span>
    </span>
  );
};

export default HighlightedText;
