```jsx
<Textarea placeholder="Enter a message in the textarea" rows={3} />
```

### Attributes

### Disabled

The `disabled` attribute specifies whether the control is disabled for user input.

* Disabled controls will not get passed to the form processor.
* Disabled controls do not receive focus.
* Disabled controls are skipped in tabbing navigation.

```jsx
<Textarea placeholder="[placeholder] Disabled textarea" disabled />
<Textarea value="[value] Disabled textarea" disabled />
```

### Read-only

The `readOnly` attribute specifies whether the control may be modified by the user.

* Read-only controls will get passed to the form processor.
* Read-only controls receive the focus but cannot be modified by the user.
* Read-only controls are included in tabbing navigation.

```jsx
<Textarea placeholder="[placeholder] Read-only textarea" readOnly />
<Textarea value="[value] Read-only textarea" readOnly />
```
