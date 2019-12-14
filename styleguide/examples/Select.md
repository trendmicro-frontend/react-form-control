### Sizing

```jsx
<Select lg>
    <option>Large</option>
</Select>
<Select md>
    <option>Medium</option>
</Select>
<Select sm>
    <option>Small</option>
</Select>
```

### Attributes

#### Disabled

The `disabled` attribute specifies whether the control is disabled for user input.

* Disabled controls will not get passed to the form processor.
* Disabled controls do not receive focus.
* Disabled controls are skipped in tabbing navigation.

```jsx
<Select disabled>
    <option>Disabled select</option>
</Select>
```

#### Read-only

The `select`, `optgroup`, and `option` elements do not support the `readOnly` attribute.

#### Multiple

The `multiple` attribute specifies that multiple options can be selected at once.

```jsx
<Select multiple>
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Select>
```

#### Size

The `size` attribute specifies the number of visible options in the list.

```jsx
<Select size="3">
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Select>
```

### Ref forwarding

```jsx
const ref = React.createRef();
const [value, setValue] = React.useState('one');

<>
    <div>ref.current.value = {JSON.stringify(value)}</div>
    <br />
    <Select
        ref={ref}
        defaultValue="one"
        onChange={(value) => {
            setValue(ref.current.value);
        }}
    >
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
    </Select>
</>
```
