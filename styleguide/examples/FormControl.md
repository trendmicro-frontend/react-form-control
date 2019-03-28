### Sizing

```jsx
<FormControl fcSize="lg">
    Large
</FormControl>
<FormControl fcSize="md">
    Medium
</FormControl>
<FormControl fcSize="sm">
    Small
</FormControl>
<FormControl fcSize="xs">
    Extra small
</FormControl>
```

### Plain text

If you want to have form controls styled as plain text, use inline style to override the default form control styling and preserve the correct margin and padding.

```jsx
<FormControl style={{ borderColor: 'transparent', height: 'auto' }}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</FormControl>
```

### Text Overflow

```jsx
<FormControl style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</FormControl>
```
