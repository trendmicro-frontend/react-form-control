### Sizing

```jsx
<FormGroup>
    <Select fcSize="lg">
        <option>Large select</option>
    </Select>
</FormGroup>
<FormGroup>
    <Select fcSize="md">
        <option>Medium select</option>
    </Select>
</FormGroup>
<FormGroup>
    <Select fcSize="sm">
        <option>Small select</option>
    </Select>
</FormGroup>
<FormGroup>
    <Select fcSize="xs">
        <option>Extra small select</option>
    </Select>
</FormGroup>
```

### Attributes

#### Disabled

```jsx
<FormGroup>
    <Select disabled>
        <option>Disabled select</option>
    </Select>
</FormGroup>
```

#### Read-only

The `select`, `optgroup`, and `option` elements do not support the `readOnly` attribute.

#### Multiple

The `multiple` attribute specifies that multiple options can be selected at once.

```jsx
<Select multiple>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Select>
```

#### Size

The `size` attribute specifies the number of visible options in the list.

```jsx
<Select size="3">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Select>
```
