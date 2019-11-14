# useObjectState hook

A React functional component hook to mimic Class component object state management.

## Examples:

State declaration:

```
const [state, useState] = useState({
    isLoading: false,
    isError: false,
})
```

Usage:

```
setState({
    isLoading: true
})

// State will be merged with the object you provide in setState instead of being replaced
// {
//    isLoading: true,
//    error: true
// }
```
