# react-form-control [![build status](https://travis-ci.org/trendmicro-frontend/react-form-control.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-form-control) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-form-control/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-form-control?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-form-control.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-form-control/)

React Form Control

Demo: https://trendmicro-frontend.github.io/react-form-control

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-form-control](https://github.com/trendmicro-frontend/react-form-control):

  ```
  npm install --save react @trendmicro/react-form-control
  ```

2. At this point you can import `@trendmicro/react-form-control` and its styles in your application as follows:

  ```js
  import FormControl, { Input, Select, Textarea } from '@trendmicro/react-form-control';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-form-control/dist/react-form-control.css';
  ```

## Overview

### Form controls

The `<FormControl>` component renders a form control with block-level styling (`display: block` and `width: 100%`). Supported textual form controls includes `<Input>`, `<Select>`, and `<Textarea>`.

```jsx
<FormGroup>
    <label>Email address</label>
    <Input type="text" placeholder="name@example.com" />
</FormGroup>
<FormGroup>
    <label>Example select</label>
    <Select defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </Select>
</FormGroup>
<FormGroup>
    <label>Example multiple select</label>
    <Select multiple defaultValue="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </Select>
</FormGroup>
<FormGroup>
    <label>Example textarea</label>
    <Textarea rows={3} />
</FormGroup>
```

### Form groups

Using the `<FormGroup>` component is the easiest way to add some structure to forms, it provides a flexible way that encourages proper grouping of labels, controls, and form validation messaging.

The `<FormGroup>` component is not provided here, but you can use [styled-components](https://github.com/styled-components/styled-components) to style with plain CSS styles. By default, it only applies `margin-bottom` as below:

```jsx
const FormGroup = styled.div`
    margin-bottom: 12px;
`;
```

## API

### Properties

#### FromControl

Name | Type | Default | Description
:--- | :--- | :------ | :----------
tag | element | 'div' |
fcSize | One of:<br/>'lg'<br/>'md'<br/>'sm'<br/>'xs' | 'md' |

#### Input

Name | Type | Default | Description
:--- | :--- | :------ | :----------
tag | element | 'input' |
fcSize | One of:<br/>'lg'<br/>'md'<br/>'sm'<br/>'xs' | 'md' |

#### Select

Name | Type | Default | Description
:--- | :--- | :------ | :----------
tag | element | 'select' |
fcSize | One of:<br/>'lg'<br/>'md'<br/>'sm'<br/>'xs' | 'md' |

#### Textarea

Name | Type | Default | Description
:--- | :--- | :------ | :----------
tag | element | 'textarea' |

## License

MIT
