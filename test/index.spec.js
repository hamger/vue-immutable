
import hello from '../src'

describe('hello', () => {
  it('hello return a string of hello and param', () => {
    expect(hello('learner')).toBe('Hello learner!')
  })
})
