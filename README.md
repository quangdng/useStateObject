# useObjectState hook

[![Build Status](https://travis-ci.org/quangdng/useObjectState.svg?branch=master)](https://travis-ci.org/quangdng/useObjectState)

A React functional component hook to mimic Class component object state management.

## Examples:

State declaration:

```javascript
const [state, useState] = useState({
  isLoading: false,
  isError: false
});
```

Usage:

```javascript
setState({
  isLoading: true
});

// State will be merged with the object you provide in setState instead of being replaced
// {
//    isLoading: true,
//    error: true
// }
```
