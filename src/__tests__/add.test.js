import { add } from '../add'

it('adds', () => {
  expect(add(2, 2)).toBe(4)
})

it('adds negatives', () => {
  expect(add(-2, -2)).toBe(-4)
})
