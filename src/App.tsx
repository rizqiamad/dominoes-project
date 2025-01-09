import { useState } from "react";
import { doubleNumbers, flipValue, removeDup, removeTotalNumber, sortAsc, sortDesc } from "./utils";
import { DotDominoes } from "./components/dotDominoes";

export default function App() {
  const [removeTotal, setRemoveTotal] = useState<string>('')
  const [values, setValues] = useState<number[][]>([
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
    [1, 1],
  ])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & {
      removeTotal: HTMLInputElement
    }
    removeTotalNumber(values, setValues, Number(formElements.removeTotal.value))
  }
  return (
    <div className="px-2 py-2">
      <h1 className="text-3xl font-semibold mb-4">Dominos Take Home Test</h1>
      <div className="py-6 bg-slate-100 my-2">
        [{values.map((item) => `[${item[0]},${item[1]}]`)}]
      </div>
      <div className="flex gap-4 flex-wrap">
        {values.map((item, idx) => {
          return (
            <div key={idx} className="w-20 h-40 bg-white border shadow-xl border-black rounded-md">
              <div className="h-[50%] grid grid-cols-3 grid-rows-3 p-1">
                <DotDominoes value={item[0]} />
              </div>
              <span className="h-[1px] bg-black block m-auto"></span>
              <div className="h-[50%] grid grid-cols-3 grid-rows-3 p-1">
                <DotDominoes value={item[1]} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">Double Number</h1>
        <span>{doubleNumbers(values)}</span>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">Sorting</h1>
        <span className="flex gap-4">
          <button onClick={() => sortAsc(values, setValues)} className="py-1 px-4 border-2 border-black rounded-md font-semibold">sort(ASC)</button>
          <button onClick={() => sortDesc(values, setValues)} className="py-1 px-4 border-2 border-black rounded-md font-semibold">sort(DESC)</button>
          <button onClick={() => location.reload()} className="py-1 px-4 border-2 border-black rounded-md font-semibold">reset</button>
          <button onClick={() => flipValue(values, setValues)} className="py-1 px-4 border-2 border-black rounded-md font-semibold">flip</button>
          <button onClick={() => removeDup(values, setValues)} className="py-1 px-4 border-2 border-black rounded-md font-semibold">remove duplicate</button>
        </span>
      </div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold mb-2">Remove Total Number</h1>
        <span className="flex gap-4">
          <form onSubmit={handleSubmit} >
            <input
              name="removeTotal"
              id="removeTotal"
              type="number"
              min={0}
              className="appearance-none outline-none border-b py-2 mb-2"
              value={removeTotal}
              onChange={(e) => setRemoveTotal(e.target.value)}
            />
            <button type="submit" className="block py-1 px-4 border-2 border-black rounded-md font-semibold">SUBMIT</button>
          </form>
        </span>
      </div>
    </div>
  )
}