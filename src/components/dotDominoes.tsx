export const DotDominoes = ({ value }: { value: number }) => {
  const position: Record<number, number[]> = {
    1: [4],
    2: [2, 6],
    3: [2, 4, 6],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
  }

  return (
    <>
      {Array.from({ length: 9 }).map((_, idx) => {
        return <div key={idx} className={`${position[value].includes(idx) ? 'bg-black' : 'bg-transparent'} w-4 h-4 rounded-full m-auto`}></div>
      })}
    </>
  )
}