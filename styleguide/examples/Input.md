### Sizing

```jsx
<Input type="text" fcSize="lg" placeholder="Large input" />
<Input type="text" fcSize="md" placeholder="Medium input" />
<Input type="text" fcSize="sm" placeholder="Small input" />
<Input type="text" fcSize="xs" placeholder="Extra small input" />
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
