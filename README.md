# covered examples:

- unit
  - rendered component output
    - text content
    - dom attributes
    - how many components are rendered
    - classes
    - style
    - component props
  - mocks
    - timer functions
    - public component methods
    - mock module dependencies
    - async code
  - events
    - native dom events (clicks)
    - custom vue event
      - component emits event
      - component listen for event
  - vue router
  - mixins
    - local
    - global
  - filters
  - forms
    - input forms
    - control inputs
    - radio buttons
  - factory
    - component factory
    - store factory
    - wrapper factory
  - vuex
    - test as instance
    - or seperatly
      - mutations
      - getters
      - actions
    - vuex in components
  - server side rendering (TODO)
- integration
  - not needed
- snapshots
- end 2 end tests (TODO)
  - for routes
  - for dynamic data
  - multiple browsers

# recomended test flow

<img src="assets/testing_pyramid.png" width="500px">
<img src="assets/test_flow.png" height="600px">

# what to test?

- the input could be:
  - Component props
  - User actions (like a button click)
  - Vue events
  - Data in a Vuex store
- Forms of output for a Vue component could be:
  - rendered text
    - Only test output that is dynamically generated
    - Only test output that is part of the component contract
  - Emitted events
  - External function calls

# jsdom limitations

- layout (element positions)
- navigation (submit form)

# test coverage

enable in `jest.config.js`

# debugging

- run `yarn test:unit:debug`
- open `chrome://inspect` in chrome browser

# dependencies

list of dependencies added after vue project is created with default settings:

- vue cli-plugin-unit-jest -> https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest
- flush-promises -> https://www.npmjs.com/package/flush-promises
- jest-date-mock -> https://www.npmjs.com/package/jest-date-mock

# references

- testing vue.js applications (Edd Yerburgh)
- vue test utils docs
- vue testing docs
- vuex testing docs
- jest docs
