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
    <>
      <h1 className="text-3xl font-semibold mb-4 text-center py-4">Dominoes Take Home Test</h1>
      <div className="flex gap-4 flex-wrap sm:w-[50%] mx-auto justify-center">
        {values.map((item, idx) => {
          return (
            <div key={idx} className={`${item[0] === item[1] ? 'bg-red-300' : 'bg-white'} w-20 h-40 border shadow-xl border-black rounded-md`}>
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
      <div className="my-4 w-fit mx-auto text-center border-4 border-slate-200">
        <h1 className="text-xl font-semibold bg-slate-200 py-2 px-6">Double Number</h1>
        <span className="font-semibold">{doubleNumbers(values)}</span>
      </div>
      <div className="flex border shadow-xl mb-6 flex-col xl:flex-row">
        <div className="bg-slate-100 xl:w-[50%] px-6 py-4 xl:py-2 text-center xl:text-left">
          <h1 className="text-2xl font-semibold mb-2">Source</h1>
          <div>
            [{values.map((item) => `[${item[0]},${item[1]}]`)}]
          </div>
        </div>
        <div className="xl:w-[50%] p-2">
          <div className="mb-4 flex gap-2 justify-center flex-wrap">
            <button onClick={() => sortAsc(values, setValues)} className="py-2 px-6 border shadow-md">sort(ASC)</button>
            <button onClick={() => sortDesc(values, setValues)} className="py-2 px-6 border shadow-md">sort(DESC)</button>
            <button onClick={() => location.reload()} className="py-2 px-6 border shadow-md">reset</button>
            <button onClick={() => flipValue(values, setValues)} className="py-2 px-6 border shadow-md">flip</button>
            <button onClick={() => removeDup(values, setValues)} className="py-2 px-6 border shadow-md">remove duplicate</button>
          </div>
          <form onSubmit={handleSubmit} className="p-2 w-fit mx-auto xl:mx-0">
            <input
              name="removeTotal"
              id="removeTotal"
              type="number"
              min={0}
              className="outline-none border p-2 mb-2"
              value={removeTotal}
              onChange={(e) => setRemoveTotal(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 px-6 py-2 font-semibold text-white">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  )
}