### Sizing

```jsx
<Input type="text" lg placeholder="Large" />
<Input type="text" md placeholder="Medium" />
<Input type="text" sm placeholder="Small" />
```

### Attributes

#### Disabled

The `disabled` attribute specifies whether the control is disabled for user input.

* Disabled controls will not get passed to the form processor.
* Disabled controls do not receive focus.
* Disabled controls are skipped in tabbing navigation.

```jsx
<Input type="text" placeholder="[placeholder] Disabled input" disabled />
<Input type="text" value="[value] Disabled input" disabled />
```

#### Read-only

The `readOnly` attribute specifies whether the control may be modified by the user.

* Read-only controls will get passed to the form processor.
* Read-only controls receive the focus but cannot be modified by the user.
* Read-only controls are included in tabbing navigation.

```jsx
<Input type="text" placeholder="[placeholder] Read-only input" readOnly />
<Input type="text" value="[value] Read-only input" readOnly />
```

### Ref forwarding

```jsx
const ref = React.createRef();
const [value, setValue] = React.useState('');

<>
    <div>ref.current.value = {JSON.stringify(value)}</div>
    <br />
    <Input
        ref={ref}
        type="text"
        onChange={() => {
            setValue(ref.current.value);
        }}
    />
</>
```
